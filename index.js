/* this changes the text inside of an Element
document.querySelector('#user > b ').textContent =er name';
document.querySelector('#user
*/
// this is an array of numbers
// [1,2,"comput
// document.querySelector('#user > b' ).textContent ='other names';
//  document.querySelector('output').textContent = ['pizmputer", 4.za', 2,"co5] [1];
const eye = document.querySelector('#eye');
const output =document.querySelector('output');
const ipt =document.querySelector('input');
const fm=document.querySelector('form');
const pop=document.querySelector('#pop');
const user=document.querySelector('#user');
const start=document.querySelector('#start');
const pan = document.querySelector('#panel');

eye.addEventListener('mousedown', () =>{
    ipt.type='text';
});
eye.addEventListener('mouseup' ,() =>  {
    ipt.type='password';
})
fm.addEventListener('submit' , (e) =>{
    e.preventDefault()//this will stop the page from reloding
   const pd ='AMA';
   
   if (pd===ipt.value) {
       user.remove();
       fm.remove();
       output.textContent = 'signing you in...';
       const timeoutID = setTimeout(() => {
            output.remove();
           pop.showPopover();
           clearTimeout(timeoutID)
        }, 3000);
    } else {
        output.textContent = 'wrong password';           
    }
}); 
//this shows/hides the #panel
start.addEventListener('click', () => {
    pan.classList.toggle('on');
})
// this formates a -uninx number into a human-readable number
const dob = new Date('10/9/2013').getTime(); // date format in javascript mm-dd-yyyy
pan.querySelector('#dob').textContent= Intl.DateTimeFormat('en-us', {datestyle: 'full'}).format(dob);
//FUNCTIONS
// A FUNCTION is a group of statment that does not run unless when called
function calculator () {
 console.log( 2 + 4);
 console.log( 10 - 5);
 console.log(10 / 2 );
 console.log( 3 * 3 );
 console.log(10 % 2 ); //moluds (short from is mod): the remandier of division => No.% No 
} 
 calculator();
 function mydate () {
    /*
    const t = "ME";
    const u = "YOU";
    console.log(t + u ); // concatenation
    */
   const d = new Date("10/9/2013").getDate();
   const m = new Date("10/9/2013").getMonth();
   const today = Date.now();
   if (new Date(today).getDate()=== d && new Date(today).getMonth() === m) {
    pan.classList('bgi');
   } 
}
 callConfeti();