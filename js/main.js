$( document ).ready(function() {
    // Add actionlistners for each navigation items
    $("#about").click(function(){
        console.log("about");
        $("#about_page").show();
        $("#cv_page").hide();
        $("#contact_page").hide();        
    });

    $("#cv").click(function(){
        console.log("cv");
        $("#about_page").hide();
        $("#cv_page").show();
        $("#contact_page").hide();
    });

    $("#contact").click(function(){
        console.log("contact");
        $("#about_page").hide();
        $("#cv_page").hide();
        $("#contact_page").show();
    });
});