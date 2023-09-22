document.addEventListener("DOMContentLoaded", function () {
    const loadingText = document.querySelector(".loading-text");
    const dots = ["", ".", "..", "..."];
    let dotIndex = 0;
  
    function updateLoadingText() {
      loadingText.textContent = "Coming Soon" + dots[dotIndex];
      dotIndex = (dotIndex + 1) % dots.length;
    }
  
    setInterval(updateLoadingText, 1000); // Update every half second (500 milliseconds)
  });
  