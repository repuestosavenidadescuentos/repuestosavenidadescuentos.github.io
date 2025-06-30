let testingMode = true;  // Cambia a false para activar el bloqueo real de 24 horas

document.addEventListener("DOMContentLoaded", () => {
  const videoDiv = document.getElementById("video-sorpresa");
  const videoCaja = document.getElementById("videoCaja");
  const cuponDiv = document.getElementById("cupon");
  const abrirBtn = document.getElementById("abrirCajaBtn");
  const bloqueoMsg = document.getElementById("bloqueo-msg");

  // El video no se reproduce automáticamente
  videoCaja.pause();
  videoDiv.hidden = false;

  const reproducirCaja = () => {
    abrirBtn.disabled = true;
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
    }, 2000);
  };

  abrirBtn.addEventListener("click", reproducirCaja);
  videoCaja.addEventListener("click", reproducirCaja);
});
