var bankAccount = {
    Balance: 40123,
    NumberAccount: '12345678',
    Currency: 'SOM',
    BankDepartment : {
        NameOfDepartment: 'Bakai Bank',
        Address: 'Lva Tolstogo 10b', 
    },
};
/* ********* */
var trafficLights = prompt('Введите цвет светофора: ');

switch (trafficLights) {
    case 'green':
    case 'зеленый':
    case 'Зеленый':
        console.log('Можно идти');
        break;
    case 'красный':
    case 'Красный':
    case 'red':
        console.log("ИДТИ НЕЛЬЗЯ");
        break;
    case 'orange':
    case 'оранжевый':
    case 'Оранжевый':
    case 'Желтый':
    case 'желтый':
    case 'yellow':
        console.log("ПРИГОТОВЬСЯ");
        break;
    default:
        console.warn('неправильный цвет');
}
/**************/
var language = prompt('Выберите язык: 1)ENG 2)RU')
if (language === '1' || language === 'ENG' || language === 'eng'){
    var customerCardType = parseInt(prompt('Choose a payment system by selecting the desired number: 1)Unistream 2) GOLD 3) RIA 4)CONTACT'));
    switch(customerCardType) {
        case 1:
            console.log('Money sent through the Unistream system');
            break;
        case 2:
            console.log('Money sent through the GOLD system');        
            break;
        case 3:
            console.log('Money sent through the RIA system');        
            break;
        case 4:
            console.log('Money sent through the CONTACT system');        
            break;
        default:
            console.warn('Unknow system! Please select a method from the provided systems');
    }
}else if (language === '2' || language === 'RU' || language === 'ru'){
    var customerCardType = parseInt(prompt('Выберите платежную систему выбрав нужный номер: 1) Unistream 2) GOLD 3) RIA 4)CONTACT'));
    switch(customerCardType) {
        case 1:
            console.log('Деньги отправлены через платежную систему Unistream');
            break;
        case 2:
            console.log('Деньги отправлены через платежную систему GOLD');        
            break;
        case 3:
            console.log('Деньги отправлены через платежную систему RIA');        
            break;
        case 4:
            console.log('Деньги отправлены через платежную систему CONTACT');        
            break;
        default:
            console.warn('Неизвестная система! Пожалуйста, выберите платежную систему из предоставленных выше');
    }
}else {
    console.error('Error, try again!');
}



// switch(customerCardType) {
//     case 1:
//         console.log('Money sent through the Unistream system');
//         break;
//     case 2:
//         console.log('Money sent through the GOLD system');        
//         break;
//     case 3:
//         console.log('Money sent through the RIA system');        
//         break;
//     case 4:
//         console.log('Money sent through the CONTACT system');        
//         break;
//     default:
//         console.warn('Unknow system! Please select a method from the provided systems');
// }