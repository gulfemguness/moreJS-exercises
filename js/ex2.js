//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.

Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    returnInfo(){
        return `Name: ${this.name} \nAge: ${this.age}`
    }

    increaseAge(){
        return this.age += 1
    }
}

// How old is Barbie really?

    //On March 9, 1959, the first Barbie doll goes on display at the American Toy Fair in New York City. (history.com)

let barbie = new Person('Barbie', 63)
console.log(barbie.returnInfo())

    //Kenneth Sean Carson is a fashion doll and fictional character invented by Elliot Handler 
    //and introduced by American toy company Mattel in 1961 as the counterpart of Barbie (wikipedia.org)

let ken = new Person('Ken', 61)
ken.increaseAge()
console.log(ken.returnInfo())



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
