AccMgt.controller('summeryPage',function($rootScope,$scope,$http,$location){
    var userData =  JSON.parse(sessionStorage.getItem('userData'));
    $scope.AccDetails = [];

    if(userData && (Object.keys(userData).length > 0)){
    $http({
            url:"http://localhost:3000/account/getUserAccounts",
            data: {userID:userData._id},  //{email: data.email, pass: data.pass},//$scope.userData,
            method:"POST"
        }).success(function(res,textStatus){
            console.log("Success ");
            $scope.AccDetails  = res;
        }).error(
            function(){ console.log("Error");}
        )//Error

        $scope.showAccountDet =function(accId){
            $location.path('/allEntries/'+accId)
            if(!$scope.$$phase) $scope.$apply();
        }

    }else{
        $location.path('/')
        if(!$scope.$$phase) $scope.$apply();
    }


});
