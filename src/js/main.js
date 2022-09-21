
$(document).ready(function () {
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });

});

