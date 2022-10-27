const form = document.querySelector("form");
const inputs = form.elements;



const users= [
  {
    user:'admin',
    password:'KoI18'
  },
  {
    user:'manager',
    password:'SuperMe108'
  },
  {
    user:'editor',
    password:'12345'
  },
]



function check(user,password){
    users.map((key)=>{
    if(key.user===user){
      if(key.password===password){
        alert('Данные верные')
        inputs[0].value = ''
        inputs[1].value = ''
      }else{
        alert('Логин или пароль неверный')
      }
    }
})


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  check(inputs[0].value,inputs[1].value)
});
