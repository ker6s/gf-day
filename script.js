const app = document.getElementById("app");
const audio = document.getElementById("bg-music");
const volumeSlider = document.getElementById("volumeSlider");
const musicIcon = document.querySelector(".music-icon");

let previousVolume = 0.5;
audio.volume = previousVolume;

function navigate(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;
      window.scrollTo(0, 0);
    });
}

function toggleMusic() {
  if (audio.volume > 0) {
    previousVolume = audio.volume;
    audio.volume = 0;
    volumeSlider.value = 0;
    musicIcon.textContent = "🔇";
  } else {
    audio.volume = previousVolume;
    volumeSlider.value = previousVolume;
    musicIcon.textContent = "🔊";
  }
}

volumeSlider.addEventListener("input", function () {
  audio.volume = this.value;
  if (this.value > 0) {
    previousVolume = this.value;
    musicIcon.textContent = "🔊";
  } else {
    musicIcon.textContent = "🔇";
  }
});

document.addEventListener("click", () => {
  audio.play().catch(() => {});
}, { once: true });

navigate('index');
