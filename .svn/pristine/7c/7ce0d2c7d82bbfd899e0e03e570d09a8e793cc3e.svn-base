/**
 * 
 */
	var moisList = [{'id':1,'name':'Janvier'},
	               {'id':2,'name':'Fevrier'},
	               {'id':3,'name':'Mars'},
	               {'id':4,'name':'Avril'},
	               {'id':5,'name':'Mai'},
	               {'id':6,'name':'Juin'},
	               {'id':7,'name':'Juillet'},
	               {'id':8,'name':'Aout'},
	               {'id':9,'name':'Septembre'},
	               {'id':10,'name':'Octobre'},
	               {'id':11,'name':'Nouvembre'},
	               {'id':12,'name':'Decembre'}
	              ];
	

	//Region : Graphe Entrees/Sorties Collaborateurs

	function getEffectifDebutAnnee(listCollaborateurs)
	{
		var returnEffectifDebutAnnee=0;
		for(var i=0; i<listCollaborateurs.length; i++){
			if(getCurrentYear() < getCurrentYearCollaborateur(listCollaborateurs[i].Datsor) && getCurrentYear() > getCurrentYearCollaborateur(listCollaborateurs[i].Datent)
					|| (getCurrentYear() == getCurrentYearCollaborateur(listCollaborateurs[i].Datsor) &&	1 < getCurrentMonthCollaborateur(listCollaborateurs[i].Datsor))){// &&	1 == getCurrentMonthCollaborateur(collaborateurs[i].Datent)
				returnEffectifDebutAnnee++;
			}
		}
		return returnEffectifDebutAnnee;
	}	
	function getEntreesSortiesCollaborateurs(mois,annee,listCollaborateurs)
	{
		var returnEntreesSortiesParMoisAnnee=[];
		var nbCollaborateursEntrees = 0;
		var nbCollaborateursSorties = 0;
		for(var i=0; i<listCollaborateurs.length; i++){
		
			if(annee ==  getCurrentYearCollaborateur(listCollaborateurs[i].Datent) && mois == getCurrentMonthCollaborateur(listCollaborateurs[i].Datent))
				{
				nbCollaborateursEntrees++;
				}
			if(annee ==  getCurrentYearCollaborateur(listCollaborateurs[i].Datsor) && mois == getCurrentMonthCollaborateur(listCollaborateurs[i].Datsor))
				{
				nbCollaborateursSorties++;
				}
		
		}
		returnEntreesSortiesParMoisAnnee.push(nbCollaborateursEntrees);
		returnEntreesSortiesParMoisAnnee.push(nbCollaborateursSorties);
		return returnEntreesSortiesParMoisAnnee;
	}
	
	//alert(getEntreesSortiesCollaborateurs(1,2015));
	
	function setComboChartCollaborateursEntreesSorties(listCollaborateurs)
	{
		var returnData=[];
		var effectifTotal=getEffectifDebutAnnee(listCollaborateurs);
		var sortiesTotal;
		var entreesTotal;
		for(var i=0; i<moisList.length; i++){
			 entreesTotal = getEntreesSortiesCollaborateurs(moisList[i].id,getCurrentYear(),listCollaborateurs)[0];
			 sortiesTotal = getEntreesSortiesCollaborateurs(moisList[i].id,getCurrentYear(),listCollaborateurs)[1];
			var row = [getCurrentYear()+"/"+moisList[i].id,entreesTotal,entreesTotal,-sortiesTotal,sortiesTotal,effectifTotal,effectifTotal] ;
			returnData.push(row);
			effectifTotal += entreesTotal-sortiesTotal;
		}
		return returnData;
	}
	
	//Fin Region : Graphe Entrees/Sorties Collaborateurs
	
	
	//get Collaborateur Details
	function getCollaborateurEntreeByES(moi,listCollaborateurs)
	{
		//+1 parceque le premier row du chart c'est 0 
		var mois = parseInt(moi)+1;
		var returnCollaborateursEntree=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			
			if(getCurrentYear() ==  getCurrentYearCollaborateur(listCollaborateurs[i].Datent) && mois == getCurrentMonthCollaborateur(listCollaborateurs[i].Datent))
				{
				returnCollaborateursEntree.push(listCollaborateurs[i]);
				}
		}
		return returnCollaborateursEntree;
	}
	
	function getCollaborateurSortieByES(moi,listCollaborateurs)
	{ 	//+1 parceque le premier row du chart c'est 0 
		var mois = parseInt(moi)+1;
		var returnCollaborateursSortie=[];
		for(var i=0; i<listCollaborateurs.length; i++){
			
			if(getCurrentYear() ==  getCurrentYearCollaborateur(listCollaborateurs[i].Datsor) && mois == getCurrentMonthCollaborateur(listCollaborateurs[i].Datsor))
				{
				returnCollaborateursSortie.push(listCollaborateurs[i]);
				}
		}
		return returnCollaborateursSortie;
	}
	
	
	
	//Region : Graphe Entrees / Sorties Highchart
	function setComboHighChartCollaborateursEntreesSorties(listCollaborateurs)
	{
		var returnData=[];
		var effectifTotal=[];
		var effectif = getEffectifDebutAnnee(listCollaborateurs);
		var entree=0;
		var sortie=0;
		var sortiesTotal=[];
		var entreesTotal=[];
		var mois=[];
		for(var i=0; i<moisList.length; i++){
			entree=getEntreesSortiesCollaborateurs(moisList[i].id,getCurrentYear(),listCollaborateurs)[0];
			 entreesTotal.push(entree);
			sortie=-getEntreesSortiesCollaborateurs(moisList[i].id,getCurrentYear(),listCollaborateurs)[1]
			 sortiesTotal.push(sortie);
			 mois.push(getCurrentYear()+"/"+moisList[i].id);
			 effectifTotal.push(effectif);
			 effectif += entree+sortie;
			
		}
		returnData.push(mois);
		returnData.push(entreesTotal);
		returnData.push(sortiesTotal);
		returnData.push(effectifTotal);
		return returnData;
	}
	