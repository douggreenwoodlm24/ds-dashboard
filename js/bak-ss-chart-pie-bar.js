//////////////
//
//   PIE CHART 
//
//////////////
    
    var company01 = 12;
    var company02 = 11;
    var company03 = 13;
    var company04 = 14;
    var company05 = 5;
    var company06 = 7;
    var company07 = 4;
    var company08 = 8;


    var config = {
        type: 'pie',
        
        data: {
            datasets: [{
                data: [
                    company01,
                    company02,
                    company03,
                    company04,
                    company05,
                    company06,
                    company07,
                    company08
                ],
                backgroundColor: [
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.green,
                    window.chartColors.blue,
                    window.chartColors.purple,
                    window.chartColors.grey,
                    window.chartColors.black
                ],
                label: ''
            }],
            labels: [
                "Alcatel",
                "Samsung",
                "CAT",
                "HTC",
                "Doro",
                "Apple",
                "Honor",
                "Vodafone"
            ]
        },
        options: {
            responsive: true,
            layout: {
                padding: 20
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
//
//$(document).ready(function(){
//
//        $.getJSON("tmp-bar4.json", function(graphData){
//                $('#tmp-title').text(graphData.title);        
//                $('#label01').text(graphData.series01Label);
//                $('#data01').text(graphData.series01Data);
//                $('#label02').text(graphData.series02Label);
//                $('#data02').text(graphData.series02Data);
//            });
//        });
        
        //console.log(window.yearOnYear.employee);
        
        var series01Label = 2016;
        var series01Data = [60,50,70,40,95,60,70,60,90,80,70,100];
        var series02Label = 2017;
        var series02Data = [65,50,75,35,100,70,65,55,90,0,0,0];
        
        
        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var color = Chart.helpers.color;
        var barChartData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: series01Label,
                backgroundColor: color(window.chartColors.green).alpha(1).rgbString(),
                borderColor: window.chartColors.green,
                borderWidth: 1,
                data: [series01Data[0],
                        series01Data[1],
                        series01Data[2],
                        series01Data[3],
                        series01Data[4],
                        series01Data[5],
                        series01Data[6],
                        series01Data[7],
                        series01Data[8],
                        series01Data[9],
                        series01Data[10],
                        series01Data[11]
                ]
            }, {
                label: series02Label,
                backgroundColor: color(window.chartColors.blue).alpha(1).rgbString(),
                borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [series02Data[0],
                        series02Data[1],
                        series02Data[2],
                        series02Data[3],
                        series02Data[4],
                        series02Data[5],
                        series02Data[6],
                        series02Data[7],
                        series02Data[8],
                        series02Data[9],
                        series02Data[10],
                        series02Data[11]
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
                    legend: {
                        position: 'top'
                    },
                    title: {
                        display: true,
                        text: '2016-2017 sales (£000)' // Chart title
                    },
                    layout: {
                padding: 20
            }
                }
            });

        };

        document.getElementById('randomizeData').addEventListener('click', function() {
            var zero = Math.random() < 0.2 ? true : false;
            barChartData.datasets.forEach(function(dataset) {
                dataset.data = dataset.data.map(function() {
                    return zero ? 0.0 : randomScalingFactor();
                });

            });
            window.myBar.update();
        });

        var colorNames = Object.keys(window.chartColors);
        document.getElementById('addDataset').addEventListener('click', function() {
            var colorName = colorNames[barChartData.datasets.length % colorNames.length];;
            var dsColor = window.chartColors[colorName];
            var newDataset = {
                label: 'Dataset ' + barChartData.datasets.length,
                backgroundColor: color(dsColor).alpha(1).rgbString(),
                borderColor: dsColor,
                borderWidth: 1,
                data: []
            };

            for (var index = 0; index < barChartData.labels.length; ++index) {
                newDataset.data.push(randomScalingFactor());
            }

            barChartData.datasets.push(newDataset);
            window.myBar.update();
        });

        document.getElementById('addData').addEventListener('click', function() {
            if (barChartData.datasets.length > 0) {
                var month = MONTHS[barChartData.labels.length % MONTHS.length];
                barChartData.labels.push(month);

                for (var index = 0; index < barChartData.datasets.length; ++index) {
                    //window.myBar.addData(randomScalingFactor(), index);
                    barChartData.datasets[index].data.push(randomScalingFactor());
                }

                window.myBar.update();
            }
        });

        document.getElementById('removeDataset').addEventListener('click', function() {
            barChartData.datasets.splice(0, 1);
            window.myBar.update();
        });

        document.getElementById('removeData').addEventListener('click', function() {
            barChartData.labels.splice(-1, 1); // remove the label first

            barChartData.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myBar.update();
        });
        
        
        
        
