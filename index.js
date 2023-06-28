const wordlen=document.getElementById("wordlength");
const btn=document.querySelector("button");


const getword=(n=0)=>{
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let text="";
    
    for(let i=0;i<n;i++){
        const rand=(Math.random()*(letters.length-1)).toFixed(0);
        text+=letters[rand];
        
    }
    // console.log(text);
    // text+=" ";
    return text;
}


const generate=()=>{
    // console.log(wordlen.value);
    const divition=document.createElement("div");
    divition.setAttribute("ondrop","drop(event)" );
    divition.setAttribute("ondragover","allowDrop(event)");


    const p=document.createElement("p");
    p.setAttribute("class","paras");
    p.setAttribute("draggable","true");
    p.setAttribute("ondragstart","drag(event)");
    divition.append(p);

    let para="";
    const numberOfWords=Number(wordlen.value);

    for(let i=0;i<numberOfWords;i++){
        const word=getword((Math.random()*15).toFixed(0));
        para+=word;
        para+=" ";
    }

/////////////////////////////////////////
        para="My heart aches \uD83D\uDC94, a relentless ache that echoes through my soul, as if something vital is missing. You are the piece missing that completes the puzzle of me. Please understand the depth of my love for you, as the thought of you keeps me going in this vast sea of emptiness."; 
        playAudio();//comment this//
/////////////////////////////////////////

    const text=document.createTextNode(para);
    p.append(para);

    const div=document.querySelector("div");
    // div.append(p);
    div.append(divition);

}

btn.onclick=generate;




/////////////for audio/////////////////
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 
//////////////////////////////////////

/////////enter key for click//////////
var input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});
///////////////////////////////////////

/////drag and drop///////=>{issue}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.tagName);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev);
    console.log(data);
    ev.target.append(document.querySelector(data));
  }
/////////////////////////

document.addEventListener("contextmenu", e => e.preventDefault());
