angular.module('lights').directive('lightsDebug', function () {
  return {
    // directive definition object
    restrict: 'E',
    controller: 'DebugController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {},
    templateUrl: 'app/sections/debug/debug.html'
  };
});
