// refences to all the name input fields
var nameInput= document.querySelector('.Greetbox')

// display elements
var counters = document.querySelector('.count');
var greetingz = document.querySelector('#greetOutput')
// reference to buttons
var greetmeBtn = document.querySelector('.greetBtn')
var resetmeBtn = document.querySelector('.resetBtn')

//localStorage.getItem('users') ? JSON.parse(localStorage.getItem('user')): {}

var localStorageItem = localStorage.getItem('users');
if (localStorageItem) {
  var storedNames = JSON.parse(localStorageItem);
}

var greeting = Greet(storedNames)
//add an event listener for when the add button is pressed

//resetmeBtn.addEventListener('click',testIt);

function what() {
  var namez = nameInput.value;
if(namez === undefined || namez===""){
  greetingz.innerHTML = "no name"
  return;
}

  var checkedRadio = document.querySelector("input[name='Language']:checked");
  if (checkedRadio) {
    var lang = checkedRadio.value;

    greetingz.innerHTML = greeting.greeter(namez, lang);
    counters.innerHTML =  greeting.counter();
    localStorage.setItem('users', JSON.stringify(greeting.nameMap()));
return;
  }
  greetingz.innerHTML = "no language"

}
function clearData(){
  greeting.clear();
  localStorage.clear();
  location.reload();
}
// onload/page refresh event listener
window.addEventListener('load', function(){
  counters.innerHTML =  greeting.counter();
})
//add an event listener for when the add button is pressed
greetmeBtn.addEventListener('click', what);
resetmeBtn.addEventListener('click', clearData);
