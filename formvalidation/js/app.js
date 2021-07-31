const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');
const submit = document.getElementById('submit');


//Event Listener (Method 1)
// submit.addEventListener('click',function(e){
//     e.preventDefault();


//     //username
//     if(username.value == ''){
//         showerror(username,'Username is required');
//     }else{
//         checklength(username,username.value.length);
//     }

//     //email
//     if(email.value == ''){
//         showerror(email,'Email is required');
//     }else if(!validateEmail(email.value)){
//         showerror(email,'Email is invaild');
//     }else{

//         showsuccess(email);
//     }

//     //password
//     if(password.value == ''){
//         showerror(password,'Password is required');
//     }else{
//         showsuccess(password);
//     }

//     //confirm password
//     if(cfmpassword.value == ''){
//         showerror(cfmpassword,'Password is required');
//     }
//     else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword,'Password does not match');
//         password.style.borderColor = 'red';
//     }else{
//         showsuccess(cfmpassword);
//     }

// });

//Check required field




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



//Get field name
function getfieldname(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkrequire(inputarr){
    // console.log(inputarr);

    inputarr.forEach(function(input){
        if (input.value == ''){
            showerror(input,`${getfieldname(input)} is required`);
        }else{
            showsuccess(input);
        }
    })
}
function checklength(input,min,max){
    if(input.value.length < min){
        showerror(input,`${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input,`${getfieldname(input)} must be at least ${max} characters`);
    }else{
        showsuccess(input);
    }
}

//For checking email (regular expression)
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is invalid...');
    }
}

function checkpasswordsmatch(password,cfmpassword){
    if(cfmpassword.value == ''){
        showerror(cfmpassword,'Password is required');
    }
    else if(password.value !== cfmpassword.value){
        showerror(cfmpassword,'Password does not match');
        password.style.borderColor = 'red';
    }else{
        showsuccess(cfmpassword);
    }
}

//Event Listener Method(2)
form.addEventListener('submit',function(e){
    e.preventDefault();

    

    checkrequire([username,email,password,cfmpassword]);

    checklength(username,3,15);
    checklength(password,6,25);

    validateEmail(email);

    checkpasswordsmatch(password,cfmpassword);
})