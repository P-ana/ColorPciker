const colorInput=document.getElementById('colorInput');
const hex=document.getElementById('hex');
const copyBtn=document.getElementById('copy');
const random=document.getElementById('random');


//The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action
colorInput.addEventListener('input',function(){
    let color=colorInput.value;
    document.body.style.backgroundColor=color;
    hex.textContent=color;
});
 
//convert a number to hexadecimal format string , we have a beautiful method toString() which accepts the number that tells to which format it has to convert.
random.addEventListener('click',function(){
    let randomNumber="#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundColor=`${randomNumber}`;
    hex.textContent=`${randomNumber}`;
});

//navigator.clipboard allows JavaScript to copy to and read from the clipboard.
//A method that writes (copies) text to the clipboard.
//Takes one argument: the text you want to copy.
//Returns a Promise, meaning it works asynchronously.
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(hex.textContent);
    alert("Color code has been copied to clipboard");
 
});
  


