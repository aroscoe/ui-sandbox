
/*
$('body').appendTemplate("dialog-box", {title: "Hi", description: "This is a dialog box"}, function(self) {
  $(self).find('.field-buttons button').click(function() {
    alert("Ok clicked!");
  });
  $(self).find('.field-buttons a').click(function() {
    alert("Cancel clicked!");
  });
});
*/

$.fn.extend({
  loadTemplate: function(templateName, values, onLoad) {
    var self = this;

    self.load(templateName + ".html #template-container > *", function() {
      self.replaceTemplateValues(values);
      onLoad(self);
    });

    return self;
  },

  appendTemplate: function(templateName, values, onLoad) {
    var self = this;

    var containerDiv = $('<div></div>');
    containerDiv.load(templateName + ".html #template-container > *", function() {
      containerDiv.replaceTemplateValues(values);
      onLoad(containerDiv);
    });

    return self;
  },

  replaceTemplateValues: function(values) {
    for(var name in values) {
      var value = values[name];

      this.findTemplateField(name).html(value);
    }
  },

  findTemplateField: function(name) {
    return this.find('.field-' + name);
  }
});
