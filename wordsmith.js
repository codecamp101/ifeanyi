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
let score = 0;
const checkBtn = document.querySelector('#checkBtn')
checkBtn.addEventListener('click' , () => {
    document.querySelector('#cup > i').textContent = score;
    score += 5;
});
document.querySelector('#checkbtn')
checkBtn.addEventListener('click' , () => {
    document.querySelector('#cup > i').textContent=score

})
 //STRINGS METHODS
 //.slice(start, end)  //slices a portion of a string
 //.concat(.(..strings)  //joins all chars in a string
 //.trim()    //removes spaces at the begginning and end of a string
 //.at(...index)       //chooses the char at the index
 //.length    //tells how many chars in a string
 //.tolowercase() writeas all chars in lower case
 //.upper case writes all chars in upper case
 //.endswith('') //returs true if the char of the string matches the LIST
 //.startswith('') //return true if the char of the string matches the first