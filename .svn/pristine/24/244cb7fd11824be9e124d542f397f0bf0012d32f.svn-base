'use strict';

angular.module('visionitboardApp').controller('CollaborateurController', function ($scope,$location,$stateParams,Collaborateur) {//, resolvedCollaborateur,  Collaborateur

	$scope.collaborateursEnInter =[];
	$scope.collaborateursEnMission =[];
	
	$scope.collaborateurs = [];
	$scope.collaborateursEnMission=[];
	$scope.collaborateursEnInter=[];
    $scope.loadAll = function() {
        Collaborateur.query(function(result) {
           $scope.collaborateurs = result;
           
       	// Region : Set List of collaborateurs in the collaborateur controller
   		//col = 2 : En InterContrat --  1 : En Mission
   		
        if($stateParams.row !== undefined && $stateParams.col !== undefined && $stateParams.type !== undefined)
   		{
   		$scope.type = $stateParams.type;
   		$scope.row = $stateParams.row;
   		$scope.col = $stateParams.col;
   		if($scope.type == "p")
   			{
   		if(parseInt($scope.col) == 2)
   			$scope.collaborateursEnInter = getCollaborateurEnInterByPole($scope.row,result);
   			else
   			$scope.collaborateursEnMission = getCollaborateurEnMissionByPole($scope.row,result);
   			}
   		else if($scope.type == "b")
   			{
   			if(parseInt($scope.col) == 2)
   				$scope.collaborateursEnInter = getCollaborateurEnInterByBU($scope.row,result);
   			else
   				$scope.collaborateursEnMission = getCollaborateurEnMissionByBU($scope.row,result);
   			}
   		else if($scope.type == "ip")
   			{
   			if(parseInt($scope.col) == 2)
   			{
   				$scope.collaborateursEnInter = getCollaborateurEnInterByPole($scope.row,result);
   			}
   			}
   		else if($scope.type == "es")
   			{
   			if(parseInt($scope.col) == 2)
   				{
   				$scope.collaborateursEnInter = getCollaborateurEntreeByES($scope.row,result);
   				}
   			else
   				{
   				$scope.collaborateursEnMission = getCollaborateurSortieByES($scope.row,result);
   				}
   			}
   		}
   		else
   		{
   			$scope.collaborateursEnMission =getCollaborateursEnMissionEnInter(result)[0];
			$scope.collaborateursEnInter = getCollaborateursEnMissionEnInter(result)[1];
   		}
   		if($scope.collaborateursEnMission.length==0 && $scope.collaborateursEnInter.length==0)
   			{
   			$scope.collaborateursEnMission =getCollaborateursEnMissionEnInter(result)[0];
			$scope.collaborateursEnInter = getCollaborateursEnMissionEnInter(result)[1];
   			}
   		
   		
   		// Fin Region : Set List of collaborateurs in the collaborateur controller
   		
           
        });
    };
    $scope.loadAll();
	
	
		//recuperer tous les collaborateur en mission et en inter dans un tableau de 2
		
		function getCollaborateursEnMissionEnInter(listCollaborateurs)
		{
			var returnCollaborateurs=[];
			var returnCollaborateursEnMission =[];
			var returnCollaborateursEnInter =[];
			var CurrentDate = new Date();
			for(var i=0; i<listCollaborateurs.length; i++){
				var dateDispoCollaborateur = getFormattedCollaborateurDate(listCollaborateurs[i].date_dispo) ;
				if(dateDispoCollaborateur > CurrentDate)
					returnCollaborateursEnMission.push(listCollaborateurs[i]);
				else
					returnCollaborateursEnInter.push(listCollaborateurs[i]);
			}
			returnCollaborateurs.push(returnCollaborateursEnMission.sort(sortFunction));
			returnCollaborateurs.push(returnCollaborateursEnInter.sort(sortFunction));
			return returnCollaborateurs;
		}
		function sortFunction(a,b){  
		    var dateA = new Date(a.date_dispo);
		    var dateB = new Date(b.date_dispo);
		    return dateA > dateB ? 1 : -1;  
		};
		
		// Region : Set CSS class of collaborateur in the collaborateur page
		$scope.getCollaborateurCssClass = function(IDMOB_RESS)
		{
			var returnCollaborateur;
			var returnCssCollaborateur;
			for(var i=0; i<$scope.collaborateurs.length; i++){
				if($scope.collaborateurs[i].idmobRess == IDMOB_RESS)returnCollaborateur =$scope.collaborateurs[i];
			}
				var CurrentDate = new Date();
				var dateDispoCollaborateur = getFormattedCollaborateurDate(returnCollaborateur.date_dispo) ;
				if(dateDispoCollaborateur > CurrentDate)
					returnCssCollaborateur = "enmission";
				else
					returnCssCollaborateur = "inter";
		return returnCssCollaborateur;
		}
		
		// Fin Region : Set CSS class of collaborateur in the collaborateur page 
        /*$scope.showDetailscollaborateur = function (id) {
        	$scope.collaborateur= Collaborateur.get({IDMOB_RESS: id});
        	$('#showCollaborateurModal').modal('show');
        	//var url = '/collaborateur/' + id;
	        //    $location.path(url);

        };*/

        
    
    });


