// ДЗ 5
function User(userName, name, pass){
    this.Name = name;
    this.UserName = userName;
    this.Pass = pass
}
var customer = new User('oops', 'lama', 'pijama')
console.table(customer)
// var customer2 = new User('Svetlana', 'Sveta', 'sveta123')
// console.table(customer2)

// 2задание

var array = ["evgenii","vadim","EKATERINA","SoFya","mARIA","svetlana","alexey"] 
console.log(
    array.map(function(names){
        full = names.toLowerCase();
        firstChar = names[0].toUpperCase();
        return firstChar+full.slice(1)
    })
);

// 3 задание

var array = ["00101202215478",
"qwerty","125042000000258","79451789841256",
"21010199578143","01234567891234","249489","21702200214789"];
console.log(
    array.filter(function(INN){
        return INN.length === 14 && (INN[0] === '0' || INN[0] === '1' || INN[0] === '2')
    })
);

// 4 задание

var array = ["Evgenii","Vadim","Ekaterina","Sofya","Maria","Svetlana","Alexey"];
console.log(
    array.reduce(function(names, longestName){
        names = longestName.length > names.length ? longestName : names;
        return names
    })
);

// ДЗ 4 переделаю
/*
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
*/
