// 1 функции

 // function  declaration        //    ее отличие от EXPRESSION в том что можно ставить до и после переменных
 //    function greet(name){              //  greet -приветствие
 //    console.log('привет', name)
 // }
 // function EXPRESSION                   //можно ставить тока перед переменными
//     const primer2  = function primer2(name) {      // можно функцию писать так
//     console.log('Hellow ', name)
// }

// greet('alex')                      //выводим переменную алех
// primer2('len')



// console.log(typeof greet)   // в консоле  с помощью typeof можем определить функция или перемен
// console.dir(greet)   // можно воспользов методом dir чтоб понять что такое greet




// // 2 Анонимные функции
// let perem = 0                                      // 4 заводим перемен приравниваем к 0
// const interval = setInterval (function (){        // 1  функц  без названия  // 5 const interval = чтоб остановит
//     if (perem === 8) {                          // 7
//       clearInterval (interval)                 // 6 метод    чистим интервал
//     } else {
//         console.log(++perem)
//     }
//   console.log(++perem)                        // 2 в консоль выводим перем
// }, 1000)                                     // 3 второй метод задержка после котор будет вызвана данная функция



//3 стрелочные функции

// function primer(name) {
//     console.log('privet', name)         // одна и таже функция отличаеться написанием
// }

// const strelka = () => {
//     console.log('privet', name)          // одна и таже функция отличаеться написанием
// }

// const strelka2 = name => console.log('privet', name)
// strelka('имя в апострофах')               // одна и таже функция отличаеться написанием
//

// const ttt2 = num => {                     // функц возвед в степень = имеет в себе число num
//     return num **                    // возвращаем   num
//     console.log(num(5))              // должны получить 25
// }                              // можно в 1 строку т.к функц состоит из 1 строки   const ttt = num => num **2


//параметры по умолчанию
// const  sum = (a,b=1) => a+b    // параметр по умолчанию перетераеться //также по умолсанию можно b=a*2
// console.log()

// функция принимающ неограниченое значение чисел
// function sumAll (...all){       // оператор рест выглядит как ... и он в all собирает все числа  это массив
//     console.log( all)
//      let rez = 0               // чтоб посчитать сумму создаем перем rez
//       for (let num of all){    // с помощью цикла for  из массива all
//        rez+=num               // к результату прибав конкретн число
//     } return rez
// }
// const rezul = sumAll(1, 2, 3, 4)          // созд перем rezul и =
// console.log(rezul)rezul


// Замыкание   когда из одной функ возвращ др функц
// function crit (name){
//     return function (lastName){
//         console.log( name + lastName)
//     }
// }
// const logWit = crit ('alex ')
// console.log(logWit ('minin'))
// console.log(logWit ('pojar'))
