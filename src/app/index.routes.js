
import asyncTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/async-page-example/async.html';
import homeTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/home/home.html';

import loginFormInTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/login/login.html';

import converterTemplate from '!!file-loader?name=templates/[name].[ext]!./pages/converter/converter.html';

function routeConfig($urlRouterProvider, $stateProvider, resolverProvider) {
  'ngInject';


    $stateProvider
        .state('async', {
          url: '/async',
          templateUrl: asyncTemplate,
          controller: 'asyncController',
          resolve: {
            asyncPreloading: resolverProvider.asyncPagePrealoading
          }
        })
        .state({
            name: 'home',
            url: '/home',
            templateUrl: homeTemplate
          })
          .state({
            name: 'converter',
            url: '/converter',
            templateUrl: converterTemplate
          })
          .state({
            name: 'login',
            url: '/login',
            templateUrl: loginFormInTemplate
          });
        
  $urlRouterProvider.otherwise('/home');

}

export default angular
  .module('index.routes', [])
    .config(routeConfig);