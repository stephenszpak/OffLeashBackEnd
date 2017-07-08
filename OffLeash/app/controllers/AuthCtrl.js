app.controller("AuthCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    // materialize modal init
    $('.modal').modal();

    $scope.email = "";
    $scope.password = "";

    $scope.registerEmail = "";
    $scope.registerPassword = "";
    $scope.registerConfirmPassword = "";
    $scope.registerDogName = "";
    $scope.registerFirstName = "";

    $scope.login = function () {
        $http({
            method: 'POST',
            url: "/Token",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { grant_type: "password", email: $scope.email, password: $scope.password }
        })
            .then(function (result) {
                console.log("result=", result);

                sessionStorage.setItem('token', result.data.access_token);
                $http.defaults.headers.common['Authorization'] = `bearer ${result.data.access_token}`;

                //$location.path("/home");
            });
    }

    $scope.signup = function () {
        $http({
            method: 'POST',
            url: "/api/account/register",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (obj) {
                var str = [];
                for (var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: { DogName: $scope.registerDogName, FirstName: $scope.registerFirstName, Email: $scope.registerEmail, Password: $scope.registerPassword, ConfirmPassword: $scope.registerConfirmPassword }
        })
            .then(function (result) {
                console.log("result=", result);
                //$location.path("/home");
            });
    }
   
}]);