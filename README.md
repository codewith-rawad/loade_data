# European Cities Population Visualization

This project visualizes the population of various cities in Europe by reading and displaying data from a CSV file, `cities_and_population.csv`. Cities with a population of over 1 million are highlighted with larger circles, and city names are displayed for these high-population locations.

## Features

- **Data Processing**: 
  - Reads data from `cities_and_population.csv` using D3.js.
  - Filters to include only cities located in European Union countries.
  - Converts necessary values (x, y coordinates and population) from strings to numbers.

- **Visualization**:
  - Each city is displayed as a circle on an SVG element based on its coordinates.
  - Cities with a population less than 1 million are shown with a smaller radius, while those with a population over 1 million have a larger circle and are labeled with the city name.

- **Loader Animation**:
  - A loading animation appears while the data is being processed.
  - To ensure visibility, a delay (5 seconds) is added to the display of the loader, even if data loads quickly.
  - The loader is automatically hidden after data is processed and displayed.

## Project Structure

- **data/cities_and_population.csv**: CSV file containing the data of cities, their populations, and whether they are in the European Union.
- **index.html**: Main HTML file containing the structure for displaying the data and loader.
- **script.js**: JavaScript file (as shown in the code snippet) containing the D3.js data processing and visualization code.
- **styles.css**: CSS file containing styles for the SVG, loader, and other visual elements.

## Getting Started

1. **Install D3.js**:
   - If not already included, add D3.js by including this CDN link in your `index.html` file:
     ```html
     <script src="https://d3js.org/d3.v6.min.js"></script>
     ```

2. **Place your data**:
   - Ensure the CSV file `cities_and_population.csv` is in the `data/` directory. 
   - The file should contain columns: `country`, `city`, `population`, `x`, `y`, `eu`.

3. **Run the Project**:
   - Open `index.html` in a browser to view the visualization. 
   - A loader will appear briefly while the data is loaded and processed.
   - After loading, European cities will be displayed based on their population.

## CSV File Structure

The `cities_and_population.csv` file should follow this format:

| country | city     | population | x      | y      | eu   |
|---------|----------|------------|--------|--------|------|
| France  | Paris    | 2148327    | 100.5  | 
