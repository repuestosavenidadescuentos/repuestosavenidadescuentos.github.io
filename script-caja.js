let testingMode = true;  // Cambia a false para activar el bloqueo real de 24 horas

document.addEventListener("DOMContentLoaded", () => {
  const videoDiv = document.getElementById("video-sorpresa");
  const videoCaja = document.getElementById("videoCaja");
  const cuponDiv = document.getElementById("cupon");
  const abrirBtn = document.getElementById("abrirCajaBtn");
  const bloqueoMsg = document.getElementById("bloqueo-msg");

  if (testingMode) {
    localStorage.removeItem("ultimaCaja");
  }

  const ahora = Date.now();
  const ultimaVez = localStorage.getItem("ultimaCaja");

  if (!testingMode && ultimaVez && ahora - parseInt(ultimaVez) < 86400000) {
    abrirBtn.disabled = true;
    bloqueoMsg.hidden = false;
  }

  abrirBtn.addEventListener("click", () => {
    abrirBtn.disabled = true;
    videoDiv.hidden = false;
    cuponDiv.hidden = true;
    bloqueoMsg.hidden = true;

    videoCaja.currentTime = 0;
    videoCaja.play();

    setTimeout(() => {
      videoDiv.hidden = true;
      const descuento = Math.floor(Math.random() * 7) + 2;
      cuponDiv.textContent = `🎉 ¡Obtuviste ${descuento}% de DESCUENTO! 🎁`;
      cuponDiv.hidden = false;
      localStorage.setItem("ultimaCaja", Date.now().toString());
    }, 3000);
  });
});