const video = document.getElementById("videoPlayer");

// Store video sources
const idleVideo = "videos/idle.mp4";
const actionVideo = "videos/action.mp4";

// Play action video on click/tap
video.addEventListener("click", () => {
    video.src = actionVideo;
    video.loop = false; // Play once
    video.muted = false; // Unmute if needed
    video.play();
});

// When action video ends, go back to idle video
video.addEventListener("ended", () => {
    video.src = idleVideo;
    video.loop = true;
    video.muted = true; // Keep muted
    video.play();
});
