// expose.js
// document selectors, event listeners, and canvas.
// document gaph it (e.x) let myNNavbar =  document.querySelector('#navbar')
// document.getElementById(“id-of-your-element”)
// document.getElementsByClassName(“class-of-your-elements”)
// document.querySelector("css-selector")
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audioPlayer = document.querySelector('audio.hidden');
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]');

  let selectedHornType = "";
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", (event) => {
    const selectedHorn = event.target.value;
    selectedHornType = selectedHorn;
    updateHorn(selectedHorn);
  });

  volumeSlider.addEventListener("input", () => {
    const volume = Number(volumeSlider.value);
    updateVolume(volume);
  });

  document.querySelector('button').addEventListener("click", () => {
    if (selectedHornType === 'party-horn') {
        jsConfetti.addConfetti();
    }
    audioPlayer.play();
  });

  function updateHorn(selectedHorn) {
    switch (selectedHorn) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        audioPlayer.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        audioPlayer.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        audioPlayer.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        hornImage.src = 'assets/images/no-image.png';
        audioPlayer.src = '';
    }
  }

  function updateVolume(volume) {
    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audioPlayer.volume = volume / 100;
  }
}
