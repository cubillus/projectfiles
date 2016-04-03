(function() {

  app.controller('userController', function($scope, $http, API_URL) {

    $scope.validate = function(user) {
      var url = API_URL + "user";
      //console.log($scope);
      if(user){
      $http({
        method: 'POST',
        url: url,
        data: $.param({
          usuario: user.username,
          password: user.pass,
          _token: user.token
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function(response) {
        console.log(response);

        //location.reload();
      }).error(function(response) {
        console.log(response);
        alert('This is embarassing. An error has occured. Please check the log for details');
      });
    }
    }

  });
})();
