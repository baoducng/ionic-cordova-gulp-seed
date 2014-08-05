(function() {
  this.addElement = function(container, tagName, attrs) {
    var fjs, k, tag, v;
    if (attrs == null) {
      attrs = {};
    }
    if (attrs.id && container.getElementById(attrs.id)) {
      return container.getElementById(attrs.id);
    }
    fjs = container.getElementsByTagName(tagName)[0];
    tag = container.createElement(tagName);
    for (k in attrs) {
      v = attrs[k];
      tag[k] = v;
    }
    fjs.parentNode.insertBefore(tag, fjs);
    return tag;
  };

  this.log = function() {
    return console.log(arguments);
  };

  Storage.prototype.setObject = function(key, value) {
    return this.setItem(key, JSON.stringify(value));
  };

  Storage.prototype.getObject = function(key) {
    var value;
    if (!(value = this.getItem(key))) {
      return;
    }
    return JSON.parse(value);
  };

  if (window.GLOBALS == null) {
    window.GLOBALS = {};
  }

  window._RIPPLE = false;

  window._CORDOVA = !location.hostname;

  ionic.Platform.ready(function() {
    if (GLOBALS.ENV !== "test") {
      console.log('ionic.Platform is ready!');
    }
    window._RIPPLE = window.tinyHippos !== void 0;
    return window._CORDOVA = window.cordova !== void 0;
  });

}).call(this);
