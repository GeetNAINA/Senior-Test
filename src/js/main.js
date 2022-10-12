// $(document).ready(function () {
//     window.addEventListener('scroll', function () {
//         var nav = document.querySelector('nav');
//       nav.classList.toggle('sticky', window.scrollY > 0);
//     })

// });

$(document).ready(function () {
  $(".icon-bar").click(function () {
    $("body").toggleClass("showing");
  });

  $(".icon-close").click(function () {
    $("body").removeClass("showing");
  });
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});


//     var nav = document.querySelector('nav');

//     window.addEventListener('scroll', function () {
//       if (window.pageYOffset > 100) {
//         nav.classList.add('sticky');
//       } else {
//         nav.classList.remove('sticky');
//       }
//     });

// });