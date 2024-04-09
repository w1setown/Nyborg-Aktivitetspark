document.addEventListener("DOMContentLoaded", function() {
  // Få fat i alle sektioner
const content = document.querySelectorAll(".content");

  // Få fat i knapperne
const goRightBtn = document.getElementById("goRight");
const goLeftBtn = document.getElementById("goLeft");

  // Aktuelt sektionsindeks
let currentIndex = 0;

  // Funktion til at rulle til næste sektion
function gåTilNæsteSektion() {
  if (currentIndex < content.length - 1) {
    currentIndex++;
    content[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
    // Skjul højre knap, hvis vi er på den sidste sektion
    goRightBtn.style.display = currentIndex === content.length - 1 ? 'none' : 'block';
    // Vis altid venstre knap, når vi bevæger os til næste sektion
    goLeftBtn.style.display = 'block';
  }

// Funktion til at rulle til forrige sektion
function gåTilForrigeSektion() {
  if (currentIndex > 0) {
    currentIndex--;
    content[currentIndex].scrollIntoView({ behavior: 'smooth' }); // Changed 'sections' to 'content'
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

window.focus(); 

  // Eventlytter for pile-tasterne
window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    gåTilNæsteContent();
  } else if (event.key === "ArrowLeft") {
    gåTilForrigeContent();
  }
});

  // Skjul venstre knap ved start
goLeftBtn.style.display = 'none';
});

