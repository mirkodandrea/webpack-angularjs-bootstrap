import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-animate';
import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';

/*
import modal from 'angular-ui-bootstrap/src/modal';
*/

// Import your app stylesheets
import './style.scss';

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  //modal,
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);