const express = require("express");
const app = express();
// const socket.io = require("socket.io");

// console.log(express);
// console.log("\n\nthis is meee heheeh\n");
// console.log(app);

const test = () => {
  console.log(this.meow);
}

test.meow = "meow";

console.log(test.meow);
