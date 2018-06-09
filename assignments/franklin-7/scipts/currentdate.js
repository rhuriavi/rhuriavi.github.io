var day;
var n;
var mm;

var day = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var today= new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dd = today.getDate();



var yyyy = today.getFullYear();


var fullDate = days[day.getDay()] + ", " + dd +" " + months[today.getMonth()] + " " + yyyy;


document.getElementById("currentdate").innerHTML=fullDate;