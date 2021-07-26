//UI
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const year = document.getElementById('year');

const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');


const currentyear = new Date().getFullYear();
year.innerText = currentyear + 1;

const newyeartime = new Date(`January 1 ${currentyear + 1} 00:00:00`);

function updatecountdown(){
    const currenttime = new Date();

    const diff = newyeartime - currenttime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    days.innerText = d;

    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    hours.innerText = h<10? '0'+h : h;

    const m = Math.floor(diff / 1000 / 60) % 60;
    minutes.innerText = m<10 ? '0'+m : m;

    const s = Math.floor(diff / 1000) % 60;
    seconds.innerText = s<10 ? '0'+s : s;
}
setTimeout(()=>{
    loading.remove();
    countdown.style.display = 'flex';
},1000)
setInterval(updatecountdown,1000);

