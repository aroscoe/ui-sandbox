/* SYSTEM **************************************************/

$(document).ready(function(){
    var footer = $("#footer");
    var footerHeight = footer.height();
    var body = $("#body");
    var bodyHeight = body.height();
    var nav = $("#nav");
    var navContent = nav.children(".content");
    var navWidth = nav.width();
    var main = $("#main");
    
    function setBodyHeight() {
        bodyHeight = $(window).height() - footerHeight;
        body.height(bodyHeight);
        nav.height("100%"); // hack to fix resizable setting the nav height
        console.log("body height: " + bodyHeight);
    }
    
    // Main width resizing
    function setMainWidth(resizeWidth){
        console.log("------------------------------------");
        console.log("resize width: " + resizeWidth);
        console.log("nav width: " + navWidth);
        
        if (resizeWidth == 0) {
            var width = $(window).width() - navWidth - 40;
        } else {
            if (resizeWidth < navWidth) {
                var width = $(window).width() - resizeWidth - 50;
            } else {
                var width = $(window).width() - resizeWidth - 40;
            }
            navWidth = resizeWidth;
        }
        main.width(width);
    }
    
    // Navigation width resizing
    $("#nav").resizable({
        resize: function(e, ui){
            navContent.width(ui.size.width);
            setMainWidth(ui.size.width);
            // console.log("nav width: " + ui.size.width);
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
    setMainWidth(0);
    
});