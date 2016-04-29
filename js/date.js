var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];       
var today = new Date();
document.getElementById("spanDay").innerHTML = today.getDate();
document.getElementById("spanDate").innerHTML = months[today.getMonth()] + ", " + today.getFullYear();