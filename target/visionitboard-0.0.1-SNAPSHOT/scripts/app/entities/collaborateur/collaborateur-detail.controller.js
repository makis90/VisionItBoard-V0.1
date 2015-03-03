
angular.module('visionitboardApp').controller('DetailsCollaborateurController', function ($scope,$location,$stateParams, Collaborateur) {//,resolvedCollaborateur, Collaborateur
	
	$scope.collaborateur = [];
	$scope.pourcentages =[20,25,30,35,40,45,50,55,60,65];	
	
    $scope.load = function (id) {
    	  Collaborateur.get({idmobRess: id}, function(result) {
          $scope.collaborateur = result;
        
          if($stateParams.id !== undefined)
		{
		$scope.id = parseInt($stateParams.id);
	//$scope.collaborateur = getCollaborateurById($scope.id);
		var CurrentDate = new Date();
		var dateDispoCollaborateur = getFormattedCollaborateurDate($scope.collaborateur.date_dispo) ;
		if(dateDispoCollaborateur > CurrentDate)
			$scope.cssInterEnMission = "enmission-details";
		else
			$scope.cssInterEnMission = "inter-details";
	
		$scope.tableauPourcentageMarges=getTableauPourcentageMarges($scope.collaborateur);
	
		}
	
      });
    };
	$scope.load($stateParams.id);
	
	//calcul tableau marges
	function getTableauPourcentageMarges(collabo){
		var tableauPourcentageMarges=[];
	for(var i=0; i<$scope.pourcentages.length;i++)
	   {
		tableauPourcentageMarges.push([$scope.pourcentages[i],(collabo.tjm / (1 - ($scope.pourcentages[i]/100))).toPrecision(4)]);
	   }
	return tableauPourcentageMarges;
	}
	
	
	function getCollaborateurById(IDMOB_RESS)
	{
	var returnCollaborateur;
	var returnCssCollaborateur;
	for(var i=0; i<$scope.collaborateurs.length; i++){
		if($scope.collaborateurs[i].idmobRess == IDMOB_RESS)returnCollaborateur = $scope.collaborateurs[i];
	}
	
	return returnCollaborateur;
	}
});