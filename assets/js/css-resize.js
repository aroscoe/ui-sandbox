var MainFrame = {
    header: null,
    footer: null,
    body:   null,
    nav:    null,

    initialize: function() {
        MainFrame.header = $("header");
        MainFrame.footer = $("footer");
        MainFrame.body   = $("section#body");
        MainFrame.nav    = $("nav");

        MainFrame.setBodyHeight();

        $(window).resize(function(){
            MainFrame.setBodyHeight();
        });
    },
    setBodyHeight: function() {
        var height = $(window).height() - MainFrame.header.height() - MainFrame.footer.height();
        MainFrame.body.height(height);
        MainFrame.nav.height(height);
  }
}

$(document).ready(function(){
    MainFrame.initialize();
});
