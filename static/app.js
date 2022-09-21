
const Parry=[
    {name:"Bulbasau",id:01,type:"Grass",EvolutionStage:1},
    {name:"Ivysaur",id:02,type:"Grass",EvolutionStage:2}
]


// add event listener
const textSearchBtn = document.getElementById("text-search-btn");
textSearchBtn.addEventListener("click", textSearchClickListener);
const numberSearchBtn = document.getElementById("number-search-btn");

function validNumberInput(inputNumber) {
    // TODO: validate user's input number
    return true;
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
        resultDiv.innerHTML += "Name: " + result[i].name + " Id: " + result[i].id + result[i].type + result[i].EvolutionStage + "<br>";
    }
}

numberSearchBtn.addEventListener("click", numberSearchClickListener);

function searchByText(text, Parry) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        if (Parry[i].name === text) {
            result.push(Parry[i]);
        }
    }
    return result;
}


function validTextInput(inputText) {
    if (inputText === "") {
        alert("请输入内容");
        return false;
    }
    return true;
}