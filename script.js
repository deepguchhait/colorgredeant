let result1 ="#00bf72";
let result2="#a8eb12";
let btn1=document.querySelector(".bot1");
let btn2=document.querySelector(".bot2");
let output=document.querySelector(".result");
let copy=document.querySelector(".click")
let peLoder=document.getElementById('loading');
let myDiv=document.getElementById('myDiv');
let myVar;


const colerChange=(()=>{
    const color='0123456789abcdef';
    let result='#';
    for (let i=0;i<6;i++){
        let inDex=Math.floor(Math.random()*color.length)
        result+=color[inDex];
    }
    return result;
});
const firstButton=(()=>{
    result1=colerChange();
    copy.innerHTML="Click to Copy";
    let change=document.querySelector(".main");
    btn1.innerHTML=`${result1}`
    btn1.style.backgroundColor=`${result1}`
    output.innerHTML=`background-image: linear-gradient(to top, ${result1}, ${result2});`
    change.style.background=`linear-gradient(to right top,${result1},${result2}`;

});
const secButton=(()=>{
    result2=colerChange();
    copy.innerHTML="Click to Copy";
    let change=document.querySelector(".main");
    btn2.innerHTML=`${result2}`
    btn2.style.backgroundColor=`${result2}`
    output.innerHTML=`background-image: linear-gradient(to top, ${result1}, ${result2});`
    change.style.background=`linear-gradient(to right top,${result1},${result2}`;
});
output.addEventListener('click',()=>{
    navigator.clipboard.writeText(output.innerText);
    copy.innerHTML="Copy...";
});
const myFunction=(()=>{
    myVar = setTimeout(showPage, 3000);
});
function showPage() {
    peLoder.style.display = "none";
    myDiv.style.display = "block";
}