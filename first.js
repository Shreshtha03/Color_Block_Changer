const colorBox =document.getElementById("colorBox");
const greenBtn =document.getElementById("greenBtn");
const orangeBtn=document.getElementById("orangeBtn");
const redBtn=document.getElementById("redBtn");
const resetBtn=document.getElementById("resetBtn");

greenBtn.addEventListener("click", ()=>{
    colorBox.style.backgroundColor="green";
});
orangeBtn.addEventListener("click", ()=>{
    colorBox.style.backgroundColor="orange";
});
redBtn.addEventListener("click", ()=>{
    colorBox.style.backgroundColor='red';
});
resetBtn.addEventListener("click", ()=>{
    colorBox.style.backgroundColor="lightgrey";
});


