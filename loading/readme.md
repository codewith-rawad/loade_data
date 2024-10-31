First, it is recommended to run the project using a live server. One of the key features I implemented in this project is the creation of a custom loader. I also made adjustments to some properties through the existing CSS files.

Since the data being loaded is very small, the loader would appear for a very brief moment if displayed only while loading the data. Therefore, I added a few extra seconds to ensure the loader is visible more clearly.

Additionally, I have included comments before each instruction to ensure clarity and provide explanations for each step.

i use performance.now() instead of  date.now() because the first returns the time in milliseconds, with a precision of up to microseconds (1/1,000,000 of a second).