
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
    var reg =/^(?:[1-9]|1[0-9]|20)$/;
    if(reg.test(inputNumber)){
        return true;
    }else if(inputNumber === ''){
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
    // Clear all new DOM nodes
    var e = document.getElementById("picAbove");
    var child = e.lastElementChild;
    while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
    }

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
    let numCollection = document.getElementsByClassName("num");
    for(i=0;i<result.length;i++){
        for(j=0;j<numCollection.length;j++){
            if(result[i].id === Number (numCollection[j].textContent)){
                var pic_Above = document.getElementById("picAbove");

                var divResult = document.createElement("div");
                var ulResult = document.createElement("ul");
                var liResult = document.createElement("li");
                liResult.style.listStyle = "none";
                ulResult.style.listStyle = "none";
                var searchContent = document.createTextNode("Name: " + result[i].name + "\r\n" + " Id: " + result[i].id + result[i].type + "\r\n"+ " Evolution Stage: "+result[i].EvolutionStage+"\r\n");

                var imgResult = document.createElement("img");
                imgResult.src = 'static/img/'+result[i].id+'.png';
                imgResult.style.position = "relative";
                imgResult.style.width = "50px";
                imgResult.style.length = "50px";
                liResult.appendChild(imgResult);
                liResult.appendChild(searchContent);

                ulResult.appendChild(liResult);
                divResult.appendChild(ulResult);
                pic_Above.appendChild(divResult);

                divResult.style.backgroundColor = "background-color: #4158D0";
                divResult.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";

                // let pNode = nameCollection[j].parentNode;
                // let cNode = pNode.childNodes;
                // return cNode;

                // let siblings = [];
                // for(k=0;k<cNode.length;k++)
                // {
                //     siblings[siblings.length] =  cNode[k];
                // }
                // return siblings;

            }
        }
    }


}


function searchByText(text, Parry) {
    let result = [];
    for (let i = 0; i < 20; i++) {
        // if(result.length === 5){ //all matches up to 5
        //     break;
        // }
        if (Parry[i].name.startsWith(text)) {
            result.push(Parry[i]);
        }
    }

    return result;
}



function textSearchClickListener() {

    // Clear all new DOM nodes
    var e = document.getElementById("picAbove");
    var child = e.lastElementChild;
    while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
    }

    let text = document.getElementById("text-input").value;

    // validate user's input
    // user should input: only A-Z, a-z, no more 20 chars
    if (!validTextInput(text)) {
        return;
    }

    // search for the text in the array
    let result = searchByText(text, Parry);
    // display searching result
    let nameCollection = document.getElementsByClassName("name");
    for(i=0;i<result.length;i++){
        for(j=0;j<nameCollection.length;j++){
            if(result[i].name === nameCollection[j].textContent){
                var pic_Above = document.getElementById("picAbove");

                var divResult = document.createElement("div");
                var ulResult = document.createElement("ul");
                var liResult = document.createElement("li");
                liResult.style.listStyle = "none";
                ulResult.style.listStyle = "none";
                var searchContent = document.createTextNode("Name: " + result[i].name + "\r\n" + " Id: " + result[i].id + result[i].type + "\r\n"+ " Evolution Stage: "+result[i].EvolutionStage+"\r\n");

                var imgResult = document.createElement("img");
                imgResult.src = 'static/img/'+result[i].id+'.png';
                imgResult.style.position = "relative";
                imgResult.style.width = "50px";
                imgResult.style.length = "50px";
                liResult.appendChild(imgResult);
                liResult.appendChild(searchContent);

                ulResult.appendChild(liResult);
                divResult.appendChild(ulResult);
                pic_Above.appendChild(divResult);

                divResult.style.backgroundColor = "background-color: #4158D0";
                divResult.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";

                // let pNode = nameCollection[j].parentNode;
                // let cNode = pNode.childNodes;
                // return cNode;

                // let siblings = [];
                // for(k=0;k<cNode.length;k++)
                // {
                //     siblings[siblings.length] =  cNode[k];
                // }
                // return siblings;

            }
        }
    }


}

function validTextInput(inputText) {
   var reg =/^[A-Za-z]{0,20}$/;   //[^[A-Za-z]+$]{1,20}/;
    if (inputText === "") {
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

// function insert(cNode){
//     var picAbove = document.getElementById("pic-all");

//     var divResult = document.createElement("div");
//     for(i=0;i<cNode.length;i++){
//         divResult.appendChild(cNode[i]);
//     }


    // var liDescribe = document.createElement("li");
    // var textDescribe = document.createTextNode("describetion of result")//to-do

    // var liImg = document.createElement("img");
    // liImg.src =" ";//to-do

    // liDescribe.appendChild(textDescribe);
    // liDescribe.appendChild(liImg);
    // //divResult -> liDescribe -> textDescribe,liImg
    // divResult.appendChild(liDescribe);

    // //picAbove ->divResult -> liDescribe -> textDescribe,liImg
    // var bodyall = document.getElementsByTagName("body");
    // bodyall.insertBefore(divResult,picAbove);

// }





