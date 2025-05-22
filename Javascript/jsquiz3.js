/* Tjek svar kode */

/* sæt maks svar man kan give til 3 ved at forhindre flere klik */
let answercount = 0;
const maxAnswers = 1;

  function checkanswer(){
    console.log("Answer has been checked");
    if (answercount >= maxAnswers) return;
   
    
/* Definer selectedtarget som et event der er targeted, deefter hentes data-value for at se om svaret er korrekt */
    let selectedElement2 = event.target.closest("[data-value]");

    selectedElement2.style.transition = "all 0.5s ease";

    let AnswerData2 = selectedElement2.getAttribute("data-value");

    if (AnswerData2 === "correct") {

        selectedElement2.style.backgroundColor = "#1eff00";
        
        
  
    } else {
        selectedElement2.style.backgroundColor = "#ff0000";
}


/* Hvis man klikker på et target med en data value lægges +1 til answercount */
selectedElement2.dataset.clicked = "true";
answercount++;


/* Når man har svaret på alle 3, bliver fortsæt kanppen synlig */
if (answercount === 1) {

    document.querySelector("#containerbutton").style.transition = "opacity 0.9s ease";
    document.querySelector("#containerbutton").style.opacity ="100%";
    
} }

/* Video 1 redirect */



/* Funktionen til redirection */
function Redirect() {
    console.log("video stopped")
    window.location.href = "Quiz4.html";
}

/* Funktionen til afspilning af video */
function playvideo(){
    const videox = document.getElementById("Videoplay")
    const evry = document.querySelector("main")

    /* Style ændring for at vise skjult video og gemme baggrund */
    videox.style.display = "block";
    evry.style.display = "none";
    

    /* videox const ændres ved at sætte videoen igang og unmute den, dette går udenom Apple's webkit ristriktion om at man ikke må redirect til en video med lyd.
    derfor afspilles den i samme vindue */
    videox.muted = false;
    videox.play().then(() => {
      console.log("Video is playing with sound.");
    }).catch((err) => {
      console.warn("Playback failed:", err);
    });
    videox.addEventListener("ended", Redirect);
  }





// Hvis videoen er preloaded og der er genereret en blob url vises den:
const blobUrl = sessionStorage.getItem('Videos/Dotted50v3.mp4');

const mainVideo = document.getElementById('mainvideo');

if (blobUrl) {
  mainVideo.src = blobUrl;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  mainVideo.src = 'Videos/Dotted50v3.mp4';
}




// Hvis videoen er preloaded og der er genereret en blobl uel vises den:
const blobUrl4 = sessionStorage.getItem('Videos/Sektion4.mp4');

const PlayVideo4 = document.getElementById('Videoplay');

if (blobUrl) {
  PlayVideo4.src = blobUrl4;
} else {
  // Hvis videoen ikke er preloaded, bruges det originale video src i stedet
  PlayVideo4.src = 'Videos/Sektion4.mp4';
}

