function Greet(storedData) {
  var greetCount = 0;
  var map = storedData || {};

  function counter() {
    return Object.keys(map).length;
  }

  function nameMap() {
    return map
  }

  function greetMe(name, checkedLanguage) {

    if (map[name.toLowerCase()] === undefined) {
      map[name] = 0;
    }
    if (checkedLanguage === "English") {
      return "Hello " + name;
    }
    if (checkedLanguage === "Xhosa") {
      return "Molo "+ name;
    }
    if (checkedLanguage === "Afrikaans") {
      return "Goeie dag "+ name;
    }

  }
  function clear() {
  map = {}
  }
  return {
    greeter: greetMe,
    counter,
    nameMap,
    clear,

  }
}
