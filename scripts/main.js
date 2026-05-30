"use strict";

const log = (text) => {
  console.log(text);
}

for(let i = 0; i < 10; i++){
  log(i);
}

const arr = [1,2,3];

arr.map((el) => el + 1);
