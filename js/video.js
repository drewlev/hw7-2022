var video = document.getElementById("player1");
var speed = 1;
var slider = document.getElementById("#slider");
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

slider.addEventListener("#slider", function() {
	var volume = parseFloat(slider.value);
	video.volume = volume;
	volumeInfo.innerHTML = Math.round(volume * 100) + "%";
});

