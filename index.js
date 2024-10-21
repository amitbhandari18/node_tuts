const fs = require("fs");
const app = require("./app")

// console.log(app.c(7, 8));


const myArr = [1, 2, 3, 4, 3, 2, 5, 2, 5];

let result = myArr.filter((items) => {
    // console.log(items > 3);
    return items < 3;
})

// console.log(result);


// fs.writeFileSync("hello.text", "hello world"); 

console.log(__filename);


