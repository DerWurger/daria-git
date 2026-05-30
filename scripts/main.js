"use strict";

const log = (text) => {
  console.log(text);
}

for(let i = 0; i < 10; i++){
  log(i);
}

const arr = [0,1,2];

arr.map((el) => el + 1);
