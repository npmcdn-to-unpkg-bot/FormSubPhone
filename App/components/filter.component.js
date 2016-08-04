angular.
  module('phoneList').
  component('phoneFilter',{
    templateUrl:'templates/filters.template.html',
    controller:['$http','$stateParams','cartService','$scope',
      function phoneFilterController($http,$stateParams,cartService,$scope){
        var self=this;


          $http.get('phones/phones.json').then(function(response){
            self.phones = response.data;

            this.orderProp = 'age';
            this.orderComp='id';
            var phoneid = $stateParams.id;
            console.log("running again");
            if(phoneid == " "){
              phoneid = self.phones[0].comp;
            }
            console.log(phoneid);
          });

          $scope.cartItems = 0;
          $scope.addTOCart = cartService.addItemToCart;
          cartService.onItemsAdded(function(items){
            $scope.cartItems = items;
          });

        self.selected = function(company){
          self.devices = [];
          $http.get('phones/phones.json').then(function(response){
            self.phones=response.data;
              console.log("hey started");



            for(var i=0;i<self.phones.length;i++){
              if(self.phones[i].comp == company){
                  self.devices.push(self.phones[i]);

              }
            }

            var companyid = $stateParams.company;
            if(companyid = " "){
              companyid = "motorola";
            }

            var phoneid = $stateParams.id;
            console.log("first device"+self.devices[0].name)
            this.phoneid = self.devices[0].id;
            this.companyid = self.devices[0].comp;
            console.log("id in filter"+this.phoneid);
            console.log("company id is"+this.companyid);
            console.log(self.devices);

          });
        };
      }]
  });
