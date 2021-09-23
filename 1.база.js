// 1 переменые

// alert(1)
// const firstName = 'alex'
// const age = 33
// const isProgrammer = true
//
// const _ = 'private'
// const  $ = 'some value'
// const withNum5 = '5'
// console.log(firstName,!isProgrammer, age)

//  2 . мутирование

// console.log( 'имя человека: ' + firstName + ' а возраст человека: ' +age)
// prompt('введите фамилию')
// const lastName = prompt('Введите фамилию')
// alert( firstName + '' + lastName)

// 3.операторы

// let correntYear = 2021
// const birthYear = 1988
//
// const age = correntYear - birthYear
//  console.log(age)


// const a = 10
// const b = 5
// let c = 32
// // c = c + a
// c += a
//
// console.log (a-b, 5)
// console.log (a+b, 15)
// console.log (a*b, 50)
// console.log (a/b, 2)
//
// correntYear++
// correntYear = correntYear + 1
//
// console.log (correntYear++, 2021)
// console.log (correntYear, 2022)
// console.log (++correntYear, 2023)
// console.log ( c )

// 4. Типы данных


// 5 Приоритет операторов      mdn  т поиск в браузере  приоритеты  операторов см таблицу
// const fullAge = 32
// const birthYear = 1988
// const currentYear = 2021
//
// const isFullAge = currentYear - birthYear >= fullAge  //26 >= 27 => true
// console.log(isFullAge)


//  6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === "pending") {
//     console.log('курс еще в разработке')
// } else {
//     console.log ('курс не пошел')
// }
//
// const num1 = 5  //number
// const num2 = '5'  // string
//
// console.log( num1 === num2)   // чтоб проверялось не тока по значению но и по типу данных ставим тройное ===

// const isReady = true
// if (isReady) {
//     console.log ('vse gotovo')
// } else {
//     console.log ('Ne gotovo')
// }
// оптимизировать можно тоак   как тернарное выражение для простых условий
// isReady ? console.log ('vse gotovo') :  console.log ('Ne gotovo')


// булевая логика  в поиске набири mdn logical operation
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// 8 функции

// function schitaem (dataR){
//     return 2021 - dataR
// }
//
// // console.log('Возраст для 1988 = ', schitaem (1988))
// // console.log(schitaem (1978))
// // console.log(schitaem (1968))
//
//
// function logInfoAbout (name, year){
//         const age = schitaem(year)
// if (age>0){
//     console.log('человек по имени ' + name + ' сейчас ему ' + age)
// } else {
//     console.log('это уже будущее')
// }
// }
// logInfoAbout('alex', 1988)
// logInfoAbout('pet', 2030)
// logInfoAbout('peter', 2022)


// 9 массивы
// const cars = ['bmw', 'mers', 'ford']
// console.log(cars. length)
// console.log(cars [2])
// console.log(cars [1])
//
// cars [2] = 'bentli'
// cars [3] = 'mazda'
// console.log(cars)

// 10 циклы
// const cars = ['bmw', 'mers', 'ford', 'btr']
// // for (let i = 0; i < cars.length; i++){
// // const  car = cars [i]
// // console.log(car)
//
// //оптимизируем ниже
// for (let car of cars) {
// console.log(car)
// }

//11 объекты.

//  строки

// const name = 'alex'
// const age =   33
//
// function getAge() {
//     return age
// }
//
// const output =`привет, я  ${name} и мне ${age > 35 ? 'a' : 'b'} лет.`
// console.log(output)
