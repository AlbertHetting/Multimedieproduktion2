/* Video 1 redirect */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz3.html";
}

function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    videox.style.display = "block";
    evry.style.display = "none";
    


    videox.muted = false;
    videox.play().then(() => {
      console.log("Video is playing with sound.");
    }).catch((err) => {
      console.warn("Playback failed:", err);
    });
    videox.addEventListener("ended", Redirect);
  }











/* Tjek svar kode */
  function checkanswer(){
    console.log("Answer has been checked");
    
    
/* Definer selectedElement som et event der er targeted, derefter hentes data-value for at se om svaret er korrekt */
    let selectedElement = event.target;

    let AnswerData = selectedElement.getAttribute("data-value");

    if (AnswerData === "correct") {
        document.getElementById("correctanswertext").innerHTML = " <h2> ✅ Sådan - du svarede rigtigt! </h2> ";
        
  
    } else {
        document.getElementById("correctanswertext").innerHTML = " <h2> ❌ Det er desværre det forkerte svar </h2> ";
    } 
    
    setTimeout(() => {playvideo()}, 6500 ) 
}
