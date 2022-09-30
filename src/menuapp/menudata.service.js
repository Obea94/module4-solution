(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function(searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result){
      var categories = result.data
      return categories;
    }).catch(function(error) {
      console.log(error);
    })
  };

  service.getItemsForCategory = function(category) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+category)
    }).then(function (result){
      var items = result.data.menu_items;
      return items;
    }).catch(function(error) {
      console.log(error);
    })
  };
}

})();
