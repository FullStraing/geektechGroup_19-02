const btn = document.querySelector("#btn");
const login = document.querySelector("#username");
const password = document.querySelector("#password");

import Users from "./users/users";
let newUsers = [new Users('lama', 'pijama123'), new Users('Jama', 'piJama'), new Users('hello','222')];


btn.addEventListener('click', (e) => {
    e.preventDefault()
    newUsers.map((user) =>{   
        if(user.name === login.value){
            if(user.pass === password.value){
                alert('Добро пожаловать');
            }else{
                alert('Логин или пароль не найдены');
            }
        }
    })
})
