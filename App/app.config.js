
  angular.
    module('mobileX')
    .config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {

   $urlRouterProvider.otherwise('/home/motorola/motorola-xoom-with-wi-fi');

      $stateProvider
        .state('home',{
          url:'/home/:company/:id',

          views:{
            'filters':{
              template:"<phone-filter></phone-filter>"

            },
            'specs':{
              template:"<phone-specs></phone-specs>"
            }
          }
        })
        .state('add',{
          url:"/home/add.template.html",
          template:"<phone-add></phone-add>"

        })
        .state('update',{
          url:"/home/update.template.html",
          template:"<phone-update></phone-update>"
        });



    }
  ])  ;
