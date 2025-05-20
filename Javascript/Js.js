/* Video 1 redirect */

function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz1.html";
}

  const video = document.getElementById("Video1");
  video.addEventListener("ended", Redirect);




/* Tjek svar kode */
  function checkanswer(){
    console.log("Answer has been checked");
    
    
/* Definer selectedtarget som et event der er targeted, deefter hentes data-value for at se om svaret er korrekt */
    let selectedElement = event.target;

    let AnswerData = selectedElement.getAttribute("data-value");

    if (AnswerData === "correct") {
        document.getElementById("correctanswertext").innerHTML = " <h2> ✅ Sådan - du svarede rigtigt! </h2> ";
        
  
    } else {
        document.getElementById("correctanswertext").innerHTML = " <h2> ❌ Det er desværre det forkerte svar </h2> ";
    } 
    
    setTimeout(() => {window.location.href = "Video3.html"; }, 6500 ) 
}







  