//STEP 1
function sortAlphabetically(input) {
    let output = input.match(/\w/g).sort().join('')
    return output
}
console.log(sortAlphabetically('webmaster'))

//STEP 2
function upperEachWord(input) {
    let output = input.split(' ')
    output = (output.map(word => word.charAt(0).toUpperCase() + word.slice(1))).join(' ')
    return output
}
console.log(upperEachWord('the quick brown fox'))

//STEP 3
function countVowels(input) {
    let count = input.match(/[aeiouy]/ig).length
    return count
}
console.log(countVowels('The quick brown fox'))

//STEP 4
function randomString(length) {
    const elements = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let output = ''
    for (let i = 0; i < length; i++ ) {
        output += elements.charAt(Math.floor(Math.random() * elements.length));
    }
    return output
}
console.log(randomString(8))

//STEP 5
function longestCountryName(input_arr) {
    let lengthArray = input_arr.map(country => country.length)
    let country = input_arr[lengthArray.indexOf(Math.max(...lengthArray))]
    return country
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]))

