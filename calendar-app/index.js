const date = document.getElementById("date")
const month = document.getElementById("month")
const day = document.getElementById("day")
const year = document.getElementById("year")

const today = new Date()

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

date.innerHTML = (today.getDate() > 10 ? "0" : "") + today.getDate()
day.innerHTML = weekDays[today.getDay()]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()
