document.addEventListener("DOMContentLoaded", () => {
  
  /**
   * LÓGICA PARA LA PÁGINA DE LA CAJA (caja.html)
   */
  if (document.getElementById("abrirCajaBtn")) {
    const videoContainer = document.getElementById("video-container");
    const videoCaja = document.getElementById("videoCaja");
    const cuponDiv = document.getElementById("cupon-resultado");
    const cuponGuardado = document.getElementById("cupon-guardado");
    const abrirBtn = document.getElementById("abrirCajaBtn");
    const usarCuponBtn = document.getElementById("usarCuponBtn");
    const bloqueoMsg = document.getElementById("bloqueo-msg");

    const MILISEGUNDOS_EN_24_HORAS = 24 * 60 * 60 * 1000;
    const numeroWhatsApp = "59891990372";

    const verificarBloqueo = () => {
      const ultimaVez = localStorage.getItem("ultimaCajaAbierta");
      if (!ultimaVez) return false;

      if (Date.now() - parseInt(ultimaVez, 10) < MILISEGUNDOS_EN_24_HORAS) {
        const descuentoGuardado = localStorage.getItem("savedDiscount");
        const codigoGuardado = localStorage.getItem("savedCode");

        if (descuentoGuardado && codigoGuardado) {
          const mensajeWhatsApp = `Este es mi descuento (${descuentoGuardado}%) código: ${codigoGuardado}`;
          const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
          
          cuponGuardado.innerHTML = `🎁 Cupón Guardado: ${descuentoGuardado}% | Vence en 24h`;
          cuponGuardado.href = urlWhatsApp;
          cuponGuardado.target = "_blank";
          cuponGuardado.classList.remove('d-none'); // Muestra el cupón guardado
        }
        bloqueoMsg.classList.remove('d-none'); // Muestra el mensaje de bloqueo
        return true;
      } else {
        localStorage.removeItem("ultimaCajaAbierta");
        localStorage.removeItem("savedDiscount");
        localStorage.removeItem("savedCode");
        return false;
      }
    };

    const abrirCaja = () => {
      if (verificarBloqueo()) return;

      abrirBtn.disabled = true;
      abrirBtn.textContent = "ABRIENDO...";
      videoCaja.currentTime = 0;
      videoCaja.play();

      setTimeout(() => {
        // Usa la clase 'd-none' para ocultar el video de forma fiable
        videoContainer.classList.add('d-none');
        
        const descuento = Math.floor(Math.random() * 7) + 2;
        const codigo = `aF5${descuento}`;
        
        const mensajeWhatsApp = `Este es mi descuento (${descuento}%) código: ${codigo}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
        
        cuponDiv.innerHTML = `🎉 ¡Obtuviste un Descuento del <strong>${descuento}%</strong>! 🎉`;
        cuponDiv.classList.remove('d-none'); // Muestra el resultado
        
        usarCuponBtn.href = urlWhatsApp;
        usarCuponBtn.target = "_blank";
        usarCuponBtn.classList.remove('d-none'); // Muestra el botón de usar cupón
        
        abrirBtn.classList.add('d-none'); // Oculta el botón de abrir
        
        localStorage.setItem("ultimaCajaAbierta", Date.now().toString());
        localStorage.setItem("savedDiscount", descuento.toString());
        localStorage.setItem("savedCode", codigo);

      }, 3400);
    };
    
    const inicializarPaginaCaja = () => {
      // Oculta todos los elementos dinámicos al inicio
      cuponDiv.classList.add('d-none');
      cuponGuardado.classList.add('d-none');
      usarCuponBtn.classList.add('d-none');
      bloqueoMsg.classList.add('d-none');
      
      // Decide qué mostrar: el juego o el estado de bloqueo
      const estaBloqueado = verificarBloqueo();
      if (!estaBloqueado) {
        abrirBtn.classList.remove('d-none');
        videoContainer.classList.remove('d-none');
      } else {
        abrirBtn.classList.add('d-none');
        videoContainer.classList.add('d-none');
      }
    };

    abrirBtn.addEventListener("click", abrirCaja);
    inicializarPaginaCaja();
  }

  /**
   * LÓGICA PARA LA PÁGINA DE LA CAJA (caja.html)
   */
  if (document.getElementById("abrirCajaBtn")) {
    // --- Selección de Elementos ---
    const videoContainer = document.getElementById("video-container");
    const videoCaja = document.getElementById("videoCaja");
    const cuponDiv = document.getElementById("cupon-resultado");
    const cuponGuardado = document.getElementById("cupon-guardado");
    const abrirBtn = document.getElementById("abrirCajaBtn");
    const usarCuponBtn = document.getElementById("usarCuponBtn");
    const bloqueoMsg = document.getElementById("bloqueo-msg");

    const MILISEGUNDOS_EN_24_HORAS = 24 * 60 * 60 * 1000;
    const numeroWhatsApp = "59891990372";

    const verificarBloqueo = () => {
      const ultimaVez = localStorage.getItem("ultimaCajaAbierta");
      if (!ultimaVez) return false;

      // Si el usuario está en el período de 24h
      if (Date.now() - parseInt(ultimaVez, 10) < MILISEGUNDOS_EN_24_HORAS) {
        const descuentoGuardado = localStorage.getItem("savedDiscount");
        const codigoGuardado = localStorage.getItem("savedCode");

        if (descuentoGuardado && codigoGuardado) {
          const mensajeWhatsApp = `Este es mi descuento (${descuentoGuardado}%) código: ${codigoGuardado}`;
          const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
          
          cuponGuardado.innerHTML = `🎁 Cupón Guardado: ${descuentoGuardado}%`;
          cuponGuardado.href = urlWhatsApp;
          cuponGuardado.target = "_blank";
          cuponGuardado.hidden = false; // Muestra el cupón guardado
        }
        bloqueoMsg.hidden = false; // Muestra el mensaje de bloqueo
        return true;
      } else {
        // Si el tiempo ya pasó, limpia los datos viejos
        localStorage.removeItem("ultimaCajaAbierta");
        localStorage.removeItem("savedDiscount");
        localStorage.removeItem("savedCode");
        return false;
      }
    };

    const abrirCaja = () => {
      if (verificarBloqueo()) return;

      abrirBtn.disabled = true;
      abrirBtn.textContent = "ABRIENDO...";
      videoCaja.currentTime = 0;
      videoCaja.play();

      setTimeout(() => {
        videoContainer.hidden = true;

        let listaD = [5,6,7,8,9,10];
        let numeroD = Math.floor(Math.random() * listaD.length);
        
        const descuento = listaD[numeroD];
        const codigo = `aF5${descuento}`;
        
        const mensajeWhatsApp = `Este es mi descuento (${descuento}%) código: ${codigo}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
        
        cuponDiv.innerHTML = `🎉 ¡Obtuviste un Descuento del <strong>${descuento}%</strong>! 🎉`;
        cuponDiv.hidden = false;
        
        usarCuponBtn.href = urlWhatsApp;
        usarCuponBtn.target = "_blank";
        usarCuponBtn.hidden = false;
        
        abrirBtn.hidden = true;
        
        localStorage.setItem("ultimaCajaAbierta", Date.now().toString());
        localStorage.setItem("savedDiscount", descuento.toString());
        localStorage.setItem("savedCode", codigo);

      }, 3400);
    };
    
    // --- FUNCIÓN DE INICIALIZACIÓN (LA CLAVE DE LA SOLUCIÓN) ---
    const inicializarPaginaCaja = () => {
        // 1. Oculta todos los elementos dinámicos por defecto
        cuponDiv.hidden = true;
        cuponGuardado.hidden = true;
        usarCuponBtn.hidden = true;
        bloqueoMsg.hidden = true;
        abrirBtn.hidden = true;
        videoContainer.hidden = true;

        // 2. Verifica si el usuario está bloqueado
        const estaBloqueado = verificarBloqueo();

        // 3. Si no está bloqueado, muestra los elementos para un nuevo juego
        if (!estaBloqueado) {
            abrirBtn.hidden = false;
            videoContainer.hidden = false;
        }
        // (Si está bloqueado, verificarBloqueo ya se encargó de mostrar lo necesario)
    };

    // --- Asignación de Eventos e Inicialización ---
    abrirBtn.addEventListener("click", abrirCaja);
    inicializarPaginaCaja(); // Ejecuta la función al cargar la página
  }
});



// 

let titulo = "Zona de Juegos y Recompensas"

if (titulo == document.title){
  document.getElementById('cajaSorpresa').addEventListener('click', (e)=>{
    window.location.href = "caja.html";
  });
}