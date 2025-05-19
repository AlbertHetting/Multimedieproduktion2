  /* Video 4 redirect */ 
  function Redirect4() {
    console.log("video stopped")
    window.location.href = "end.html";
}
  const video44 = document.getElementById("Video4");
  video44.addEventListener("ended", Redirect4);