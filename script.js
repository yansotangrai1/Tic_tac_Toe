let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let winningPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
let turnO = true;
const checkWinner =()=>{
    for(let pattern of winningPattern){
        let pOvalue= boxes[pattern[0]].innerText;
        let p1value= boxes[pattern[1]].innerText;
        let p2value= boxes[pattern[2]].innerText;
        if(pOvalue != "" && p1value != "" && p2value != ""){
            if(pOvalue === p1value && p1value === p2value){
                console.log("winner",pOvalue);
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
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

    });
   
});
const resetGame = ()=>{
    console.log("Button was clicked")
    turnO = true;
    for(box of boxes){
        box.innerText = " ";
    }
}

resetButton.addEventListener("click",resetGame);