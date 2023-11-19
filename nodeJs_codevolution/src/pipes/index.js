const fs = require('node:fs');
const zlib = require('node:zlib');

fs.writeFileSync('./file.txt', 'Hello world!');
fs.writeFileSync('./file2.txt', 'Hello world 2');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
    encoding: 'utf-8',
    highWaterMark: 100,
});

readableStream.pipe(gzip).pipe(fs.WriteStream('./file.txt.gz'));

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writableStream);