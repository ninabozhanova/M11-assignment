//STEP 1
let userName = window.prompt('Please enter your name').trim()
if (userName.length > 0) {
    window.alert(`You name has ${userName.length} characters`)
} else {
    window.alert(`Please enter a valid name`)
}

//STEP 2
// let userName = window.prompt('Please enter your name').trim()
// if (userName.length > 0) {
//     let position = parseInt(window.prompt(`Please enter a number between 1 and ${userName.length}`))
//     if (position >= 1 && position <= userName.length) {
//         window.alert(`You name's character #${position} is "${userName.charAt(position - 1)}"`)
//     } else {
//         window.alert(`You entered an invalid number`)
//     }
// } else {
//     window.alert(`Please enter a valid name`)
// }

//STEP 3
// let firstName = window.prompt('Please enter your first name').trim()
// let lastName = window.prompt('Please enter your last name').trim()
// if (firstName.length > 0 && lastName.length > 0) {
//     const fullName = firstName.concat(' ', lastName);
//     window.alert('Your name is: ' + fullName);
// } else {
//     window.alert(`Please enter valid first and last names`)
// }

//STEP 4
// const text = "The quick brown fox jumps over the lazy dog"
// window.alert(text.indexOf('fox'))

//STEP 5
// const text = "The quick brown fox jumps over the lazy fox"
// window.alert(text.lastIndexOf('fox'))

//STEP 6
// const text = "The quick brown fox jumped over the lazy dog"
// let userName = window.prompt('Please enter your full name').trim()
// if (userName.length > 0) {
//     window.alert(text.replace('the lazy dog', userName))
// } else {
//     window.alert(`Please enter a valid name`)
// }

//STEP 7
// const text = "The quick brown fox jumps over the lazy dog"
// let userWord = window.prompt('Please enter a word').trim()
// if (userWord.length > 0) {
//     if (text.toLowerCase().indexOf(userWord.toLowerCase()) >= 0) {
//         window.alert(`Word '${userWord}' is present!`)
//     } else {
//         window.alert(`Word '${userWord}' is not present!`)
//     }
// } else {
//     window.alert(`Please enter a valid word`)
// }

//STEP 8
// const old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.slice(31, 43)
// window.alert(new_string.toUpperCase())

//STEP 9
// const text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// window.alert(text.trim().toLowerCase())

//STEP 10
// let text = 'the quick brown fox jumps over the lazy dog'
// window.alert(text.charAt(0).toUpperCase() + text.slice(1))