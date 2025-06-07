let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newButton = document.querySelector("#newButton");
let winningPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
let turnO = true;
let count = 0;
const enableDisplay = (pOvalue)=>{
    msg.innerText = `Winner is ${pOvalue}`;
    msgContainer.classList.remove("hide");

}
const checkWinner =()=>{
    for(let pattern of winningPattern){
        let pOvalue= boxes[pattern[0]].innerText;
        let p1value= boxes[pattern[1]].innerText;
        let p2value= boxes[pattern[2]].innerText;
        if(pOvalue != "" && p1value != "" && p2value != ""){
            if(pOvalue === p1value && p1value === p2value){
                console.log("winner",pOvalue);
                //Disable all boxes after win
                boxes.forEach(box =>box.disabled = true);
                enableDisplay(pOvalue);
            }
        }
    }
}
const forDraw = ()=>{
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
        
        checkWinner(); 
        count++;
        if(count >=9){
            forDraw();
        }
    });
   
});
const resetGame = ()=>{
    console.log("Button was clicked")
    turnO = true;
    for(box of boxes){
        box.innerText = " ";
    }
    msgContainer.classList.add("hide");
}


resetButton.addEventListener("click",resetGame);
newButton.addEventListener("click",resetGame);