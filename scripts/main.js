date = new Date()
if(date.getMonth() < 9 && date.getDate() < 21){
    document.getElementById("age").innerHTML = (new Date().getFullYear() - 2003);
}
else{
    document.getElementById("age").innerHTML = (new Date().getFullYear() - 2002);
}  