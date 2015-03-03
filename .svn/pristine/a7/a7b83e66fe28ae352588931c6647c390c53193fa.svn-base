'use strict';

appMap.controller('PoleController', function ($scope,$location,$rootElement) {
	
	
	var collaborateurs  = getCollaborateurs(); //resolvedCollaborateur
			
	
	Highcharts.setOptions({
        colors: ['#FF0000', '#50B432','#e0440e']
    });
	
	var listPoles = setColumnhightChartChartCollaborateurParPoleData(collaborateurs)[0];
	var dataListEnMission = setColumnhightChartChartCollaborateurParPoleData(collaborateurs)[1];
	var dataListEnInter = setColumnhightChartChartCollaborateurParPoleData(collaborateurs)[2];
	
	//Graphe BU 
	var listBUs=setColumnhightChartChartCollaborateurParBUData(collaborateurs)[0];
	var dataListEnMissionByBU=setColumnhightChartChartCollaborateurParBUData(collaborateurs)[1];
	var dataListEnInterByBU=setColumnhightChartChartCollaborateurParBUData(collaborateurs)[2];
	
	
	//Entrees/Sorties
	var listMois = setComboHighChartCollaborateursEntreesSorties(collaborateurs)[0];
	var listEntrees = setComboHighChartCollaborateursEntreesSorties(collaborateurs)[1];
	var listSorties = setComboHighChartCollaborateursEntreesSorties(collaborateurs)[2];
	var listEffectifs = setComboHighChartCollaborateursEntreesSorties(collaborateurs)[3];
	
	
	
	//Graphe Collaborateurs par Pole
	$(function () {
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
	            categories: listPoles
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
	            data: dataListEnInter,
	            stack: 0
	        }, {
	        	name: 'En Mission',
	            data: dataListEnMission,
	            stack: 0
	        }]
	    });
	});
	
	
	
	//Graphe Collaborateurs par BU
	$(function () {
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
	            categories: listBUs
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
	            data: dataListEnInterByBU,
	            stack: 0
	        }, {
	        	name: 'En Mission',
	            data: dataListEnMissionByBU,
	            stack: 0
	        }]
	    });
	});
	
	
	
	// Graphe Inter Par Pole
	$(function () {
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
	            categories: listPoles
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
	            data: dataListEnInter,
	            stack: 0
	        }]
	    });
	});
	
	//Graphe Entrees/Sorties
	$(function () {
	    $('#combochart_entree_sortie_div').highcharts({
	        
	        title: {
	            text: 'Entrees/Sorties',
				 style: { color: '#e0440e' }
	        },
	        subtitle: {
	            //text: '...'
	        },
	        xAxis: {
	            categories: listMois
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
	            data: listSorties,
	            stack: 0
	        },
	        {
	        	type: 'column',
	        	name: 'Entrees',
	            data: listEntrees,
	            stack: 0
	            
	        }/*,{
	        	name: 'Effectif',
	            data: listEffectifs,
	            type: 'line'
	        }*/]
	    });
	});
	
	
});