var menuBtn = document.getElementById("menuBtn")
        var sideNav = document.getElementById("sideNav")
        var menu = document.getElementById("menu")
        sideNav.style.right == "-250px";
        menuBtn.onclick = function() {
            if (sideNav.style.right == "-250px") {
                sideNav.style.right = "0";
                menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
            } else {
                sideNav.style.right = "-250px";
                menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
            }
        }

        $(document).ready(function() {

            $("a").on('click', function(event) {

                if (this.hash !== "") {

                    event.preventDefault();
                    var hash = this.hash;

                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {
                        window.location.hash = hash;
                    });
                }
            });
        });


        (function () {
            "use strict";
          
            var carousels = function () {
              $(".owl-carousel1").owlCarousel({
                loop: true,
                center: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                responsive: {
                  0: {
                    items: 1,
                    nav: false
                  },
                  680: {
                    items: 2,
                    nav: false,
                    loop: false
                  },
                  1000: {
                    items: 3,
                    nav: true
                  }
                }
              });
            };
          
            (function ($) {
              carousels();
            })(jQuery);
          })();
          