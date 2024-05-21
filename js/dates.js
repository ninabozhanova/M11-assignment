//STEP 1
let month = parseInt(window.prompt('Please enter the month (1-12):').trim())
let year = parseInt(window.prompt('Please enter the year (e.g., 2024):').trim())
if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    window.alert('Please enter valid values for month (1-12) and year');
} else {
    let daysInMonth = new Date(year, month, 0).getDate()
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
    console.log(`${monthNames[month - 1]} of ${year} has ${daysInMonth} days`)
}

//STEP 2
// let userDate = window.prompt('Please enter a date').trim()
// let date = new Date(userDate)
// if (date.toString() === 'Invalid Date') {
//     window.alert('Please check date format. (Ex: XX/XX/XXXX).')
// } else {
//     let month = date.getMonth()
//     const monthNames = [
//         "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
//     ]
//     let monthName = monthNames[month]
//     console.log(`${userDate} is in ${monthName}`)
// }

//STEP 3
// let userDate = window.prompt('Please enter a date').trim()
// let date = new Date(userDate)
// if (date.toString() === 'Invalid Date') {
//     window.alert('Please check date format. (Ex: XX/XX/XXXX).')
// } else {
//     let weekDay = date.getDay()
//     if (weekDay === 0 || weekDay === 6) {
//         console.log(`${userDate} is weekend`)
//     } else {
//         console.log(`${userDate} is not weekend`)
//     }
// }

//STEP 4
// let date = new Date()
// const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let yesterday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1)
// let weekDay = yesterday.getDay()
// console.log(`Yesterday was ${weekdayNames[weekDay]}`)

//STEP 5
// let date = new Date()
// const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let weekDay = date.getDay()
// console.log(`${weekdayNames[weekDay].charAt(0)}`)
