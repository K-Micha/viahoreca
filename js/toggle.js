const arrow = document.getElementById("arrow-toggle");
const menu = document.getElementById("menu");

let autoCloseTimer;

// Beim Klick auf das Menü-Icon
arrow.addEventListener("click", () => {
  menu.classList.toggle("open");
  arrow.classList.toggle("open");

    // Wenn Menü geöffnet wurde
  if (menu.classList.contains("open")) {
    clearTimeout(autoCloseTimer); // alten Timer stoppen
    autoCloseTimer = setTimeout(() => {
      closeMenu();
    }, 5000); // nach 5 Sekunden schließen
  }
});

// Beim Klick auf Menü-Links → Menü schließen
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
    clearTimeout(autoCloseTimer); // Timer stoppen, falls aktiv
  });
});

// Gemeinsame Funktion zum Schließen
function closeMenu() {
  menu.classList.remove("open");
  arrow.classList.remove("open");
}

//start swipe
const swipeZone = document.getElementById("swiper");
// Wisch-Geste
let touchStartX = 0;
let touchEndX = 0;
const minSwipe = 50;

swipeZone.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

swipeZone.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX - touchStartX > minSwipe) {
    // nach rechts → öffnen
    menu.classList.add("open");
    menu.classList.add("swipe-open");
  } else if (touchStartX - touchEndX > minSwipe) {
    // nach links → schließen
    menu.classList.remove("open","swipe-open");

  }
}
const swipeCloser = document.getElementById("swipeCloser");

swipeCloser.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

swipeCloser.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > minSwipe) {
    closeMenu(); // oder: menu.classList.remove('open');
    swipeCloser.classList.remove("active");
  }
});
