// We notice that the object array includes country, city, population, x, y, eu
// All of them are of the String pattern.

// Here is the loader instruction to show and hide it because the data is very small,
// so the loader will not  appear long time if I do not add set time out
//  in addition to time for load data.
var loader = document.querySelector(".first");

// Start the timer
var startTime = performance.now();

// read the data from cities_and_population.csv
d3.csv("data/cities_and_population.csv")
  .then((data) => {
    // Change values from string to number
    data.forEach((d) => {
      d.x = +d.x;
      d.y = +d.y;
      d.population = +d.population;
    });

    // Show only cities which are located in Europe
    const filteredData = data.filter((d) => d.eu === "true");

    // Calculate the time taken to load the data
    var endTime = performance.now();
    var loadTime = endTime - startTime; // Time taken to load data in milliseconds

    // Add 5 seconds to the load time
    var totalDelay = loadTime + 5000;

    // Add text that includes only the number of European cities
    setTimeout(() => {
      d3.select("body")
        .append("p")
        .text("The number of EU countries is " + filteredData.length);

      // Add the SVG and set its parameters as follows:
      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", 700)
        .attr("height", 550);
      
      // Add circles to each item in the filtered list
      // and set the radius based on population density to either 4 or 8.
      svg
        .selectAll("circle")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => (d.population < 1000000 ? 4 : 8))
        .attr("fill", "rgb(255,255,255)");

      // Add the text for the city that bears its name
      svg
        .selectAll("text")
        .data(filteredData)
        .enter()
        .append("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y - 12)
        .attr("fill", "white")
        .text((d) => d.city)
        .attr("class", "city-label")
        .attr("opacity", (d) => (d.population >= 1000000 ? 1 : 0));
    }, totalDelay); 
    // Hide the loader after the calculated total delay
    setTimeout(() => {
      loader.classList.add("remove");
    }, totalDelay);
  })
  .catch((error) => {
    console.error("Error loading the data:", error);
  });
