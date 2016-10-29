(function() {
  'use strict';

  angular
    .module('lights')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider) {
    $routeProvider.
    when('/', {
      template: '<lights-home></lights-home>'
    }).
    when('/debug', {
      template: '<lights-debug></lights-debug>'
    }).
    otherwise('/');
  }

})();
