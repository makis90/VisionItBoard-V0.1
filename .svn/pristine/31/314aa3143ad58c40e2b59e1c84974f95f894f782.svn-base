/**
 * 
 */

	
	//Region : Fonctions Graphe Collaborateurs Par Pole
	function getCollaborateursByPole(pole,listCollaborateurs)
	{	var returnCollaborateurs=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			if(listCollaborateurs[i].POLE == pole){
				returnCollaborateurs.push(listCollaborateurs[i]);
			}
		}
		
		return returnCollaborateurs;
	}
	
	function getCollaborateurEnInterByPole(idPole,listCollaborateurs)
	{
		var pole =getAllPoles(listCollaborateurs)[parseInt(idPole)];
		var collaborateursByPole = getCollaborateursByPole(pole,listCollaborateurs);
		var CurrentDate = new Date();
	    var returnCollaborateursEnInter=[];
	    for(var i=0; i<collaborateursByPole.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByPole[i].DAte_Dispo) ;
			if(dateDispoCollaborateur < CurrentDate){
				returnCollaborateursEnInter.push(collaborateursByPole[i]);
			}
		}
	    return returnCollaborateursEnInter;
	}
	
	function  getCollaborateurEnMissionByPole(idPole,listCollaborateurs)
	{
		var pole =getAllPoles(listCollaborateurs)[parseInt(idPole)];
		var collaborateursByPole = getCollaborateursByPole(pole,listCollaborateurs);
		var CurrentDate = new Date();
	    var returnCollaborateursEnMission=[];
	    for(var i=0; i<collaborateursByPole.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByPole[i].DAte_Dispo) ;
			if(dateDispoCollaborateur > CurrentDate){
				returnCollaborateursEnMission.push(collaborateursByPole[i]);
			}
		}
	    return returnCollaborateursEnMission;
	}
	
	function countCollaborateursByEnInterEnMissionByPole(pole,listCollaborateurs)
	{
		var collaborateursByPole = getCollaborateursByPole(pole,listCollaborateurs);
		var CurrentDate = new Date();
		    
		var returnCollaborateursEnInterEnMission=[];
		var nbCollaborateurEnInter = 0;
		var nbCollaborateurEnMission = 0;
		for(var i=0; i<collaborateursByPole.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByPole[i].DAte_Dispo) ;
			if(dateDispoCollaborateur > CurrentDate){
				nbCollaborateurEnMission++;
			}
			else{
				nbCollaborateurEnInter++;
			}
		}
		returnCollaborateursEnInterEnMission.push(nbCollaborateurEnMission);
		returnCollaborateursEnInterEnMission.push(nbCollaborateurEnInter);
		return returnCollaborateursEnInterEnMission;
	}	
	
	function getAllPoles(listCollaborateurs)
	{	var returnPoles=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			if(!contains( returnPoles,listCollaborateurs[i].POLE)){//returnPoles.contains(collaborateurs[i].POLE)){
				returnPoles.push(listCollaborateurs[i].POLE);
			}
		}
		
		return returnPoles;
	}
	
	
	function setColumnChartCollaborateurParPoleData(listCollaborateurs)
	{
		var returnData=[];
		for(var i=0; i<getAllPoles(listCollaborateurs).length; i++){
			var nbCollaborateurEnMissionByPole =countCollaborateursByEnInterEnMissionByPole(getAllPoles(listCollaborateurs)[i],listCollaborateurs)[0];
			var nbCollaborateurEnInterByPole =countCollaborateursByEnInterEnMissionByPole(getAllPoles(listCollaborateurs)[i],listCollaborateurs)[1];
			var pole = [getAllPoles(listCollaborateurs)[i],nbCollaborateurEnMissionByPole,nbCollaborateurEnMissionByPole,nbCollaborateurEnInterByPole,nbCollaborateurEnInterByPole] ;
			returnData.push(pole);
		}
		return returnData;
	}
	//Fin Region : Fonctions Graphe Collaborateurs Par Pole
	
	//Region : Fonctions Graphe Collaborateurs En Inter Par Pole
	
	function setColumnChartCollaborateurEnInterParPoleData(listCollaborateurs)
	{
		var returnData=[];
		for(var i=0; i<getAllPoles(listCollaborateurs).length; i++){
			var nbCollaborateurEnInterByPole =countCollaborateursByEnInterEnMissionByPole(getAllPoles(listCollaborateurs)[i],listCollaborateurs)[1];
			var pole = [getAllPoles(listCollaborateurs)[i],nbCollaborateurEnInterByPole,nbCollaborateurEnInterByPole] ;
			returnData.push(pole);
		}
		return returnData;

	}
	
	//Fin Region : Fonctions Graphe Collaborateurs En Inter Par Pole
	
	
	//Region : Fonctions Graphe Collaborateurs En Inter Par Pole HightChart
	function setColumnhightChartChartCollaborateurParPoleData(listCollaborateurs)
	{
		var returnData=[];
		var returnArrayNbCollaborateursEnInter=[];
		var returnArrayNbCollaborateursEnMission=[];
		var poles=getAllPoles(listCollaborateurs);
		
		for(var i=0; i<poles.length; i++){
			var nbCollaborateurEnMissionByPole =countCollaborateursByEnInterEnMissionByPole(poles[i],listCollaborateurs)[0];
			var nbCollaborateurEnInterByPole = countCollaborateursByEnInterEnMissionByPole(poles[i],listCollaborateurs)[1];
			returnArrayNbCollaborateursEnMission.push(nbCollaborateurEnMissionByPole);
			returnArrayNbCollaborateursEnInter.push(nbCollaborateurEnInterByPole);
		}
		returnData.push(poles);
		returnData.push(returnArrayNbCollaborateursEnMission);
		returnData.push(returnArrayNbCollaborateursEnInter);
		return returnData;
	}
	//Fin Region : Fonctions Graphe Collaborateurs En Inter Par Pole HightChart
	