console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new audio('1.mp3');
let materPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgeressBar');

let song =[
    {songName:"Earth MusicbyAden", filePath:"C:\Users\Lenovo\Desktop\Song\Earth  MusicbyAden (No Copyright Music).mp3", coverPath:"C:\Users\Lenovo\Desktop\Song\Earth  MusicbyAden (No Copyright Music).mp3",};
]


// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click',()=>){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.Play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.remove('fa-pause-play');
    }
}
audioElement.addEventListener('timeupdate',()=>0 {
     console.log("timeupdate");

})

   

