document.addEventListener("DOMContentLoaded", function() {
    // Get all sections
    const sections = document.querySelectorAll(".section");
  
    // Get buttons
    const goRightBtn = document.getElementById("goRight");
    const goLeftBtn = document.getElementById("goLeft");
  
    // Current section index
    let currentIndex = 0;
  
    // Function to scroll to the next section
    function goToNextSection() {
      if (currentIndex < sections.length - 1) {
        currentIndex++;
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Function to scroll to the previous section
    function goToPreviousSection() {
      if (currentIndex > 0) {
        currentIndex--;
        sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Event listener for right button
    goRightBtn.addEventListener("click", goToNextSection);
  
    // Event listener for left button
    goLeftBtn.addEventListener("click", goToPreviousSection);
  });
  