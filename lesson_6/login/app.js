const form = document.querySelector("form");
const inputs = form.elements;

const users = [
  ["oops", "Hello123"],
  ["admin", "adminTop"],
  ["geektech", "12345"],
  ["Salam", "new-York"]
];

function isValid(username, password) {   
  for(var i = 0; i < users.length; i++) {
      var temp = users[i];
      if (temp[0] == username) {
        var currentPair = temp;
        break;        
      }        
  }     
  if (currentPair && currentPair[1] == password) {
    return true;           
  } else {
    return false;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  var username = inputs["username"].value;
  var password = inputs["password"].value;  
    if (!isValid(username, password)){        
      alert('Неверный логин или пароль');
    } else {      
      alert('Добро пожаловать');
    }
});