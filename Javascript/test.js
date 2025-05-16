  const video = document.getElementById("Video1");

  if (video) {
    console.log("Video element found.");

    video.addEventListener("ended", () => {
      console.log("Video ended!");
      window.location.href = "Quiz1.html";
    });
  } else {
    console.error("Video element not found!");
  }