function discount (pris, time){
    let skidos = 0
    if (time >= 20) {
        skidos = pris / 100 * 30
    } else if ( time >= 19) {
        skidos = pris /100 * 20
    }
    return skidos
}

function itogo (pris, time){
    return pris - discount(pris, time)
}

// console.log(1, 2, 3, 'скидка составит 10 руб')
// console.log('скидка составит 30%', discount(1000, 20) - 300, ' руб ( нужно 300)')
// console.log('скидка составит ', discount(1000, 21) - 300, ' руб ( нужно 300)')
// console.log('скидка составит ', discount(500, 22) - 150, ' руб ( нужно 150)')
// console.log('скидка составит ', discount(1000, 19) - 200, ' руб ( нужно 200)')
// console.log('скидка составит ', discount(1000, 18) - 0, ' руб ( нужно 0)')
// console.log('скидка составит ', discount(1000, 17) - 0, ' руб ( нужно 0)')
// console.log(discount(500, 10), 'скидка составит 0 руб')

console.log("К оплате с уёчтом скидки", itogo(1000, 20), " руб, (нужно 700 ) ", "Ваша выгода", discount(1000, 20))
// console.log("К оплате с уёчтом скидки", itogo(500, 22), " руб, (нужно 350 ) ")
// console.log("К оплате с уёчтом скидки", itogo(1000, 19), " руб, (нужно 800 ) ")



// если время 19 выведи в консоль цену - 20%
// если время 20 выведи в консоль цену - 30%
// если время 18 выведи в консоль цену
