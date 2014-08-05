(function() {
  angular.module("ionicstarter").controller("PetIndexCtrl", function($scope, PetService) {
    return $scope.pets = PetService.all();
  });

}).call(this);
