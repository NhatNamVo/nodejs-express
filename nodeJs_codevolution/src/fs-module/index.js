/**
 * fs module cho phép bạn làm việc với hệ thống file trong máy tính
 */
const fs = require('node:fs');

console.log('first');

const fileContent = fs.readFileSync("../../file.txt", 'utf-8');
console.log(fileContent);

console.log('second');

fs.readFile("../../file.txt", 'utf-8', (error, data) => {
    console.log({ error, data });

    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log('third');