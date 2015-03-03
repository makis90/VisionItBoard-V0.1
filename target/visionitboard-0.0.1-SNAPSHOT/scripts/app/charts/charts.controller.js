'use strict';

angular.module('visionitboardApp').controller('ChartsController', function ($scope,$location,$rootElement, Collaborateur) {
	
	
	Highcharts.setOptions({
        colors: ['#FF0000', '#50B432','#e0440e']
    });
	
	$scope.collaborateurs = [];
	$scope.listPoles=[];$scope.dataListEnMission=[];$scope.dataListEnInter=[];
	$scope.listBUs=[];$scope.dataListEnMissionByBU=[];$scope.dataListEnInterByBU=[];
	$scope.listMois=[];$scope.listEntrees=[];$scope.listSorties=[];$scope.listEffectifs=[];
	
	
    $scope.loadAll = function() {
        Collaborateur.query(function(result) {
       //    $scope.collaborateurs = result;
	
           $scope.listPoles = setColumnhightChartChartCollaborateurParPoleData(result)[0];
           $scope.dataListEnMission = setColumnhightChartChartCollaborateurParPoleData(result)[1];
           $scope.dataListEnInter = setColumnhightChartChartCollaborateurParPoleData(result)[2];
	
           //Graphe BU 
           $scope.listBUs=setColumnhightChartChartCollaborateurParBUData(result)[0];
           $scope.dataListEnMissionByBU=setColumnhightChartChartCollaborateurParBUData(result)[1];
           $scope.dataListEnInterByBU=setColumnhightChartChartCollaborateurParBUData(result)[2];
	
	
           //Entrees/Sorties
           $scope.listMois = setComboHighChartCollaborateursEntreesSorties(result)[0];
           $scope.listEntrees = setComboHighChartCollaborateursEntreesSorties(result)[1];
           $scope.listSorties = setComboHighChartCollaborateursEntreesSorties(result)[2];
           $scope.listEffectifs = setComboHighChartCollaborateursEntreesSorties(result)[3];

    
	//Graphe Collaborateurs par Pole
	
	    $('#columnchart_pole_div').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Collaborateurs Par Pole',
				 style: { color: '#e0440e' }
	        },
	        subtitle: {
	            //text: '...'
	        },
	        xAxis: {
	            categories: $scope.listPoles
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Collaborateurs'
	            },
	            stackLabels: {
	                enabled: true,
	                style: {
	                    fontWeight: 'bold',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	                }
	            }
	        },
	        legend: {
	            align: 'right',
	            x: -30,
	            verticalAlign: 'top',
	            y: 25,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	            borderColor: '#CCC',
	            borderWidth: 1,
	            shadow: false
	        },
	        tooltip: {
	            formatter: function () {
	                return '<b>' + this.x + '</b><br/>' +
	                    this.series.name + ': ' + this.y + '<br/>' +
	                    'Total: ' + this.point.stackTotal;
	            }
	        },
	        plotOptions: {
	        	series: {
	                cursor: 'pointer',
	                point: {
	                    events: {
	                        click: function (e) {
	                        	var col = this.series.name == "En Inter" ? 2 : 1;
	                        	var row = this.x;
	                            //alert('Category: ' + this.category + ', value: ' + this.y + "  "+this.x + " "+row);
	                        	$scope.$apply(function () {
	                        		var url = '/collaborateur/p/'+row+"/"+col;
	                                $location.path(url);
	                        	});
	                        	
	                        }
	                    }
	                }
	            },
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
	                    style: {
	                        textShadow: '0 0 3px black' , fontSize: '15px', fontFamily: 'serif'
	                        	}
	                }
	            }
	        },
	        series: [{
	        	name: 'En Inter',
	            data: $scope.dataListEnInter,
	            stack: 0
	        }, {
	        	name: 'En Mission',
	            data: $scope.dataListEnMission,
	            stack: 0
	        }]
	    });
	
	
	
	//Graphe Collaborateurs par BU

	    $('#columnchart_bu_div').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Collaborateurs Par BU',
				 style: { color: '#e0440e' }
	        },
	        subtitle: {
	            //text: '...'
	        },
	        xAxis: {
	            categories: $scope.listBUs
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Collaborateurs'
	            },
	            stackLabels: {
	                enabled: true,
	                style: {
	                    fontWeight: 'bold',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	                }
	            }
	        },
	        legend: {
	            align: 'right',
	            x: -30,
	            verticalAlign: 'top',
	            y: 25,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	            borderColor: '#CCC',
	            borderWidth: 1,
	            shadow: false
	        },
	        tooltip: {
	            formatter: function () {
	                return '<b>' + this.x + '</b><br/>' +
	                    this.series.name + ': ' + this.y + '<br/>' +
	                    'Total: ' + this.point.stackTotal;
	            }
	        },
	        plotOptions: {
	        	series: {
	                cursor: 'pointer',
	                point: {
	                    events: {
	                        click: function (e) {
	                        	var col = this.series.name == "En Inter" ? 2 : 1;
	                        	var row = this.x;
	                            //alert('Category: ' + this.category + ', value: ' + this.y + "  "+this.x + " "+row);
	                        	$scope.$apply(function () {
	                        		var url = '/collaborateur/p/'+row+"/"+col;
	                                $location.path(url);
	                        	});
	                        	
	                        }
	                    }
	                }
	            },
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
	                    style: {
	                    	textShadow: '0 0 3px black' , fontSize: '15px', fontFamily: 'serif'
	                    }
	                }
	            }
	        },
	        series: [{
	        	name: 'En Inter',
	            data: $scope.dataListEnInterByBU,
	            stack: 0
	        }, {
	        	name: 'En Mission',
	            data: $scope.dataListEnMissionByBU,
	            stack: 0
	        }]
	    });
	
	
	// Graphe Inter Par Pole
	$('#columnchart_inter_par_pole_div').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Collaborateurs En Inter-Contrat Par Pole',
				 style: { color: '#e0440e' }
	        },
	        subtitle: {
	            //text: '...'
	        },
	        xAxis: {
	            categories: $scope.listPoles
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Collaborateurs'
	            },
	            stackLabels: {
	                enabled: true,
	                style: {
	                    fontWeight: 'bold',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	                }
	            }
	        },
	        legend: {
	            align: 'right',
	            x: -30,
	            verticalAlign: 'top',
	            y: 25,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	            borderColor: '#CCC',
	            borderWidth: 1,
	            shadow: false
	        },
	        tooltip: {
	            formatter: function () {
	                return '<b>' + this.x + '</b><br/>' +
	                    this.series.name + ': ' + this.y + '<br/>' +
	                    'Total: ' + this.point.stackTotal;
	            }
	        },
	        plotOptions: {
	        	series: {
	                cursor: 'pointer',
	                point: {
	                    events: {
	                        click: function (e) {
	                        	var col = this.series.name == "En Inter" ? 2 : 1;
	                        	var row = this.x;
	                            //alert('Category: ' + this.category + ', value: ' + this.y + "  "+this.x + " "+row);
	                        	$scope.$apply(function () {
	                        		var url = '/collaborateur/ip/'+row+"/"+col;
	                                $location.path(url);
	                        	});
	                        	
	                        }
	                    }
	                }
	            },
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: true,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
	                    style: {
	                    	textShadow: '0 0 3px black' , fontSize: '15px', fontFamily: 'serif'
	                    }
	                }
	            }
	        },
	        series: [{
	        	name: 'En Inter',
	            data: $scope.dataListEnInter,
	            stack: 0
	        }]
	    });
	
	//Graphe Entrees/Sorties
	
	    $('#combochart_entree_sortie_div').highcharts({
	        
	        title: {
	            text: 'Entrees/Sorties',
				 style: { color: '#e0440e' }
	        },
	        subtitle: {
	            //text: '...'
	        },
	        xAxis: {
	            categories: $scope.listMois
	        },
	        yAxis: {
	            title: {
	                text: 'Collaborateurs'
	            },
	            stackLabels: {
	                enabled: true,
	                style: {
	                    fontWeight: 'bold',
	                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
	                }
	            }
	        },
	        legend: {
	            align: 'right',
	            x: -30,
	            verticalAlign: 'top',
	            y: 25,
	            floating: true,
	            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
	            borderColor: '#CCC',
	            borderWidth: 1,
	            shadow: false
	        },
	        tooltip: {
	            formatter: function () {
	                return '<b>' + this.x + '</b><br/>' +
	                    this.series.name + ': ' + this.y + '<br/>' +
	                    'Total: ' + this.point.stackTotal;
	            }
	        },
	        plotOptions: {
	        	series: {
	                cursor: 'pointer',
	                point: {
	                    events: {
	                        click: function (e) {
	                        	var col = this.series.name == "Entrees" ? 2 : 1;
	                        	var row = this.x;
	                            //alert('Category: ' + row + " "+col);
	                        	$scope.$apply(function () {
	                        		var url = '/collaborateur/es/'+row+"/"+col;
	                                $location.path(url);
	                        	});
	                        	
	                        }
	                    }
	                }
	            },
	            column: {
	                stacking: 'normal',
	                dataLabels: {
	                    enabled: false,
	                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
	                    style: {
	                        textShadow: '0 0 3px black'
	                    }
	                }
	            }
	        },
	        series: [
	        {
	        	type: 'column',
	        	name: 'Sorties',
	            data: $scope.listSorties,
	            stack: 0
	        },
	        {
	        	type: 'column',
	        	name: 'Entrees',
	            data: $scope.listEntrees,
	            stack: 0
	            
	        }/*,{
	        	name: 'Effectif',
	            data: $scope.listEffectifs,
	            type: 'line'
	        }*/]
	    });
    });   
    };
    $scope.loadAll();
	
});
