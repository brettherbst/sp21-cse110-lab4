function printNums(){
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(4); }, 0);
    console.log(4);
}

printNums();