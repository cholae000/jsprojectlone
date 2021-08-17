const musicContainer = document.querySelector('#music-container');

const title = document.querySelector('.title');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

const audio = document.querySelector('#audio');
const cover = document.querySelector('.cover');

const prebtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nexttbn = document.getElementById('next');


let songindex = 0;

const songs = [1,2,3];

function loadsong(music){
    title.innerHTML =  `Sample ${music}`;
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

playbtn.addEventListener('click',function(){

    // musicContainer.classList = 'music-container play';
    const isplaying = musicContainer.classList.contains('play');

    if(isplaying){
        pausesong(songs);
    }else{
        playsong();
    }
})
nexttbn.addEventListener('click',nextsong);

function nextsong(){
    songindex++;
    if(songindex > songs.length - 1){
        songindex = 0;
    }
    loadsong(songs[songindex]);
    playsong();
}

prebtn.addEventListener('click',function(){
    songindex--;
    if(songindex < 0 ){
        songindex = songs.length -1;
    }
    loadsong(songs[songindex]);
    playsong();
})

function playsong(){
    musicContainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}
function pausesong(){
    musicContainer.classList.remove('play'); 

    
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    audio.pause();

    
}

//Update Progress Bar
function updateprogress(e){
    // console.log(audio.currentTime);
    // console.log(audio.duration);

    //Method 1
    // const progresspercent = (audio.currentTime / audio.duration) * 100;
    // progress.style.width = `${progresspercent}%`;


    //Method 2
    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // const progresspercent = (currentTime / duration) * 100;
    // progress.style.width = `${progresspercent}%`;

    //Method 4
    const {currentTime,duration} = e.target;
    const progresspercent = (currentTime / duration) * 100;
    progress.style.width = `${progresspercent}%`;
    
}


//Time Play and Stop Update
audio.addEventListener('timeupdate',updateprogress);

//Click on Progress Bar
progressContainer.addEventListener('click',setprogress);

//Set Progress Bar
function setprogress(e){
    const width = e.target.clientWidth;
    const clickx = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickx / width) * duration;
}

//Song End
audio.addEventListener('ended',nextsong);


