const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav"); //by default, auido src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play(); // playing audio

  const clickedKey = document.querySelector(`[data-key=${key}]`);
  clickedKey.classList.add("active"); // adding active class to the clicked key element
  setTimeout(() => {
    //removing active class after 150ms from the clicked key element
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); //adding data-key value to the allKeys array
  //Calling playtune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
  //console.log(key.dataset.key);
});
const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const handleVolume = (e) => {
  //toggling hide class from each key on the checkbox click
  audio.volume = e.target.value; //passing the range slider value as an audio volume
};
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);
