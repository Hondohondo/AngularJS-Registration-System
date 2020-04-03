
myApp.controller('RegistrationController', ['$scope', function ($scope) {
    // $scope.message = "Welcome to my App";

  $scope.login = function () {
      $scope.message = "Welcome" + $scope.user.email;
  };

  $scope.register = function () {
      $scope.message = "Welcome" + $scope.user.firstname;
  };

}]);
















// myApp.controller('appController', ['$scope', function ($scope) {
//   $scope.message = "Welcome to my App";
// }])