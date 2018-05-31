function Greet() {
  var greetCount = 0;

  function counter() {
    return Object.keys(map).length;
  }

  function greetMe(name, checkedLanguage) {
    var greet = '';

    if (map[name] === undefined) {
      map[name] = 0;
    }
    if (checkedLanguage === "English") {
      greet = "Hello ";
    }
    if (checkedLanguage === "Xhosa") {
      greet = "Molo "
    }
    if (checkedLanguage === "Afrikaans") {
      greet = "Goeie dag ";
    }
    return checkedLanguage+name;

return{
      greeter: greetMe,
      counter: counter,

    }
  }}
  var what = Greet();
