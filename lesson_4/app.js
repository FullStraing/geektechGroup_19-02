function minNumber(array){
    var i = array.length;
    min = array[i-1];
    for(i < arguments; i--;){
        if(array[i] < min){
            min = array[i]
        }
    }
    return min;
}
console.log(minNumber([3,2,88,4,3,5,7,-5,5,45,99,5,4,6]));
// ***********************
function count(str,char){
    var str = prompt('Введите слово');
    var char = prompt('Введите букву');
    var counter = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i].toLowerCase() === char.toLowerCase()){
            counter++
        }
    }
    return counter
}
console.log(count(/*'AbrAkadabrA', 'a'*/));


// **************************

function middleAriphmetic(number) {
    var result = 0;
    for(var i = 0; i < number.length; i++) {
        result += number[i];
    }
    return result / number.length;
}
 console.log(middleAriphmetic([5,5,5,5,5,5,5,12,12]));
// *********************

console.log(
    [5,7,1,2,66,23,2,7,8].filter(function(num){
        return num >5;
    })
);
// // ********************
function validINN(inn){
    var inn = prompt('введите свой инн')
    for(var i = 0; i < inn.length; i++){
        if(inn.length<14 || inn.length>14){
            console.error('invalid INN code');
        }else if(inn[0] !== '0' && inn[0]!== '1' && inn[0]!== '2'){
            console.error('invalid INN code!');
        }else{
            return 'Your INN code '+ inn + ' is VALID'
        }
    }
}
console.log(validINN(/*'12345678910123'*/));
// ********************
function reverseWord(word){
    var word = prompt('Введите слово')
    var newWord = "";
    for(var i = word.length -1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord
}
log privet
