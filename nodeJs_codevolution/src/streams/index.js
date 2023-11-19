const fs = require('fs');

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf-8',
    highWaterMark: 100,
});

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.on('data', (chunk) => {
    console.log('readaleStream', chunk);

    writableStream.write(chunk);
})