// refences to all the name input fields
var greetElem = document.querySelector('.Greetbox')

// display elements
var counters = document.querySelector('.count');
var greetingz = document.querySelector('.greetOutput')
// reference to buttons
var greetmeBtn = document.querySelector('.greetBtn')
var resetmeBtn = document.querySelector('.resetBtn')






//add an event listener for when the add button is pressed

//resetmeBtn.addEventListener('click',testIt);
  function what(){
  var name = greetElem.value;
  var checkedLanguage = document.querySelector("input[name='Language']:checked");
  if (checkedLanguage){
  var checkedLanguage = checkedLanguage.value;
    what.GreetMe(name,checkedLanguage)
    greetOutput.innerHTML = what();

}
    greetmeBtn.addEventListener('click',what);
  }
//add an event listener for when the add button is pressed

//resetmeBtn.addEventListener('click', );
