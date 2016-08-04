angular.
  module('phoneList').
  component('phoneAdd',{
    templateUrl:'templates/add.template.html',
    controller:['$http',
      function phoneAddController($http){
        console.log("hey mama..");
      }]
  });
