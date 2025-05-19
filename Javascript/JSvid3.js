  /* Video 3 redirect */ 
  function Redirect3() {
    console.log("video stopped")
    window.location.href = "Quiz3.html";
}
  const video33 = document.getElementById("Video3");
  video33.addEventListener("ended", Redirect3);