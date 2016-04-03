(function() {
  app.controller('participanteController', function($scope, ValidationService, $http, API_URL) {

    $scope.insert = function(participante) {
      var url = API_URL + "participante";
      var myValidation = new ValidationService();

      if(new ValidationService().checkFormValidity($scope.formParticipante)) {
        $.blockUI({
          message: '<h1>Espere un momento por favor</h1>'
        });
        $http({
          method: 'POST',
          url: url,
          data: $.param({
            nombres: participante.nombres,
            apellidos: participante.apellidos,
            email: participante.email,
            tipodocumento: participante.tipodocumento,
            numdocumento: participante.numdocumento,
            _token: participante.token
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).success(function(response) {
          //console.log(response);

          if (response.estado == 'OK') {
            $.unblockUI();
          }

          //location.reload();
        }).error(function(response) {
          console.log(response);
          alert('This is embarassing. An error has occured. Please check the log for details');
          $.unblockUI();
        });
      }

    }
  });
})();
