

function playSound(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  console.log(e);
}

function removeTransition(e) {
  const key = document.querySelector(`.key[data-key="${e.which}"]`);

  if (!key) return;

  key.classList.remove('playing');
}


window.addEventListener('keyup', removeTransition);
window.addEventListener('keydown', playSound);
