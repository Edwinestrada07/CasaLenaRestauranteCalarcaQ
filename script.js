function mostrarSiguienteSeccion() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
  }

  function redirigirWhatsApp() {
      https://web.whatsapp.com/
    var mensaje = "¡Hola! Me gustaría hacer un pedido en CasaLena Restaurante. Gracias."
    var telefono = "+573135181497"; // Reemplaza con tu número de WhatsApp
    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
    window.location.href = url;
  }