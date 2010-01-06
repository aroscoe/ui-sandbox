
$.fn.extend({
  widgetCache: {},

  widgetLoad: function(widgetName, fields, onLoad) {
    var self = this;

    self.load(widgetName + ".html #widget-container > *", function() {
      self.widgetPopulate(fields);
      onLoad(self);
    });

    return self;
  },

  widgetAppend: function(widgetName, fields, onLoad) {
    var self = this;

    var containerDiv = $('<div></div>');
    containerDiv.load(widgetName + ".html #widget-container > *", function() {
      containerDiv.widgetPopulate(fields);
      onLoad(containerDiv);
    });

    return self;
  },

  widgetPopulate: function(fields) {
    for(var name in fields) {
      this.widgetField(name).html(fields[name]);
    }
  },

  widgetField: function(name) {
    return this.find('.field-' + name);
  }
});

