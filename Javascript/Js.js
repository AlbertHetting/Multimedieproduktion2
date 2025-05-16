function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz1.html";
}

  const video = document.getElementById("Video1");
  video.addEventListener("ended", Redirect);