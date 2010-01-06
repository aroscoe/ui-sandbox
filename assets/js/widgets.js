
/*
$('body').appendWidget("dialog-box", {title: "Hi", description: "This is a dialog box"}, function(self) {
  $(self).find('.field-buttons button').click(function() {
    alert("Ok clicked!");
  });
  $(self).find('.field-buttons a').click(function() {
    alert("Cancel clicked!");
  });
});
*/

$.fn.extend({
  loadWidget: function(widgetName, values, onLoad) {
    var self = this;

    self.load(widgetName + ".html #widget-container > *", function() {
      self.replaceWidgetValues(values);
      onLoad(self);
    });

    return self;
  },

  appendWidget: function(widgetName, values, onLoad) {
    var self = this;

    var containerDiv = $('<div></div>');
    containerDiv.load(widgetName + ".html #widget-container > *", function() {
      containerDiv.replaceWidgetValues(values);
      onLoad(containerDiv);
    });

    return self;
  },

  replaceWidgetValues: function(values) {
    for(var name in values) {
      var value = values[name];

      this.findWidgetField(name).html(value);
    }
  },

  findWidgetField: function(name) {
    return this.find('.field-' + name);
  }
});
