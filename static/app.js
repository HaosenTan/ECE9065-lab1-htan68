
const Parry = [
    {name: "Bulbasaur", id: 1, type: "Grass", EvolutionStage: 1},
    {name: "Ivysaur", id: 2, type: "Grass", EvolutionStage: 2}
];


// add event listener
const textSearchBtn = document.getElementById("text-search-btn");
textSearchBtn.addEventListener("click", textSearchClickListener);
const numberSearchBtn = document.getElementById("number-search-btn");
numberSearchBtn.addEventListener("click", numberSearchClickListener);

function validNumberInput(inputNumber) {
    // TODO: validate user's input number
    var reg =/^(?:[1-9]|1[0-9]|20)$/;
    if(reg.test(inputNumber)){
        return true;
    }else{
        alert("error");
        return false;

    }
}

function searchByNumber(number, Parry) {
    let result = [];
    for (let i = 0; i < Parry.length; i++) {
        if (Parry[i].id === number) {
            result.push(Parry[i]);
        }
    }
    return result;
}

function numberSearchClickListener() {
    let text = document.getElementById("number-input").value;

    // validate user's input
    if (!validNumberInput(text)) {
        return;
    }

    // search for the text in the array
    let num = Number(text);
    let result = searchByNumber(num, Parry);
    console.log(result);

    // display searching result
    let resultDiv = document.getElementById("number-search-result");
    resultDiv.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        resultDiv.innerHTML += "Name: " + result[i].name + " Id: " + result[i].id + result[i].type + " Evolution Stage: "+result[i].EvolutionStage + "<br>";
    }
}

function searchByText(text, Parry) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        if (Parry[i].name === text) {
            result.push(Parry[i]);
        }
    }
    return result;
}

function textSearchClickListener() {
    let text = document.getElementById("text-input").value;

    // validate user's input
    // user should input: only A-Z, a-z, no more 20 chars
    if (!validTextInput(text)) {
        return;
    }

    // search for the text in the array
    let result = searchByText(text, Parry);

    // display searching result
    let resultDiv = document.getElementById("text-search-result");
    resultDiv.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
        resultDiv.innerHTML += "Name: " + result[i].name + " Id: " + result[i].id + result[i].type + " Evolution Stage: "+result[i].EvolutionStage + "<br>";
    }
}

function validTextInput(inputText) {
    var reg =/[^[A-Za-z]+$]{1,5}/;
    if (inputText === "") {
        alert("Input cannot be empty");
        return false;
    }
    if(reg.test(inputText)){
        return true;
    }else{
        alert("error");
        return false;

    }
    return true;
}

