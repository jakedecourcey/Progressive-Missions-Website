$(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 750) {
          $("#icon").click(function(){
            $(".navbar-item").toggle(250);
          });

          $(".navbar-item").click(function(){
            $(".navbar-item").hide(250);
          });
        }

    }
});
