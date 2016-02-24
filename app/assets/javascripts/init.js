// Initialize jquery plugins or specific js that may run outside React.

module.exports = function() {

  // Initialize Material Design
  $.material.init();


  // Dismiss alerts
  $(".alert").delay(4000).slideUp(200, function() {
    $(this).alert('close');
  });


  // Initialize main progress bar
  NProgress.configure({
    showSpinner: false,
    ease: 'ease',
    speed: 500
  });
}
