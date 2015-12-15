angular.module('auth', ['ngCordovaOauth'])

.controller('AuthCtrl', function($scope, $http, $location, $cordovaOauth) {
    
    window.cordovaOauth = $cordovaOauth;
    window.http = $http;

    // $scope.data = {};
 
    $scope.login = function() {
      // console.log("username: " + $scope.data.username + " and password: " + $scope.data.password);
      
      // Opens new in app window
      // var ref = window.open('http://bestrida.herokuapp.com/api/register', '_blank', 'location=yes');
      // ref.addEventListener('exit', function() {
      //   console.log('In app browser closed');
      // });

      $cordovaOauth.strava(clientID, clientSecret, ['view_private']).then(function(response) {
        //if response is truthy, redirect to challenge feed
        if (response) {
          //redirect to challenge feed
          console.log("login success");
        } else {
          //keep user in login
          console.log("login fail");
        }
      }, function(error) {
        console.log(error);
      });   

    }

})


//Strava Oauth
// $cordovaOauth.strava(string clientId, string clientSecret, array appScope, object options);