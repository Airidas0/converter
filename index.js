let number = document.getElementById("number");
let submit = document.getElementById("mysubmit");
let celsius = document.getElementById("celsius");
let farenheit = document.getElementById("farenheit");
let result = document.getElementById("result");
let temp;

submit.onclick = function convert(){
    if(celsius.checked){
        temp = Number(number.value);
        temp = (temp - 32) * (5/9);
        result.textContent = `${temp.toFixed(1)}C`;



    }
    else if (farenheit.checked){
        temp = Number(number.value);
        temp = temp * (9/5) + 32;
        result.textContent = `${temp.toFixed(1)}F`;
    }
    else{
        result.textContent = "Select a unit";    }
}