//Carousel
const myCarouselElement = document.querySelector("#carouselExample");
const carousel = new bootstrap.Carousel(myCarouselElement,{
  interval: 2000,
  touch: true,
  keyboard: false,  
  ride: true,
});

//Smooth Scroll
$(document).ready(function(){
  $("a").on('click', function(event){
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },1000,function(){
        window.location.hash = hash;
      });
    }
  });
});

//Inicialización Tooltip
$(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Activar mensaje emergente del botón enviar del formulario de contacto
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
    appendAlert('¡Tu mensaje ha sido enviado! Gracias por contactarnos...', 'success')
    })
}