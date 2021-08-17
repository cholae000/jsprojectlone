//UI
const video = document.getElementById('video');

const play = document.getElementById('play'),
      stopp =  document.getElementById('stop'),
      progress = document.getElementById('progress'),
      timestamp = document.getElementById('timestamp');

//Play and Pause Video
function togglevideostatus(){
    //paused form video api
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//Update play and Pause Icon
function updateplayicon(){
    if(video.paused){
        play.innerHTML = `<i class="fas fa-play fa-2x"</i>`;
    }else{
        play.innerHTML = `<i class="fas fa-pause fa-2x"</i>`;
    }
}

//Update Progress and Timestamp
function updateprogress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0'+mins;
    }
    let sec = Math.floor(video.currentTime % 60);
    if(sec < 10){
        sec = '0'+sec;
    }
    timestamp.innerHTML = `${mins}:${sec}`;
    

}

//Stop Video
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}

//Set Video Time to Progress 
function setvideoprogress(){
    video.currentTime = (progress.value * video.duration) / 100;
}

//Event Listener
video.addEventListener('click',togglevideostatus);
video.addEventListener('play',updateplayicon);
video.addEventListener('pause',updateplayicon);
video.addEventListener('timeupdate',updateprogress);

play.addEventListener('click',togglevideostatus);
stopp.addEventListener('click',stopvideo);

progress.addEventListener('click',setvideoprogress);