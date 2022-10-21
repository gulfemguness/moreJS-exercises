
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStrLen = (str) =>{
    return new Promise((resolve, reject)=>{
        if(str.length > 10){
            resolve('Big world')
        }else{
            reject('Small Number')
        }
    })
}

// console.log(checkStrLen('bored'))

console.log(checkStrLen('Sun is shining, the weather is sweet. Make you want to move your dancing feet...'))

//promise(resolve, reject)