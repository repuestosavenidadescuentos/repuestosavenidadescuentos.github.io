document.addEventListener("DOMContentLoaded", () => {
  const luchaBot = document.getElementById("luchaBot");
  const raspaYgana = document.getElementById("raspaYgana");
  const ruletaSuerte = document.getElementById("ruletaSuerte");
  const desarrolloModal = document.getElementById("desarrolloModal");
  const closeModal = document.querySelector(".close-modal");

  [luchaBot, raspaYgana, ruletaSuerte].forEach(juego => {
    juego.addEventListener("click", (e) => {
      e.preventDefault();
      desarrolloModal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    desarrolloModal.style.display = "none";
  });
});