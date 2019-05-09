var ctx = document.getElementById('compareRatingPercentile');
Chart.defaults.global.legend.display = false;
var barChart_sample_size = new Chart(ctx, {
    type: 'line',
    
    data: {
        labels: [ " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        datasets: [{
            label: 'New Savour',
            data: [92.30,92.30,89.40,89.40,86.60,81.80,74.80,74.80,74.80,69.70,64.20,64.20,64.20,58.50,58.50,54.70,54.70,54.70,45.30,45.30,54.70,40.40,40.40,40.40,54.70,35.20,35.20,30.10,27.90,27.90,24.60,17.90,10.60,8.30],
            fill: true,
            backgroundColor:  "rgba(203, 64, 71, 0.2)",
            borderColor: "rgb(203, 64, 71)",
            
           
        },
        {
            label: 'Trip Advisor',
            data: [89.60,54.10,57.40,42.30,51.50,40.60,45.20,79.20,74.50,65.90,65.50,10.90,43.00,63.40,50.40,70.90,89.90,61.50,84.40,80.80,70.90,86.30,66.90,44.40,70.90,92.20,90.50,12.80,55.30,35.20,41.40,68.80,56.30,42.50],
            borderColor: 'rgb(139, 145, 111)',
            fill: true,
            backgroundColor: 'rgba(139, 145, 111, 0.2)',
           
        },
        {
            label: 'La Fourchette',
            data: [82.00,88.50,88.50,55.40,73.40,0.00,55.40,39.60,35.30,35.30,46.00,66.20,35.30,18.70,46.00,21.60,55.40,73.40,31.70,21.60,21.60,39.60,4.30,46.00,21.60,73.40,73.40,14.40,4.30,10.80,55.40,73.40,8.60,21.60],
            fill: true,
            backgroundColor:'rgba(190, 157, 126, 0.2)',
            borderColor: 'rgb(190, 157, 126)',
         
        }]

    },
    options:{
        title:{
            display:true,
            text:'Restaurant ranking percentiles show strong discrepancies among different rating sites'
        },
        legend:{
            
            labels:{
                display:true,
            }

        },
        bezierCurve: true,
        elements: {
            point:{
                radius: 0
            },
            line:{
                tension: 0.4
            }
        },
        legend:{
            display:true
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                },
                ticks:{beginAtZero: true}
            }],
            xAxes: [{
                
                gridLines: {
                    offsetGridLines: true,
                    color: "rgba(0, 0, 0, 0)"
                }
            }]
        }
    }
});