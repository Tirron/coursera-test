(function(){
'use strict';
angular.module('lunchChecker',[])
.controller('lunchCheckerController', lunchCheckerController);
lunchCheckerController.$inject = ['$scope'];
function lunchCheckerController($scope){

 $scope.message = " ";
 $scope.messageColor =" ";
 $scope.lunchMessage = function (){
   var lunch=$scope.lunch;
   lunch = fixLunch(lunch);

   if (lunch.length==0) {
     $scope.message="Please enter data first";
     $scope.messageColor="red";

   } else {
     var meals = chenkNumOfMeals(lunch);
     if (meals<4) {
          $scope.message="Enjoy!";
          $scope.messageColor="green";
     } else {
         $scope.message="Too much!";
         $scope.messageColor="red";
     }

   }

 };
 function chenkNumOfMeals(string){
    var meals = string.split(",");
    meals = meals.filter(realMeal);
    var numberOfMeals = meals.length;
    return numberOfMeals;
 };

 function fixLunch(string){
   string = string.trim();
   if (string.startsWith(",")) {
     string = string.substring(1,string.length);
   }
   if (string.endsWith(",")) {
     string = string.substring(0,(string.length-1));
   }
   return string;
 }

  function realMeal(string){
   string = string.trim();
   return string.length>0;
 }



}

})();
