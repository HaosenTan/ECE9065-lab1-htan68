
const Parry = [
    {name: "Bulbasaur", id: 1, type: " Grass	Poison", EvolutionStage: 1},
    {name: "Ivysaur", id: 2, type: " Grass	Poison", EvolutionStage: 2},
    {name: "Venusaur", id: 3, type: " Grass	Poison", EvolutionStage: 3},
    {name: "Charmander", id: 4, type: " Fire", EvolutionStage: 1},
    {name: "Charmeleon", id: 5, type: " Fire", EvolutionStage: 2},
    {name: "Charizard", id: 6, type: " Fire	Flying", EvolutionStage: 3},
    {name: "Squirtle", id: 7, type: " Water", EvolutionStage: 1},
    {name: "Wartortle", id: 8, type: " Water", EvolutionStage: 2},
    {name: "Blastoise", id: 9, type: " Water", EvolutionStage: 3},
    {name: "Caterpie", id: 10, type: " Bug", EvolutionStage: 1},
    {name: "Metapod", id: 11, type: " Bug", EvolutionStage: 2},
    {name: "Butterfree", id: 12, type: " Bug Flying", EvolutionStage: 3},
    {name: "Weedle", id: 13, type: " Bug	Poison", EvolutionStage: 1},
    {name: "Kakuna", id: 14, type: " Bug	Poison", EvolutionStage: 2},
    {name: "Beedrill", id: 15, type: " Bug Poison", EvolutionStage: 3},
    {name: "Pidgey", id: 16, type: " Normal	Flying", EvolutionStage: 1},
    {name: "Pidgeotto", id: 17, type: " Normal	Flying", EvolutionStage: 2},
    {name: "Pidgeot", id: 18, type: " Normal	Flying", EvolutionStage: 3},
    {name: "Rattata", id: 19, type: " Normal", EvolutionStage: 1},
    {name: "Raticate", id: 20, type: " Normal", EvolutionStage: 2}
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
        alert("Please enter a number from 1 to 20");
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
    for (let i = 0; i < 20; i++) {
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
   var reg =/^[A-Za-z]{1,20}$/;   //[^[A-Za-z]+$]{1,20}/;
    if (inputText === "") {
        alert("Input cannot be empty");
        return false;
    }
    if(reg.test(inputText)){
        return true;
    }else{
        alert("Please enter letters and the length should not exceed 20");
        return false;

    }
    return true;
}

