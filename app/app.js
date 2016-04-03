var app = angular.module('laravelPrueba', ['ghiscoding.validation', 'pascalprecht.translate'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
  })
  .constant('API_URL', URL_SITE + '/');


app.config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: URL_SITE + '/app/lib/angular/angular-validation-ghiscoding/locales/validation/',
    suffix: '.json'
  });

  // define translation maps you want to use on startup
  $translateProvider.preferredLanguage('es');
});
