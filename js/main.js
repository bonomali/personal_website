$( document ).ready(function() {
    //$("#about").css('color', "#FF4500");


    // Add actionlistners for each navigation items
    $("#home").click(function(){
        console.log("home");
        $("#about_page").show();
        $("#cv_page").hide();
        $("#portfolio_page").hide();
        $("#contact_page").hide();        
    });

    $("#about").click(function(){
        console.log("about");
        $("#about_page").show();
        $("#cv_page").hide();
        $("#portfolio_page").hide();
        $("#contact_page").hide();        
    });

    $("#cv").click(function(){
        console.log("cv");
        $("#about_page").hide();
        $("#cv_page").show();
        $("#portfolio_page").hide();
        $("#contact_page").hide();
    });

    $("#portfolio").click(function(){
        console.log("portfolio");
        $("#about_page").hide();
        $("#cv_page").hide();
        $("#portfolio_page").show();
        $("#contact_page").hide();
    });

    $("#contact").click(function(){
        console.log("contact");
        $("#about_page").hide();
        $("#cv_page").hide();
        $("#portfolio_page").hide();
        $("#contact_page").show();
    });

    $("#js-navbar-toggle").click(function(){
        $(".main-nav").toggleClass('active');
    });
});
