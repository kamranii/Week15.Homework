//#region Task-1
//get error message 
const blogBodyValidationMessage = document.getElementById("bodyValidationMessage");
//get blog body text area
let blogBody = document.getElementById("blogBodyArea");
//validate blog body text
function validateBlogBody(){
    if(blogBody.value.length < 2 || blogBody.value.length> 20)
    {
        blogBodyValidationMessage.style.display = "block";
        blogBody.style.border = "thin solid red";
    }
    else{
        blogBodyValidationMessage.style.display = "none";
        blogBody.style.border = "thin solid black";
    }
}
//get author input
let authorInput = document.getElementById('author');
//get error message
const authorValidationMessage = document.getElementById('authorValidationMessage');
//validating the author
function validateAuthor(){
    if(authorInput.value.length == 0)
    {
        authorValidationMessage.style.display = "block";
        authorInput.style.border = "thin solid red";
    }
    else{
        authorValidationMessage.style.display = "none";
        authorInput.style.border = "thin solid black";
    }
}

//get number input
let numberInput = document.getElementById('number');
//get error message
const numberValidationMessage = document.getElementById("numberValidationMessage");
//validating the number
function numberValidate(){
    //check if not blank
    if(numberInput.value.length == 0 || isNaN(numberInput.value))
    {
        numberValidationMessage.style.display = 'block';
        numberInput.style.border = 'thin solid red';
    }
    else {
        numberValidationMessage.style.display = 'none';
        numberInput.style.border = 'thin solid black';
    }
}

//get email input
let emailInput = document.getElementById('email');
//get error message
const emailValidationMessage = document.getElementById("emailValidationMessage");
//validate the email
function validateEmail(){
    if(!(emailInput.value.includes('@') && emailInput.value.includes('.')))
    {
        emailValidationMessage.style.display = 'block';
        emailInput.style.border = 'thin solid red';
    }
    else{
        emailValidationMessage.style.display = 'none';
        emailInput.style.border = 'thin solid black';
    }
}
//#endregion

//#region Task-3
//create the image
const img = document.createElement("img");
img.src="https://crocoder.dev/icon.png";
//style the image
img.style.scale = 1;
img.style.margin = 0;
img.style.padding = 0;
//get the form
const form = document.getElementById('mainForm');
//add the image
form.prepend(img);
//#endregion