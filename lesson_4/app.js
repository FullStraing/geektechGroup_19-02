function minNumber(){
    var i = arguments.length;
    min = arguments[i-1];
    for(i >= 0; i--;){
        if(arguments[i] < min){
            min = arguments[i]
        }
    }
    return min;
}
console.log(minNumber(3,2,88,4,3,-8,5,7,-5,5,45,99,5,4,6));
// // ***********************
function count(str,char){
    var counter = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i].toLowerCase() === char.toLowerCase()){
            counter++
        }
    }
    return counter
}
console.log(count('AbrAkadabrA', 'a'));


// **************************

function middleAriphmetic() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result / arguments.length;
}
 console.log(middleAriphmetic(5,5,5,5,5,5,5,12,12));
// *********************
console.log(
    [5,7,1,2,66,23,2,7,8].filter(function(num){
        return num >5;
    })
);
// // ********************
function validINN(inn){
    if(inn.length!== 14){
        console.error('invalid INN code');
    }else if(inn[0] !== '0' && inn[0]!== '1' && inn[0]!== '2'){
        console.error('invalid INN code!');
    }else{
        return 'Your INN code '+ inn + ' is VALID'
    }
}
console.log(validINN('123435678910123'));
// ********************
function reverseWord(word){
    var newWord = "";
    for(var i = word.length -1; i >= 0; i--){
        newWord += word[i];
    }
    return newWord;
}
console.log(reverseWord("hello"));
