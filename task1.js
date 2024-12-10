let maximumDataTransferSpeed = 100;


let dayOfWeek = 7;


let result = 2 + 6 / (1 + 3);
console.log(result)


const prompt = require('prompt-sync')();
let x = prompt('введите число:');
if (x>0 && x<9){
    console.log('истина')
} else {
    console.log('ложь')
}


let a = prompt('введите число от 0 до 10: ');
if (a % 2 ==0) {
    console.log('истина')
} else {
    console.log('ложь')
}

let sum1 = 1 + true;
console.log(sum1, typeof sum1);
let sum2 = '1' + 2;
console.log(sum2, typeof sum2);
let sum3 = '1' + false;
console.log(sum3,typeof sum3);