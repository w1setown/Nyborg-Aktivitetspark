# Nyborg-Aktivitetspark

## Update 0.0.4:

### Base Structure:
- Added frame images to enhance visual appeal (commented out for later addition).

### Styling:
- Adjusted button styles for better consistency and user experience.
- Tweaked the positioning of navigation buttons for improved layout.

### Functionality:
- Implemented keyboard navigation using arrow keys for seamless user interaction.
- Improved button visibility based on the current section to enhance usability.

### "Going forward":
- Further customization of frame images to complement the design.
- Exploration of additional features to enrich user engagement.


<br>
<br>
<br>



## Update 0.0.3:

### Base Structure:
- Implemented the basic structure of the webpage, including navigation links and content sections.
- The "dropdown" class has been added, to help make a dropdown of the contents of the webpages.
  
```html
           <li class="dropdown">
            <a href="/assets/pages/kontakt.html">Kontakt</a>
            <div class="dropdown-content">
              <a href="/assets/pages/partnerinfo.html">Partnere i projektet</a>
            </div>
  ```
        
### Styling
- Applied more refined (however, still somewhat crude) CSS styling to define the layout and appearance of the webpage.
- Adjusted button sizes and positions for better compatibility across different screen sizes and resolutions.

### Functionality
- Integrated a fixed navigation bar for improved accessibility and user experience.
- Fine-tuned layout and styles for optimal presentation with horizontal scroll.
- Introduced buttons for navigating between sections horizontally.
  > For this a JavaScript has been written:
```js
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
  }

  // Funktion til at rulle til forrige sektion
  function gåTilForrigeSektion() {
    if (currentIndex > 0) {
      currentIndex--;
      sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Eventlytter for højre knap
  goRightBtn.addEventListener("click", gåTilNæsteSektion);

  // Eventlytter for venstre knap
  goLeftBtn.addEventListener("click", gåTilForrigeSektion);
});

  ```

### "Going forward"
- A colour theme should be decided upon.
- Create grids for the different segments of the page, so there will be space for text and image/video
 

<br>
<br>
<br>

## Update 0.0.2

### Inspiration from "Omerko" Tutorial:
#### Base Code Implementation:
- Leveraging the horizontal scroll functionality demonstrated in the tutorial by "Omerko" on YouTube, the codebase has been adapted to incorporate similar scrolling behavior.
- Acknowledgment: The guide by "Omerko" serves as an inspiration, providing valuable insights into implementing horizontal scrolling and parallax effects.

#### Resource Reference:
- Tutorial: [Omerko - Horizontal Scroll Tutorial](https://www.youtube.com/watch?v=JgrZOom6jMg)
- CodePen Example: [Omerko's Horizontal Scroll CodePen](https://codepen.io/omerko96/pen/abNPMbb)

#### Other:
- The Javascript has been removed, and will probably be added at a later date. 

- The plan is to use the base he has created and start from there. The goal will to have a webpage that will move horizontally and have parallax. Hopefully, to make the page more 
  digestible and presentable for potential users.
