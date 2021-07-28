const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');
const submit = document.getElementById('submit');

submit.addEventListener('click',function(e){
    e.preventDefault();


    //username
    if(username.value == ''){
        showerror(username,'Username is required');
    }else{
        checklength(username,username.value.length);
    }

    //email
    if(email.value == ''){
        showerror(email,'Email is required');
    }else if(!validateEmail(email.value)){
        showerror(email,'Email is invaild');
    }else{

        showsuccess(email);
    }

    //password
    if(password.value == ''){
        showerror(password,'Password is required');
    }else{
        showsuccess(password);
    }

    //confirm password
    if(cfmpassword.value == ''){
        showerror(cfmpassword,'Password is required');
    }
    else if(password.value !== cfmpassword.value){
        showerror(cfmpassword,'Password does not match');
        password.style.borderColor = 'red';
    }else{
        showsuccess(cfmpassword);
    }

});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    // formcontrol.classList.add('error');

    const small = formcontrol.querySelector('small');
    small.innerText = message;

}
function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'; 
}

//checked required field
function checkedRequired(inputarrs){
    inputarrs.forEach(function(inputarr){
        if(inputarr.value=''){
            showerror(inputarr,`${getfieldname(inputarr)} is required`);
        }else{
            showsuccess(inputarr);
        }
    })
}

function getfieldname(inputarr){
    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}

function checklength(input,min,max){
    if(input.value.length < min){
        showerror(input,`${getfieldname(inputarr)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(inputarr)} must be at least ${max} characters`);
    }else{
        showsuccess(input);
    }
}