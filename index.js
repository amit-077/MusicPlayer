let isPlaying = false;



//songs list
let songs = [
  {
    name: "Brothers Anthem",
    artist: "Vishal Dadlani",
    coverImg: "coverImages/brothersAnthem.jpg",
    currSong: "music/brothersAnthem.mp3"
  },
  {
    name: "Kesariya",
    artist: "Arijit Singh",
    coverImg: "coverImages/kesariya.jpg",
    currSong: "music/kesariya.mp3"
  },
  {
    name: "Bhool Bhoolaiya",
    artist: "Neeraj Shridhar",
    coverImg: "coverImages/bhulBhulaiya.jpg",
    currSong: "music/bhulBhulaiya.mp3"
  }
]

// Gaining access to all html that we want to change

let songName = document.getElementById("musicName");
let songArtist = document.getElementById("musicArtist");
let songImage = document.getElementById("musicPic");
let songMusic = document.getElementById("music");

// When user visits site, this song should be displayed
songName.textContent = songs[0].name;
songArtist.textContent = songs[0].artist;
songImage.setAttribute("src", songs[0].coverImg);
songMusic.setAttribute("src", songs[0].currSong);

// setting variable to get current song
let currentSong = 0;


// function for next Song
function nextSong(){
  currentSong = (currentSong+1) % (songs.length);
  songName.textContent = songs[currentSong].name;
  songArtist.textContent = songs[currentSong].artist;
  songImage.setAttribute("src", songs[currentSong].coverImg);
  songMusic.setAttribute("src", songs[currentSong].currSong);
  playMusic();
}

function prevSong(){
  if(currentSong != 0){
    currentSong--;
  }else{
    currentSong = (songs.length)-1;
  }
  songName.textContent = songs[currentSong].name;
  songArtist.textContent = songs[currentSong].artist;
  songImage.setAttribute("src", songs[currentSong].coverImg);
  songMusic.setAttribute("src", songs[currentSong].currSong);
  playMusic();
}

document.getElementById("next").addEventListener("click",nextSong);

document.getElementById("prev").addEventListener("click",prevSong);
// Play pause song functionality
function playSong(){
  if(!isPlaying){
      playMusic();
  }else{
      pauseMusic();
  }
}

document.getElementById('playPause').addEventListener("click",playSong);

// When space is pressed, song will be played
document.addEventListener("keypress",function(evt){
  if(evt.key == ' '){
    playSong();
  }
})

// Play song functionality

function playMusic(){
  document.getElementById("music").play();
  isPlaying = true;
  document.getElementById("musicBody").classList.add("playing")
  document.getElementById("musicPic").classList.add("moveImage");
  document.getElementById("icon").classList.replace("fa-play", "fa-pause");
}

function pauseMusic(){
  document.getElementById("music").pause();
  isPlaying = false;
  document.getElementById("musicBody").classList.remove("playing")
  document.getElementById("musicPic").classList.remove("moveImage");
  document.getElementById("icon").classList.replace("fa-pause", "fa-play");
}


