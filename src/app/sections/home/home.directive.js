angular.module('lights').directive('lightsHome', function () {
  return {
    // directive definition object
    restrict: 'E',
    controller: 'HomeController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {},
    templateUrl: 'app/sections/home/home.html'
  };
});
