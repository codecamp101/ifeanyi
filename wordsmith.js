const hintBtn =document.querySelector('#hintBtn');
const txt =document.querySelector('#txt');
hintBtn.addEventListener('click', () => {
writeTxt();
});
function writeTxt() {
    const text = 'TO WALK UNSTEADILY,AS A BABY ';
    txt.textContent = '';
    let count = 0;
    const id =setInterval (() => {
     if(count === text.length - 1) clearInterval(id);
     txt.textContent += text[count];
     count++; //count++ keeps adding 1 to value of count  
    },100);    
}