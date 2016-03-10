// app.controller('MealController', function ($scope, meal, ratings, chef, singlemeal, CartFactory,AuthService,localStorageFactory) {
  app.controller('MealController', function ($scope, meal, ratings, chef, singlemeal, AuthService) {

  $scope.meal = meal;

  $scope.ratings = ratings;
  
  $scope.chef = chef;

  $scope.avgRating = singleMeal.getAvgRating(ratings);
  
  $scope.addMeal = function (meal){
    CartFactory.addmealToCart(meal);
  }

    $scope.isLoggedIn = function () {
        return AuthService.isAuthenticated();
    };

    // if we have not already checked for locally stored cart
    // and if user is not authenticated, copy locally stored cart to cached cart

    // function copyLocalCart() {
    //     if(!localStorageFactory.alreadyFetchedLocalCart && !$scope.isLoggedIn() && localStorageFactory.getLocalCart().length > 0) {
    //         CartFactory.copyCartFromLocalStorage(localStorageFactory.getLocalCart());
    //     }
    // }

    // copyLocalCart();

});