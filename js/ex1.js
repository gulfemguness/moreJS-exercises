//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
        // ES6 way to loop over a dictionary!
        // for in loop in JS loops over a dictionary/Object
            // for (let key in person2){
            //     console.log(key)
            //     console.log(person2[key])
            // }

function fav_food() {
    for (let key in person3){
        console.log(key)
        console.log(person3[key])
    }
}

console.log(fav_food())


