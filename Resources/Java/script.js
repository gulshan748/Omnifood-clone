  // Initialize AOS
       AOS.init();

      // Mobile navigation
      $(".js--nav-icon").click(function (e) {
        e.preventDefault();
        var nav = $(".main-nav");
        var icon = $(".js--nav-icon ion-icon");

        nav.toggleClass("show");

        if (nav.hasClass("show")) {
          icon.attr("name", "close-outline");
        } else {
          icon.attr("name", "menu-outline");
        }
      });

      // Close mobile menu when clicking on nav links
      $(".main-nav a").click(function () {
        if ($(window).width() <= 768) {
          $(".main-nav").removeClass("show");
          $(".js--nav-icon ion-icon").attr("name", "menu-outline");
        }
      });

      

      // Sticky navigation
      $(".section-features").waypoint(
        function (direction) {
          if (direction == "down") {
            $(".navbar").addClass("sticky");
          } else {
            $(".navbar").removeClass("sticky");
          }
        },
        {
          offset: "60px;",
        },
      );

      // Button scrolling without animation
      $(".js--scroll-to-plans").click(function () {
        window.scrollTo({
          top: $(".section-pricing").offset().top - 70,
          behavior: "auto",
        });
      });

      $(".js--scroll-to-start").click(function () {
        window.scrollTo({
          top: $(".section-features").offset().top - 70,
          behavior: "auto",
        });
      });
    