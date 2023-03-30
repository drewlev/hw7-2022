var video = document.getElementById("player1");
var speed = 1;
var volumeInfo = video.volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = true;

});

document.querySelector("#slower").addEventListener("click", function() {
	speed *= 0.9
	video.playbackRate = speed;
	console.log(speed)
});

document.querySelector("#faster").addEventListener("click", function() {
	speed *= 10/9
	video.playbackRate = speed;
	console.log(speed)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log(video.currentTime);
});

const slider = document.querySelector("#slider");
const volumeSpan = document.getElementById('volume');
const volume = slider.value;
volumeSpan.textContent = volume;

// Add an event listener to the slider that updates the volume span with the new value
slider.addEventListener('input', () => {
  const volume = slider.value;
  volumeSpan.textContent = volume;
	console.log(volume);
  video.volume = parseFloat(volume/100);
});

document.querySelector("#vintage").addEventListener("click" ,function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click" ,function() {
	video.classList.remove("oldSchool");
});
