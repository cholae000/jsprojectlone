let togglebtn = document.querySelector('#toggle');
let openbtn = document.querySelector('#open');

let modal = document.querySelector('.container-modal');
let closebtn = document.querySelector('.close');

togglebtn.addEventListener('click',function(){
    document.body.classList.toggle('shownav');
})

openbtn.addEventListener('click',function(){
    modal.classList.add('showmodal');
})

closebtn.addEventListener('click',function(){
    modal.classList.remove('showmodal');
})

window.addEventListener('click',(e)=>e.target===modal ? modal.classList.remove('shownmoda') : false);