# Linjer af kode som skal kigges på
## "Burger"-menubar

<br>

### html kode forsøg
```html
<body>
<div class="burger-menu">
  <button class="burger-btn" onclick="toggleMenu()">☰</button>
  <div class="nav-container">
    <nav class="main-nav">
      <ul>
        <li><a href="/assets/pages/velkommen.html">Velkommen</a></li>
      <!--Dropdown Element-->
        <li class="dropdown">
          <a href="/assets/pages/om_parken.html">Om parken</a>
          <div class="dropdown-content">
            <a href="/assets/pages/tilblivelse.html">Tilblivelse</a>
            <a href="/assets/pages/udvikling.html">Videre udvikling af området</a>
            <a href="/assets/pages/aktiviteter.html">Aktiviteter</a>
            <a href="/assets/pages/initiativer.html">Inititiativer for udsatte grupper</a>
          </div>
        </li>
      <!--Dropdown Element-->
        <li class="dropdown">
          <a href="/assets/pages/lær_matematik.html">Lær matematik</a>
          <div class="dropdown-content">
            <a href="/assets/pages/talsystemet.html">Talsystemet</a>
            <a href="/assets/pages/videregående.html">Rumlig forståelse</a>
            <a href="/assets/pages/koordinatsystem.html">Koordinatsystem</a>
            <a href="/assets/pages/tidslinje.html">Historisk tidslinje</a>
            <a href="/assets/pages/tallinje.html">Tallinje</a>
            <a href="/assets/pages/regnebord.html">Regnebordet</a>
            <a href="/assets/pages/talblindhed.html">Talblindhed</a>
          </div>
        </li>
          <li><a href="/assets/pages/fysisk_træning.html">Fysisk Træning</a></li>
          <li><a href="/assets/pages/støt_os.html">Støt os</a></li>
          <li><a href="/assets/pages/nyheder.html">Nyheder</a></li>
          <li><a href="/assets/pages/presse.html">Presse</a>
        </li>
      <!--Dropdown Element-->
        <li class="dropdown">
          <a href="/assets/pages/kontakt.html">Kontakt</a>
          <div class="dropdown-content">
            <a href="/assets/pages/partnerinfo.html">Partnere i projektet</a>
          </div>
        </li>
      </ul>
    </nav>
</div>

```
<br>

### CSS kode forsøg
- Dette virkede ikke, problemet der opstod var at siden forsvandt, når view blev for stor.

```css
/* Burger Menu */
.burger-menu {
  display: none; /* Hide burger menu by default */
}

/* Show burger menu when viewport width is less than or equal to 768px */
@media screen and (max-width: 768px) {
  .burger-menu {
    display: block;
  }
}

/* Burger button */
.burger-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

/* Show menu when it has the 'show-menu' class */
.burger-menu .main-nav.show-menu {
  display: block;
}
```
<br>

### JavaScript kode forsøg (var tilføjet til html koden i test)
```js
  <script>
    function toggleMenu() {
      var menu = document.querySelector('.main-nav');
      menu.classList.toggle('show-menu');
    }
  </script>
```

<br>

## Ramme 
> Kan bruges senere

``` html
  <div class = "frame-container">
    <img src="assets/images/top-højre.png" alt="ramme1">
    <img src="assets/images/top-venstre.png" alt="ramme2">
    <img src="assets/images/bund-højre.png" alt="ramme3">
    <img src="assets/images/bund-venstre.png" alt="ramme4">
  </div> 
```