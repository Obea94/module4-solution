(function () {
'use strict';

angular.module('data')
.controller('MenuDataController', MenuDataController);

MenuDataController.$inject = ['categories'];
function MenuDataController(categories) {
  var menuCtrl = this;
  menuCtrl.categories = categories;
}

})();
