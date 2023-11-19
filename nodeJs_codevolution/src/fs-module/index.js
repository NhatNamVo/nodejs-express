/**
 * fs module cho phép bạn làm việc với hệ thống file trong máy tính
 */
// const fs = require('node:fs');

// console.log('first');

// const fileContent = fs.readFileSync("../../file.txt", 'utf-8');
// console.log(fileContent);

// console.log('second');

// fs.readFile("../../file.txt", 'utf-8', (error, data) => {
//     console.log({ error, data });

//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

// console.log('third');

// fs.writeFileSync('./greeting.txt', 'Hello world!!!');
// fs.writeFile('./greeting.txt', 'Test of the test', (error, data) => {
//     console.log({error, data});

//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })


/**
 * fs promise
 */

const fs = require('node:fs/promises');

fs.readFile('./greeting.txt', 'utf-8').then(data => {
    console.log(data);
}).catch(error => console.log(error));

async function readFile(file) {
    try {
        const data = await fs.readFile(file, 'utf-8');

        console.log('content', data);
    } catch(error) {
        console.log(error);
    }
}

readFile('./greeting.txt');