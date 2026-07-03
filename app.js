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
  const songList = document.getElementById("songList");

  if (input.value.trim() !== "") {
    const p = document.createElement("p");
    p.innerText = "🎵 " + input.value;
    songList.appendChild(p);
    input.value = "";
  }
}

// 📸 Photos
function addPhoto() {
  const input = document.getElementById("photoInput");
  const grid = document.getElementById("photoGrid");

  if (input.value.trim() !== "") {
    const img = document.createElement("img");
    img.src = input.value;
    grid.appendChild(img);
    input.value = "";
  }
}