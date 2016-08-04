

angular.
  module('phoneList').
  component('phoneSpecs', {
    templateUrl: 'templates/specs.template.html',
    controller: ['$http','$state','$stateParams','cartService','$scope',
      function PhoneSpecsController($http,$state,$stateParams,cartService,$scope) {
        var self = this;


        var companyid = $stateParams.company;
        var phoneid = $stateParams.id;
        if(this.companyid = " "){
          this.companyid = "motorola";
            if(this.phoneid == " "){
                this.phoneid = "motorola-xoom-with-wi-fi";
          }
        }
        $scope.totalItems={id:"motorola-xoom-with-wi-fi"};
			  //subscribe items added callback
			cartService.onItemsAdded(function(items){
			    $scope.totalItems=items;
			    //console.log($scope.totalItems.id);

				 $state.go('state',{
					company: $scope.totalItems.company,
					id: $scope.totalItems.id
				},{
					notify:false
				})
        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        $http.get('phones/'+phoneid+'.json').then(function(response){
          var devices = [];
          self.phone=response.data;
          this.company = self.phone.comp;
          console.log("company id in specs"+companyid);
          console.log("id in specs"+phoneid);

          self.setImage(self.phone.images[0]);
        })
      });
    }]
  })
