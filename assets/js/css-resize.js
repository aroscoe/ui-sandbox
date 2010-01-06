var MainFrame = {
    header: null,
    footer: null,
    body:   null,
    nav:    null,
    navExtraHeight: null,
    main:   null,
    mainExtraHeight: null,

    initialize: function() {
        MainFrame.header = $("header");
        MainFrame.footer = $("footer");
        MainFrame.body   = $("section#body");
        MainFrame.nav    = $("nav");
        MainFrame.navExtraHeight = MainFrame.nav.height() - MainFrame.nav.innerHeight();
        MainFrame.main   = $("section#main");
        MainFrame.mainExtraHeight = MainFrame.main.height() - MainFrame.main.innerHeight();

        MainFrame.setBodyHeight();

        $(window).resize(function(){
            MainFrame.setBodyHeight();
        });
    },
    setBodyHeight: function() {
        var height = $(window).height() - MainFrame.header.height() - MainFrame.footer.height();
        MainFrame.body.height(height);
        MainFrame.nav.height(height + MainFrame.navExtraHeight);
        MainFrame.main.height(height + MainFrame.mainExtraHeight);
  }
}

$(document).ready(function(){
    MainFrame.initialize();
});
