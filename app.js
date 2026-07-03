let timerInterval;

function startTimer(minutes) {
  clearInterval(timerInterval);

  let time = minutes * 60;
  const display = document.getElementById("timer");

  timerInterval = setInterval(() => {
    let m = Math.floor(time / 60);
    let s = time % 60;

    display.innerText = `${m}:${s < 10 ? "0" : ""}${s}`;

    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      display.innerText = "🧘 Done";
    }
  }, 1000);
}

// 🎵 Songs
function addSong() {
  const input = document.getElementById("songInput");

  let songs = JSON.parse(localStorage.getItem("songs")) || [];

  if (input.value.trim() !== "") {
    songs.push(input.value);
    localStorage.setItem("songs", JSON.stringify(songs));
    input.value = "";
    loadSongs();
  }
}

function loadSongs() {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  let songs = JSON.parse(localStorage.getItem("songs")) || [];

  songs.forEach(song => {
    const p = document.createElement("p");
    p.innerText = "🎵 " + song;
    songList.appendChild(p);
  });
}

// 📸 Photos
function addPhoto() {
const input = document.getElementById("photoInput");

  let photos = JSON.parse(localStorage.getItem("photos")) || [];

  if (input.value.trim() !== "") {
    photos.push(input.value);
    localStorage.setItem("photos", JSON.stringify(photos));
    input.value = "";
    loadPhotos();
  }
}

function loadPhotos() {
  const grid = document.getElementById("photoGrid");
  grid.innerHTML = "";

  let photos = JSON.parse(localStorage.getItem("photos")) || [];

  photos.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    grid.appendChild(img);
  });
}
loadSongs();
loadPhotos();