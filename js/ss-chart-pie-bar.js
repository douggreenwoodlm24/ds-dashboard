var pieJsonData = {
        "title": "Manufacturers",
        "series01": {
            "manufacturer": "Alcatel",
            "manufacturerValue": "12"
        }, 
        "series02": {
            "manufacturer": "Samsung",
            "manufacturerValue": "11"
        }, 
        "series03": {
            "manufacturer": "CAT",
            "manufacturerValue": "13"
        }, 
        "series04": {
            "manufacturer": "HTC",
            "manufacturerValue": "14"
        }, 
        "series05": {
            "manufacturer": "Doro",
            "manufacturerValue": "5"
        }, 
        "series06": {
            "manufacturer": "Apple",
            "manufacturerValue": "2"
        }, 
        "series07": {
            "manufacturer": "Honor",
            "manufacturerValue": "4"
        }, 
        "series08": {
            "manufacturer": "Vodafone",
            "manufacturerValue": "8"
        }
    };

var barJsonData = {
        "title": "Year on year sales comparison (£000)",
        "series01Label": "2016",
        "series01Data":  [60,50,70,40,95,60,70,60,90,80,70,100],
        "series02Label": "2017",
        "series02Data":  [65,50,75,35,100,70,65,55,90,0,0,0]
    };





////////////////
//
//   PIE CHART 
//
//////////////
    
   
//    var pieJsonData = (function() {
//        var pieJsonData = null;
//        $.ajax({
//            'async': false,
//            'global': false,
//            'url': "data-chart-pie.json",
//            'dataType': "json",
//            'success': function (data) {
//                pieJsonData = data;
//            }
//        });
//        return pieJsonData;
//    })();


    var config = {
        type: 'doughnut',
        
        data: {
            datasets: [{
                data: [
                    pieJsonData.series01.manufacturerValue,
                    pieJsonData.series02.manufacturerValue,
                    pieJsonData.series03.manufacturerValue,
                    pieJsonData.series04.manufacturerValue,
                    pieJsonData.series05.manufacturerValue,
                    pieJsonData.series06.manufacturerValue,
                    pieJsonData.series07.manufacturerValue,
                    pieJsonData.series08.manufacturerValue
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.blue,
                    window.chartColors.green,
                    window.chartColors.purple,
                    window.chartColors.grey,
                    window.chartColors.yellow,
                    window.chartColors.black
                ],
                label: ''
            }],
            labels: [
               pieJsonData.series01.manufacturer,
                    pieJsonData.series02.manufacturer,
                    pieJsonData.series03.manufacturer,
                    pieJsonData.series04.manufacturer,
                    pieJsonData.series05.manufacturer,
                    pieJsonData.series06.manufacturer,
                    pieJsonData.series07.manufacturer,
                    pieJsonData.series08.manufacturer
            ]
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                left: 20,
                right: 20,
                top: 10,
                bottom: 20
            }
            },
            title: {
                        display: true,
                        text: pieJsonData.title, // Chart title
                        fontSize: '16'
                    },
            legend: {
                position: 'left'
            }
        }
    };

// window.onload for pie chart combined with window.onload for bar chart (can only have one per page)
//    window.onload = function() {
//        
//    };

////////////////
//
//   BAR CHART 
//
//////////////

        
//        var barJsonData = (function() {
//        var barJsonData = null;
//        $.ajax({
//            'async': false,
//            'global': false,
//            'url': "data-chart-bar.json",
//            'dataType': "json",
//            'success': function (data) {
//                barJsonData = data;
//            }
//        });
//        return barJsonData;
//    })();
        

        
        
        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: barJsonData.series01Label,
                backgroundColor: color(window.chartColors.green).alpha(1).rgbString(),
                borderColor: window.chartColors.green,
                borderWidth: 1,
                data: [barJsonData.series01Data[0],
                        barJsonData.series01Data[1],
                        barJsonData.series01Data[2],
                        barJsonData.series01Data[3],
                        barJsonData.series01Data[4],
                        barJsonData.series01Data[5],
                        barJsonData.series01Data[6],
                        barJsonData.series01Data[7],
                        barJsonData.series01Data[8],
                        barJsonData.series01Data[9],
                        barJsonData.series01Data[10],
                        barJsonData.series01Data[11]
                ]
            }, {
                label: barJsonData.series02Label,
                backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [barJsonData.series02Data[0],
                        barJsonData.series02Data[1],
                        barJsonData.series02Data[2],
                        barJsonData.series02Data[3],
                        barJsonData.series02Data[4],
                        barJsonData.series02Data[5],
                        barJsonData.series02Data[6],
                        barJsonData.series02Data[7],
                        barJsonData.series02Data[8],
                        barJsonData.series02Data[9],
                        barJsonData.series02Data[10],
                        barJsonData.series02Data[11]
                ]
            }]

        };
        
        

        window.onload = function() {
            // Pie chart
            var ctx = document.getElementById("chart-area").getContext("2d");
        window.myPie = new Chart(ctx, config);
            
            
            // Bar chart
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    responsive: true,
                    //scaleShowVerticalLines: false,
                    legend: {
                        position: 'top'
                    },
                    scaleLabel: {
                        display: true
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: barJsonData.title, // Chart title
                        fontSize: '16'
                    },
                    layout: {
                        padding: 20
                    }
                }
            });

        };

//        document.getElementById('randomizeData').addEventListener('click', function() {
//            var zero = Math.random() < 0.2 ? true : false;
//            barChartData.datasets.forEach(function(dataset) {
//                dataset.data = dataset.data.map(function() {
//                    return zero ? 0.0 : randomScalingFactor();
//                });
//
//            });
//            window.myBar.update();
//        });
//
//        var colorNames = Object.keys(window.chartColors);
//        document.getElementById('addDataset').addEventListener('click', function() {
//            var colorName = colorNames[barChartData.datasets.length % colorNames.length];;
//            var dsColor = window.chartColors[colorName];
//            var newDataset = {
//                label: 'Dataset ' + barChartData.datasets.length,
//                backgroundColor: color(dsColor).alpha(1).rgbString(),
//                borderColor: dsColor,
//                borderWidth: 1,
//                data: []
//            };
//
//            for (var index = 0; index < barChartData.labels.length; ++index) {
//                newDataset.data.push(randomScalingFactor());
//            }
//
//            barChartData.datasets.push(newDataset);
//            window.myBar.update();
//        });
//
//        document.getElementById('addData').addEventListener('click', function() {
//            if (barChartData.datasets.length > 0) {
//                var month = MONTHS[barChartData.labels.length % MONTHS.length];
//                barChartData.labels.push(month);
//
//                for (var index = 0; index < barChartData.datasets.length; ++index) {
//                    //window.myBar.addData(randomScalingFactor(), index);
//                    barChartData.datasets[index].data.push(randomScalingFactor());
//                }
//
//                window.myBar.update();
//            }
//        });
//
//        document.getElementById('removeDataset').addEventListener('click', function() {
//            barChartData.datasets.splice(0, 1);
//            window.myBar.update();
//        });
//
//        document.getElementById('removeData').addEventListener('click', function() {
//            barChartData.labels.splice(-1, 1); // remove the label first
//
//            barChartData.datasets.forEach(function(dataset, datasetIndex) {
//                dataset.data.pop();
//            });
//
//            window.myBar.update();
//        });
        
        
        
        
