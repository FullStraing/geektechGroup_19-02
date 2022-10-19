var choosenStar = parseInt(prompt('Введите количество столбцов: '))
for (var star = '*'; star.length <= choosenStar; star+='*'){
    console.log(star);
}
/* *********************** */
var oneHundred = 100;
for(var i = 1; i <= oneHundred; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz');
    }else if(i%3 === 0){
        console.log('Fizz');
    }else if (i%5==0){
        console.log('Buzz',);
    }else{
        console.log(i);
    }
}
// ********************************
var size = parseInt(prompt('Введите размер доски'));
for (var i = 0; i <= size / 2; i++){
    var line = '';
    for(var j = 0; j<=size / 2; j++){
        line += i % 2 === 0 ? "  #" : "#  ";
    }
    console.log(line);
}