const { min, max } = require('lodash');

// Read numbers from command line arguments
const args = process.argv.slice(2).map(Number);


if (args.length === 0 || args.some(isNaN)) {
    console.error("Provide a list of numbers separated by spaces.\nExample: npm run calculate 1 2 3 4 5");
    process.exit(1);
}

const minNum = min(args);
const maxNum = max(args);

console.log('Min:', minNum);
console.log('Max:', maxNum);