(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ms = this;

    ms.items = ShoppingListCheckOffService.getToBuyItems();
    console.log(ms.items);

    ms.buy = function(index) {
      ShoppingListCheckOffService.buy(index);
    };
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var ms = this;

    ms.items = ShoppingListCheckOffService.getAlreadyBuyItems();

  };

   function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyArray = [{
      name: "cookies",
      quantity: 11
    },{
      name: "chips",
      quantity: 5
    },{
      name: "cola",
      quantity: 6
    },{
      name: "apple",
      quantity: 2
    },{
      name: "meat",
      quantity: 15
    }];

    service.alreadyBuyArray = [];

    service.getToBuyItems = function () {
      return service.toBuyArray;
    };

    service.getAlreadyBuyItems = function () {
      return service.alreadyBuyArray;
    };

    service.buy = function (index) {
      var item = service.toBuyArray.splice(index, 1);
      service.alreadyBuyArray.push(item[0]);
    };
  };
})();
