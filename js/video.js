var video = document.getElementById("player1");
var speed = 1;
var volumeInfo = video.volume;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	const volume = slider.value;
	volumeSpan.textContent = volume + "%";
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#mute").addEventListener("click", function() {
	var button = document.querySelector("#mute");
	if (button.innerHTML === "Mute") {
		button.innerHTML = "Unmute";
		console.log("Unmute");
		video.muted = true;
	  } else {
		button.innerHTML = "Mute";
		console.log("Mute");
		video.muted = false;
	  }

});

document.querySelector("#slower").addEventListener("click", function() {
	speed *= 0.9
	video.playbackRate = speed;
	console.log("Speed down video")
	console.log("Speed is " + speed)
});

document.querySelector("#faster").addEventListener("click", function() {
	speed *= 10/9
	video.playbackRate = speed;
	console.log("Speed up video")
	console.log("Speed is " + speed)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Skip ahead")
	console.log("Video current time is " + video.currentTime);
});

const slider = document.querySelector("#slider");
const volumeSpan = document.getElementById('volume');


// Add an event listener to the slider that updates the volume span with the new value
slider.addEventListener('input', () => {
  const volume = slider.value;
  volumeSpan.textContent = volume + "%";
	console.log(volume);
  video.volume = parseFloat(volume/100);
});

document.querySelector("#vintage").addEventListener("click" ,function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click" ,function() {
	video.classList.remove("oldSchool");
});
