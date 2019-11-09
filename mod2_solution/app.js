(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getToBuyItems();
  list1.buy = function(itemIndex) {
      ShoppingListCheckOffService.buy(itemIndex);
  };  
}

// LIST #2 - bought
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var tobuy = [
    {name: "Milk", quantity: "1"},
    {name: "Egg", quantity: "12"},
    {name: "Fish", quantity: "5"},
    {name: "Beef", quantity: "1"},
    {name: "Crab", quantity: "2"},
    {name: "Shrimp", quantity: "10"}];

  var alreadyBoughtItems = [];
  service.buy = function(itemIndex) {
      var item = tobuy[itemIndex];

      alreadyBoughtItems.push(item);
      tobuy.splice(itemIndex, 1);
  };

  service.getToBuyItems = function() {
      return tobuy;
  };

  service.getAlreadyBoughtItems = function() {
      return alreadyBoughtItems;
  };  

}

})();
