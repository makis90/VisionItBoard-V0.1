/**
 * 
 */

	//Region : Fonctions Graphe Collaborateurs Par Bu
		
	function getCollaborateursByBU(bu,listCollaborateurs)
	{	var returnCollaborateurs=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			if(listCollaborateurs[i].BUsinessUnit == bu){
				returnCollaborateurs.push(listCollaborateurs[i]);
			}
		}
		return returnCollaborateurs;
	}
	
	function getCollaborateurEnInterByBU(idBU,listCollaborateurs)
	{
		var bu =getAllBUs(listCollaborateurs)[parseInt(idBU)];
		var collaborateursByBU = getCollaborateursByBU(bu,listCollaborateurs);
		var CurrentDate = new Date();
	    var returnCollaborateursEnInter=[];
	    for(var i=0; i<collaborateursByBU.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByBU[i].DAte_Dispo) ;
			if(dateDispoCollaborateur < CurrentDate){
				returnCollaborateursEnInter.push(collaborateursByBU[i]);
			}
		}
	    return returnCollaborateursEnInter;
	}
	
	function  getCollaborateurEnMissionByBU(idBU,listCollaborateurs)
	{
		var bu =getAllBUs(listCollaborateurs)[parseInt(idBU)];
		var collaborateursByBU = getCollaborateursByBU(bu,listCollaborateurs);
		var CurrentDate = new Date();
	    var returnCollaborateursEnInter=[];
	    for(var i=0; i<collaborateursByBU.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByBU[i].DAte_Dispo) ;
			if(dateDispoCollaborateur > CurrentDate){
				returnCollaborateursEnInter.push(collaborateursByBU[i]);
			}
		}
	    return returnCollaborateursEnInter;
	}
	function countCollaborateursByEnInterEnMissionByBU(bu,listCollaborateurs)
	{
		var collaborateursByBU = getCollaborateursByBU(bu,listCollaborateurs);
		var CurrentDate = new Date();
		    
		var returnCollaborateursEnInterEnMission=[];
		var nbCollaborateurEnInter = 0;
		var nbCollaborateurEnMission = 0;
		for(var i=0; i<collaborateursByBU.length; i++){
			var dateDispoCollaborateur = getFormattedCollaborateurDate(collaborateursByBU[i].DAte_Dispo) ;
			if(dateDispoCollaborateur > CurrentDate){
				nbCollaborateurEnMission++;
			}
			else{
				nbCollaborateurEnInter++;
			}
		}
		returnCollaborateursEnInterEnMission.push(nbCollaborateurEnMission);
		returnCollaborateursEnInterEnMission.push(nbCollaborateurEnInter);
		//alert(nbCollaborateurEnMission + " "+ nbCollaborateurEnInter);
		return returnCollaborateursEnInterEnMission;
	}	
	
	
	function getAllBUs(listCollaborateurs)
	{	var returnBUs=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			if(!contains( returnBUs,listCollaborateurs[i].BUsinessUnit)){
				returnBUs.push(listCollaborateurs[i].BUsinessUnit);
			}
		}
		
		return returnBUs;
	}
	
	
	function setColumnChartCollaborateurParBUData(listCollaborateurs)
	{
		var returnData=[];
		for(var i=0; i<getAllBUs(listCollaborateurs).length; i++){
			var nbCollaborateurEnMissionByBU =countCollaborateursByEnInterEnMissionByBU(getAllBUs(listCollaborateurs)[i],listCollaborateurs)[0];
			var nbCollaborateurEnInterByBU =countCollaborateursByEnInterEnMissionByBU(getAllBUs(listCollaborateurs)[i],listCollaborateurs)[1];
			var bu = [getAllBUs(listCollaborateurs)[i],nbCollaborateurEnMissionByBU,nbCollaborateurEnMissionByBU,nbCollaborateurEnInterByBU,nbCollaborateurEnInterByBU] ;
			returnData.push(bu);
		}
		return returnData;
	}
	//Fin Region : Fonctions Graphe Collaborateurs Par Bu
	
	
	
	//Region : Fonctions Graphe Collaborateurs En Inter Par Pole HightChart
	function setColumnhightChartChartCollaborateurParBUData(listCollaborateurs)
	{
		var returnData=[];
		var returnArrayNbCollaborateursEnInter=[];
		var returnArrayNbCollaborateursEnMission=[];
		var BUs=getAllBUs(listCollaborateurs);
		
		for(var i=0; i<BUs.length; i++){
			var nbCollaborateurEnMissionByBU =countCollaborateursByEnInterEnMissionByBU(BUs[i],listCollaborateurs)[0];
			var nbCollaborateurEnInterByBU = countCollaborateursByEnInterEnMissionByBU(BUs[i],listCollaborateurs)[1];
			returnArrayNbCollaborateursEnMission.push(nbCollaborateurEnMissionByBU);
			returnArrayNbCollaborateursEnInter.push(nbCollaborateurEnInterByBU);
		}
		returnData.push(BUs);
		returnData.push(returnArrayNbCollaborateursEnMission);
		returnData.push(returnArrayNbCollaborateursEnInter);
		return returnData;
	}
	//Fin Region : Fonctions Graphe Collaborateurs En Inter Par Pole HightChart
