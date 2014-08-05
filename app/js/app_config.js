(function() {
  var app, k, v;

  app = angular.module("ionicstarter", ["ionic"]);

  for (k in GLOBALS) {
    v = GLOBALS[k];
    app.constant(k, v);
  }

  if (GLOBALS.WEINRE_ADDRESS && (ionic.Platform.isAndroid() || ionic.Platform.isIOS())) {
    addElement(document, "script", {
      id: "weinre-js",
      src: "http://" + GLOBALS.WEINRE_ADDRESS + "/target/target-script-min.js#anonymous"
    });
  }

}).call(this);
