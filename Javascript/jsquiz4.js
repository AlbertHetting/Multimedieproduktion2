
/* Tjek svar kode */



let answercount = 0;
const maxAnswers = 3;

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

   /* setTimeout(() => {window.location.href = "Video3.html"; }, 6500 ) */
}



selectedElement2.dataset.clicked = "true";
answercount++;


if (answercount === 3) {

    document.querySelector("#containerbutton").style.transition = "opacity 0.9s ease";
    document.querySelector("#containerbutton").style.opacity ="100%";
    
}

  }




















