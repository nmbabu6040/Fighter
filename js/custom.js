new WOW().init();

new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});

// /*PRELOADER JS*/
// $(window).load(function () {
//   $(".loader_wrap").fadeOut();
//   $(".preloader").delay(350).fadeOut("slow");
// });
// /*END PRELOADER JS*/

// $("a").on("click", function (e) {
//   var anchor = $(this);
//   $("html, body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(anchor.attr("href")).offset().top - 50,
//       },
//       1500
//     );
//   e.preventDefault();
// });

// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 100) {
//     $(".main_header").addClass("sticky_menu");
//   } else {
//     $(".main_header").removeClass("sticky_menu");
//   }
// });
// $(document).on("click", ".navbar-collapse.in", function (e) {
//   if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
//     $(this).collapse("hide");
//   }
// });
