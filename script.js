console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let songs =[
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/8.jpg"},
]
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
     
     //Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     
     myprogreessBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgress.value * audioElement.duration/100;
})

