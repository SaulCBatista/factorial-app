const fs = require('fs');
const path = require('path');

function factorial(n) {
    if (n < 0) return null;
    return n <= 1 ? 1 : n * factorial(n - 1);
}

const args = process.argv.slice(2);
if(args.length === 0) {
    console.log('Uso: node index.js <numero>');
    ProcessingInstruction.exit(1);
}

const number = parseInt(args[0], 10);
const result = factorial(number);

const filePath = path.join(__dirname, 'results', 'output.txt');

if(result !== null) {
    console.log(`Fatorial de ${number} é ${result}`);
    fs.appendFileSync(filePath, `Fatorial de ${number} é ${result}\n`);
} else {
    console.log('Número inválido')
}