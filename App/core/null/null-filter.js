
'use strict';

angular.
  module('null').
  filter('checknull', function() {
    return function(input) {
      return (input==='') ? 'Not Applicable' : input;
    };
  });
