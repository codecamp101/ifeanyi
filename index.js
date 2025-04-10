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
});
