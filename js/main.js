jQuery( document ).ready(function() {
    //$("#about").css('color', "#FF4500");


    // Add actionlistners for each navigation items
    jQuery("#home").click(function(){
        console.log("home");
        jQuery("#about_page").show();
        jQuery("#cv_page").hide();
        jQuery("#portfolio_page").hide();
        jQuery("#contact_page").hide();        
    });

    jQuery("#about").click(function(){
        console.log("about");
        jQuery("#about_page").show();
        jQuery("#cv_page").hide();
        jQuery("#portfolio_page").hide();
        jQuery("#contact_page").hide();        
    });

    jQuery("#cv").click(function(){
        console.log("cv");
        jQuery("#about_page").hide();
        jQuery("#cv_page").show();
        jQuery("#portfolio_page").hide();
        jQuery("#contact_page").hide();
    });

    jQuery("#portfolio").click(function(){
        console.log("portfolio");
        jQuery("#about_page").hide();
        jQuery("#cv_page").hide();
        jQuery("#portfolio_page").show();
        jQuery("#contact_page").hide();
    });

    jQuery("#contact").click(function(){
        console.log("contact");
        jQueryQuery("#about_page").hide();
        jQuery("#cv_page").hide();
        jQuery("#portfolio_page").hide();
        jQuery("#contact_page").show();
    });

    jQuery("#js-navbar-toggle").click(function(){
        jQuery(".main-nav").toggleClass('active');
    });
});
