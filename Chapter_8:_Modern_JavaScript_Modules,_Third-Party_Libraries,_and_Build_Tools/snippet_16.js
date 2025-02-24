import { formatDate } from './dateFormatter.js';
import { capitalizeWords } from './utils.js';
const date = new Date();
console.log("Formatted Date:", formatDate(date));
const title = "hello world from modular javascript";
console.log("Capitalized:", capitalizeWords(title));
After writing your code, build your project using Webpack and open the generated bundle.js in your HTML file.