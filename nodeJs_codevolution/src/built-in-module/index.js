// Path module
const path = require('node:path');

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));

/**
 * Event MOdule
 * Cho phép module làm việt với event in nodeJs
 * 1 event là 1 hành động hoặc 1 hiện diện cái mà được diễn ra trong app mà chung ta có thể response
 * Sử dụng để dispatch custom event và trả lại custom event trong non-blocking manner
 */
// const EventEmitter = require('node:events');
// const PizzaShop = require('./pizza-shop');

// const event = new EventEmitter();

// event.on('order-pizza', (size, topping) => {
//     console.log(`order received! Baking a pizza ${size} ${topping}`);
// })

// event.emit('order-pizza', "large", "mushroom");

// const pizzaShop = new PizzaShop();

// pizzaShop.on('order-receiving', (size, topping) => {
//     console.log(`order received! Baking a pizza ${size} ${topping}`);
// })


// pizzaShop.order('lg', 'kem');

/**
 * Charater Sets  and Encoding
 * Charater Sets: xác định các chữ cái dưới dạng số (Unicode and ASCII)
 * Character Encoding: đưa các ký tự về dưới dạng dữ liệu nhị phân trước khi lưu vào máy tính. NÓ cho biết có thể sử dụng bao nhiêu bit để biểu thị số
 */

/**
 * Streams and Bufers
 * Stream là 1 chuỗi dữ liệu được move từ điểm nảy tời diểm khác theo thời gian
 * Ở nodejs thì các luồng dữ liệu sẽ được chia làm từng khối xử lý thay vì đợi tất cả dữ liệu được truyền tải về rồi mới đi xử lý
 */
const buffer = new Buffer.from('Name');

console.log(buffer.toJSON());

/**
 * Asynchoronous Javascript
 */
