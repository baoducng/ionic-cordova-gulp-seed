(function() {
  angular.module("ionicstarter").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("tab", {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    }).state("tab.pet-index", {
      url: "/pets",
      views: {
        "pets-tab": {
          templateUrl: "templates/pet-index.html",
          controller: "PetIndexCtrl"
        }
      }
    }).state("tab.pet-detail", {
      url: "/pet/:petId",
      views: {
        "pets-tab": {
          templateUrl: "templates/pet-detail.html",
          controller: "PetDetailCtrl"
        }
      }
    }).state("tab.adopt", {
      url: "/adopt",
      views: {
        "adopt-tab": {
          templateUrl: "templates/adopt.html"
        }
      }
    }).state("tab.about", {
      url: "/about",
      views: {
        "about-tab": {
          templateUrl: "templates/about.html"
        }
      }
    });
    return $urlRouterProvider.otherwise("/tab/pets");
  });

}).call(this);
