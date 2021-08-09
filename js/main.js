document.addEventListener("DOMContentLoaded", function() {

const button = document.getElementById("button");
const output = document.getElementById("output");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  button.addEventListener("click", ()=> {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const generatedNumber = getRandomInt(from,to);
    output.innerText = generatedNumber;
  });

});
