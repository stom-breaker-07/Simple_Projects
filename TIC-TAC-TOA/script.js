let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let res=document.querySelector(".new-btn");
let msgcon=document.querySelector(".msg");
let msg=document.querySelector("#m");

let turn0=true;

const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8], 
  [0,4,7],
  [2,4,6]
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turn0){
      box.innerText="O";
      turn0=false;
    }else{
      box.innerText="X";
      turn0=true;
    }
    box.disabled=true;
    checkwin();
  });
});



const checkwin=()=>{
  for(let pattern of winPatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!=""){
      if(pos1===pos2 && pos2===pos3){
        console.log("winner");
        dis();
        showwinner(pos1);
      }
    }
  }

};

const dis =() =>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enb =() =>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}

const showwinner=(winner)=>{
  msg.innerText=`Congratulations, ${winner} ` ;
  msgcon.classList.remove("hide");
}

const resetGame =()=>{
  turn0=true;
  enb();
  msgcon.classList.add("hide");

}

reset.addEventListener("click",resetGame);
res.addEventListener("click",resetGame);