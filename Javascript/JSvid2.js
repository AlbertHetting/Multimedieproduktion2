/* Video 2 redirect */ 
  function Redirect2() {
    console.log("video stopped")
    window.location.href = "Quiz2.html";
}
  const video22 = document.getElementById("Video2");
  video22.addEventListener("ended", Redirect2);
