// //DZ#2
// // #1
// //Квадратное уравнине
// function scure(a, b, c){
//     var D = ( b * b ) - ( 4 * a * c);
//     var arr = [];
//     if (D < 0) {
//         return false;
//     }
//     if (D == 0){
//         arr[0] = - b / (2 * a);
//         return arr;
//     }
//     arr[0] = (- b + Math.sqrt(D) ) / (2 * a);
//     arr[1] = (- b - Math.sqrt(D) ) / (2 * a);
//     return arr;
// }
// console.log( scure(1, -5 ,6));
// console.log( scure(1, -10 ,25));


// //#2
// var func = function(num1, num2) {
//     var arr = [];
//     if (num1 && num2) {
//         min = 1;
//         max = 3;
//         var mod = Math.abs(num1) + Math.abs(num2);
//         for (var i = 0; i < mod; i++) {
//             var temp = parseInt(Math.random() * (max - min) + min);
//             arr.push(temp);
//         }
//     } else if (num1 || num2) {
//         max = num1 || num2;
//         min = -num1 || -num2;
//         for (var i = 0; i < max * 2; i++) {
//             var temp = parseInt(Math.random() * (max - min) + min);
//             arr.push(temp);
//         }
//     } else {
//         var len = parseInt(Math.random() * (29 - 10) + 10);
//         for (var i = 0; i < len; i++) {
//             min = -1000;
//             max = 1000;
//             var temp = parseInt(Math.random() * (max - min) + min);
//             arr.push(temp);
//         }
//     }
//     return arr;
// };
// console.log(func(-10, 5));
// console.log(func(7));
// console.log(func(5));

// // # 3
function func(array) {
    console.log("Входной массив: " + array);
    kp = 0;
    knp = 0;
    p = 0;
    sumP = 0;
    sumO = 0;
    for (let index = 0; index < array.length; index++) {
        if(array[index] >= 0){
            p++;
            sumP += array[index];
        }
        if(array[index] < 0){
            knp++;
            sumO += (-array[index]);
        }
        if(array[index] % 2 == 0){
            kp++;
            continue;
        }    
    }
    if(kp > knp) {
        console.log("Больше парных.");
    }
    else if(kp == knp){
        console.log("Количество парных и непарных равно.");
    }
    else{
        console.log("Больше непарных.");
    }
    console.log("Парных - " + kp + " Непарных - " + knp);

    if(p > array.length - p) {
        console.log("Больше положительных.");
    }
    else if(p == array.length - p){
        console.log("Количество положительных и отрицательных равно.");
    }
    else{
        console.log("Больше отрицательных.");
    }
    console.log("Положительных - " + p + " Отрицательных - " + (array.length - p));

    if(sumP > sumO) {
        console.log("Сумма положительных больше.");
    }
    else if(sumP == sumO){
        console.log("Сумма положительных и отрицательных равна.");
    }
    else{
        console.log("Сумма отрицательных больше(по модулю).");
    }
    console.log("Сумма положительных - " + sumP + " Сумма отрицательных - " + sumO);
    return array.reverse();
}
// func([4,8,4,-3,-2,-1]);
console.log("Результат: " + func([4,8,4,-3,-2,-1]));

//  function ptint_hello(){
//      console.log("print hello");
//  }
//  ptint_hello();
//  function sum(a , b){
//     return a + b;
//  }
//  console.log("cумма " + sum(1,3));

//  var my_sume = sum(1,4);
//  console.log("cумма " + my_sume);

//  function hello_sum(a,b,c){
//     var i = ( a + a ) + 4 * b * c;
//     console.log("(a + a ) + 4 * b * c = " + i);
//     hello_sum(a++,++b,c--);
//     return i;
// }

// // hello_sum(10,5,4);

// // for(var i = 10; i > 0; i++){
// //     var k = Math.floor(Math.random() * 2);
// //     process.stdout.write(k + " ");//puskai 
// // }

// function func(name){
//     console.log("привет " + name);
// }

// if(3>4){

// }


// // func("Сергей");
// // func("Даня");
// // func("tcc");

// function func (name,age){
//     if( age <= 20){
//         console.log(name,"Молодой")
//     }else{
//         console.log(name,"Чот ты постарел")
//     }
// }
// func("Сергей",19);

