/* SYSTEM **************************************************/

$(document).ready(function(){
    var footer = $("#footer");
    var footerHeight = footer.height();
    var body = $("#body");
    var bodyHeight = body.height();
    var nav = $("#nav");
    var navContent = nav.children(".content");
    var main = $("#main");
    
    function setBodyHeight() {
        bodyHeight = $(window).height() - footerHeight;
        body.height(bodyHeight);
        nav.height("100%"); // hack to fix resizable setting the nav height
        console.log(bodyHeight);
    }
    
    // Main width resizing
    function setMainWidth(navWidth){
        var width = $(window).width() - navWidth - 40;
        main.width(width);
    }
    
    // Navigation width resizing
    $("#nav").resizable({
        resize: function(e, ui){
            navContent.width(ui.size.width);
            setMainWidth(ui.size.width);
        },
        // maxWidth: 240,
        minWidth: nav.width()
    });
    
    $(window).resize(function(){
        setBodyHeight();
        setMainWidth(nav.width());
    });
    
    // Init
    setBodyHeight();
    setMainWidth(nav.width());
    
});