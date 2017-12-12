
loginApp.controller('loginCtrl',['$scope','$http',($scope,$http) => {

    $scope.login= () =>
    {
        $http.post('/api/login', {email:$scope.email , password:$scope.password}).then(r => {
            $scope.user = r.data;
console.log($scope.user)
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
	 $scope.change= () =>
    {
        $http.post('/change', {newPassword:$scope.newPassword}).then(r => {
            $scope.user = r.data;
console.log($scope.user)
        }, e => {
            $scope.errorMessage = e.data.message;
        });
    }
	
}]);
