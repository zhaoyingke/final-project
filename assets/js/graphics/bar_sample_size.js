var ctx = document.getElementById('barChart_sample_size');
var barChart_sample_size = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['New Savour', 'Trip Advisor', 'La Fourchette'],
        datasets:[{
            label: 'Number of restaurants',
            data:[724, 184, 578],
            borderClor: [
                'rgb(203, 64, 71)',
                'rgb(139, 145, 111)',
                'rgb(190, 157, 126)'
            ],
            backgroundColor: [
                'rgba(203, 64, 71, 0.8)',
                'rgba(139, 145, 111, 0.8)',
                'rgba(190, 157, 126, 0.8)'
            ],
            borderWidth: 1
        }]

    },
    options: {
        legends:{
            display: false
          },
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                },
                ticks:{beginAtZero: true}
            }],
            xAxes: [{
                barPercentage: 0.8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true,
                    color: "rgba(0, 0, 0, 0)"
                }
            }]
        }
    }
});