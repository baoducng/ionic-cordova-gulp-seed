(function() {
  angular.module("ionicstarter").controller("PetDetailCtrl", function($scope, $stateParams, PetService) {
    return $scope.pet = PetService.get($stateParams.petId);
  });

}).call(this);
