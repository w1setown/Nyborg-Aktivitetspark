document.addEventListener("DOMContentLoaded", function() {
  // Få fat i alle sektioner
  const sections = document.querySelectorAll(".section");

  // Få fat i knapperne
  const goRightBtn = document.getElementById("goRight");
  const goLeftBtn = document.getElementById("goLeft");

  // Aktuelt sektionsindeks
  let currentIndex = 0;

  // Funktion til at rulle til næste sektion
  function gåTilNæsteSektion() {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
    // Skjul højre knap, hvis vi er på den sidste sektion
    goRightBtn.style.display = currentIndex === sections.length - 1 ? 'none' : 'block';
    // Vis altid venstre knap, når vi bevæger os til næste sektion
    goLeftBtn.style.display = 'block';
  }

  // Funktion til at rulle til forrige sektion
  function gåTilForrigeSektion() {
    if (currentIndex > 0) {
      currentIndex--;
      sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
    // Skjul venstre knap, hvis vi er på den første sektion
    goLeftBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    // Vis altid højre knap, når vi bevæger os til den forrige sektion
    goRightBtn.style.display = 'block';
  }

  // Eventlytter for højre knap
  goRightBtn.addEventListener("click", gåTilNæsteSektion);

  // Eventlytter for venstre knap
  goLeftBtn.addEventListener("click", gåTilForrigeSektion);

  // Eventlytter for pile-tasterne
  window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      gåTilNæsteSektion();
    } else if (event.key === "ArrowLeft") {
      gåTilForrigeSektion();
    }
  });

  // Skjul venstre knap ved start
  goLeftBtn.style.display = 'none';
});
