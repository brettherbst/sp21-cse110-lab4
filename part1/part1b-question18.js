var intervalID = setInterval(printTime, 1000, new Date());
function printTime(date){
    console.log(date.toLocaleTimeString());
}