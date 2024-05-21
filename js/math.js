//STEP 1
let userNumber = parseInt(window.prompt('Please enter a number'))
if (!isNaN(userNumber)) {
    console.log(Math.abs(userNumber))
} else {
    window.alert(`Please enter a valid number`)
}

//STEP 2
// let userNumber = parseFloat(window.prompt('Please enter a decimal'))
// if (!isNaN(userNumber)) {
//     console.log(Math.ceil(userNumber))
// } else {
//     window.alert(`Please enter a valid decimal`)
// }

//STEP 3
// let userNumber = parseFloat(window.prompt('Please enter a decimal'))
// if (!isNaN(userNumber)) {
//     console.log(Math.floor(userNumber))
// } else {
//     window.alert(`Please enter a valid decimal`)
// }

//STEP 4
// let numbers = window.prompt('Please enter 5 comma-separated numbers').split(',').map(Number)
// console.log(`The largest number is ${Math.max(...numbers)}`)
// console.log(`The smallest number is ${Math.min(...numbers)}`)

//STEP 5
// let userNumber = parseInt(window.prompt('Please enter a number'))
// if (!isNaN(userNumber) && userNumber > 0) {
//     console.log(Math.sqrt(userNumber))
// } else {
//     window.alert(`Please enter a valid number`)
// }