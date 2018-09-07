app.controller("api", function ($scope, $http) {
    $http.get('http://localhost:56299/api/Orders').then(function (response) {
        $scope.orders = response.data;
    });
});