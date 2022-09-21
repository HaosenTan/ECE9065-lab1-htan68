
// var Bulbasau = {
//     name: "Bulbasau",
//     id: 01,
//     type: "Grass",
//     EvolutionStage: 1
// }
// var Ivysaur = {
//     name:Ivysaur,id:02,type:Grass,EvolutionStage:2
// }
var Parry=[
    {name:"Bulbasau",id:01,type:"Grass",EvolutionStage:1},
    {name:"Ivysaur",id:02,type:"Grass",EvolutionStage:2}
]
var text;
function myFunction() {
        let text = document.getElementById("myInput").value;
        // alert("文本为: " + text);
        return text;
}
for(var i=0;i<2;i++){
    if(Parry[i].name == text)
    // return Parry[i].id;
    console.log(Parry[1]);
    // console.log(Parry[1].name)
}
