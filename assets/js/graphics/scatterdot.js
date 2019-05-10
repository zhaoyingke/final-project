
var ctx = document.getElementById('scatterChart');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    labels:['Chez Vong', 'Village Ung', 'Tang', 'Atelier Mala', 'Le Petit Pékin', 'Fu De Cha', 'Orcel', 'Le Granite', 'Ji Xiang Express', 'Amis Gourmands', 'T XUAN', 'Le Phenix', 'Restaurant Chez Wang', 'Fafa', 'Sweetalk', 'Maison des Si Chuan', 'Chez Grand-Mère', 'East Bird', 'Tasty Nouilles', "Panda's Baobao", 'Siam@Siam', 'Saturne', 'Table Neuf', 'Asia Room', 'Fire Town', 'Chez Xu', 'Chez Kong', 'Aux Mandarins de Belleville', 'Nouilles Fraiches', "Au Bourgeon D'Or", 'Chatime', 'Ravioli Pin Ja', 'Restaurant Sichuan', 'Chatime', 'Dou Di Zhu', 'Bubble T. Paris', 'My Noodles', 'Shang Palace', 'Maison Dong', 'Gourmet Tsingtao', 'Royal Tching Tao', 'ZAOKA', 'Hauky', 'La Pâte à Nouilles', 'Sucrepice', 'Fondue Factory', 'Coin de Paradis', 'Le Grenelle de Pekin', 'Les Trois Royaumes', 'Fondue 59', 'Le Pont de Sichuan', 'Canard Doré', 'Guan Guan Yuan', 'Chez Yong', 'Jiliya', 'Tin Tin', 'Quatre amis', 'Han Shi Fang', 'Happy Nouilles', 'Trois Fois Plus de Piment', 'Sinorama', 'M&Y Savor', 'Mirama', 'Kok Ping', 'Feng Sheng', 'La Fontaine de Jade', 'Noodle King', 'HANOUMAN', 'Ravioli de Juin', 'Les marmites rouges', 'Shan Gout', 'Les Trois Royaumes', 'Le Pont de Yunnan', "0 d'Attente", 'Chez LIN', 'Ji Bai He', 'La Taverne de Zhao', 'CHEZ MAM', "Parfums d'Asie", 'New hoa khoan', 'Heng Yuan', 'Tang gourmet', 'Carnet de Route', 'Chez Shen', 'Les Trois Royaumes', 'Iris', 'Les Jardins de Mandchourie', 'Kitchen Story', 'Lao Tseu', 'Le Royal China', 'Chez HE', 'Yuxi', 'Hao Hao', 'Deux Fois Plus de Piment', 'New World', 'Topho', 'Les Convives', '1 Pot', 'Noodle Panda', "Petit Xi'an", 'Tao Asian Fusion', 'Le Repas du Temps', 'Noodle', "Palais d'Asie", 'Autour du Yangtse', 'Hoa Nam', 'Chez Ming', 'Dong Fa', 'Elysées Bonheur', 'Chez Ann', 'Carnet de Voyage', 'Chez Van', 'Tang gourmet', 'Nouveau Village Tao-Tao', 'Lily Wang', 'Chez LY', 'Gintoki', 'Saveurs de Chengdu', 'Le President', 'Mian Fan', 'New China Town', 'Ogimi', 'Le Diamant Rose', 'Auberge des trois Bonheurs', 'Tang gourmet', 'Shabu Sha', "Phenix D'or", 'La Maison du Dim Sum', 'Lotus de Siam', 'Chez LY', 'Le Mandarin de Choisy', 'Aqua Sushi', 'Tang gourmet', 'Le Bon Palais', 'Chatime', 'Mandarin Courcelles', 'La Tour de Jade', 'Sin An Kiang', 'Mum Dim Sum', 'Happy Bowl'],
    data: {
        datasets: [{
            label: 'Restaurant rating percentiles',
            borderColor: "rgb(203, 64, 71)",
            pointBorderWidth: 2,
            pointBackgroundColor: "rgba(203, 64, 71, 0.5)",
            data: [
                {
                  "x": 0.923,
                  "y": 0.896
                },
                {
                  "x": 0.923,
                  "y": 0.915
                },
                {
                  "x": 0.923,
                  "y": 0.939
                },
                {
                  "x": 0.923,
                  "y": 0.879
                },
                {
                  "x": 0.923,
                  "y": 0.541
                },
                {
                  "x": 0.923,
                  "y": 0.099
                },
                {
                  "x": 0.923,
                  "y": 0.184
                },
                {
                  "x": 0.894,
                  "y": 0.574
                },
                {
                  "x": 0.894,
                  "y": 0.263
                },
                {
                  "x": 0.894,
                  "y": 0.423
                },
                {
                  "x": 0.866,
                  "y": 0.641
                },
                {
                  "x": 0.866,
                  "y": 0.697
                },
                {
                  "x": 0.866,
                  "y": 0.811
                },
                {
                  "x": 0.866,
                  "y": 0.293
                },
                {
                  "x": 0.866,
                  "y": 0.515
                },
                {
                  "x": 0.818,
                  "y": 0.406
                },
                {
                  "x": 0.818,
                  "y": 0.494
                },
                {
                  "x": 0.818,
                  "y": 0.419
                },
                {
                  "x": 0.818,
                  "y": 0.737
                },
                {
                  "x": 0.818,
                  "y": 0.121
                },
                {
                  "x": 0.818,
                  "y": 0.87
                },
                {
                  "x": 0.748,
                  "y": 0.516
                },
                {
                  "x": 0.748,
                  "y": 0.452
                },
                {
                  "x": 0.748,
                  "y": 0.792
                },
                {
                  "x": 0.748,
                  "y": 0.745
                },
                {
                  "x": 0.748,
                  "y": 0.815
                },
                {
                  "x": 0.748,
                  "y": 0.281
                },
                {
                  "x": 0.748,
                  "y": 0.298
                },
                {
                  "x": 0.748,
                  "y": 0.698
                },
                {
                  "x": 0.697,
                  "y": 0.839
                },
                {
                  "x": 0.697,
                  "y": 0.969
                },
                {
                  "x": 0.697,
                  "y": 0.12
                },
                {
                  "x": 0.818,
                  "y": 0.591
                },
                {
                  "x": 0.697,
                  "y": 0.969
                },
                {
                  "x": 0.697,
                  "y": 0.659
                },
                {
                  "x": 0.697,
                  "y": 0.981
                },
                {
                  "x": 0.697,
                  "y": 0.976
                },
                {
                  "x": 0.697,
                  "y": 0.977
                },
                {
                  "x": 0.642,
                  "y": 0.655
                },
                {
                  "x": 0.642,
                  "y": 0.109
                },
                {
                  "x": 0.642,
                  "y": 0.744
                },
                {
                  "x": 0.642,
                  "y": 0.998
                },
                {
                  "x": 0.642,
                  "y": 0.104
                },
                {
                  "x": 0.642,
                  "y": 0.43
                },
                {
                  "x": 0.585,
                  "y": 0.634
                },
                {
                  "x": 0.585,
                  "y": 0.504
                },
                {
                  "x": 0.585,
                  "y": 0.581
                },
                {
                  "x": 0.585,
                  "y": 0.849
                },
                {
                  "x": 0.547,
                  "y": 0.709
                },
                {
                  "x": 0.547,
                  "y": 0.291
                },
                {
                  "x": 0.547,
                  "y": 0.899
                },
                {
                  "x": 0.547,
                  "y": 0.662
                },
                {
                  "x": 0.547,
                  "y": 0.556
                },
                {
                  "x": 0.547,
                  "y": 0.754
                },
                {
                  "x": 0.547,
                  "y": 0.615
                },
                {
                  "x": 0.547,
                  "y": 0.549
                },
                {
                  "x": 0.453,
                  "y": 0.844
                },
                {
                  "x": 0.453,
                  "y": 0.605
                },
                {
                  "x": 0.453,
                  "y": 0.955
                },
                {
                  "x": 0.453,
                  "y": 0.925
                },
                {
                  "x": 0.453,
                  "y": 0.347
                },
                {
                  "x": 0.453,
                  "y": 0.168
                },
                {
                  "x": 0.453,
                  "y": 0.936
                },
                {
                  "x": 0.453,
                  "y": 0.901
                },
                {
                  "x": 0.453,
                  "y": 0.548
                },
                {
                  "x": 0.453,
                  "y": 0.674
                },
                {
                  "x": 0.453,
                  "y": 0.808
                },
                {
                  "x": 0.453,
                  "y": 0.686
                },
                {
                  "x": 0.453,
                  "y": 0.672
                },
                {
                  "x": 0.453,
                  "y": 0.113
                },
                {
                  "x": 0.453,
                  "y": 0.65
                },
                {
                  "x": 0.547,
                  "y": 0.709
                },
                {
                  "x": 0.404,
                  "y": 0.863
                },
                {
                  "x": 0.404,
                  "y": 0.669
                },
                {
                  "x": 0.404,
                  "y": 0.853
                },
                {
                  "x": 0.404,
                  "y": 0.704
                },
                {
                  "x": 0.404,
                  "y": 0.809
                },
                {
                  "x": 0.404,
                  "y": 0.518
                },
                {
                  "x": 0.404,
                  "y": 0.823
                },
                {
                  "x": 0.404,
                  "y": 0.898
                },
                {
                  "x": 0.404,
                  "y": 0.444
                },
                {
                  "x": 0.404,
                  "y": 0.636
                },
                {
                  "x": 0.352,
                  "y": 0.64
                },
                {
                  "x": 0.352,
                  "y": 0.867
                },
                {
                  "x": 0.547,
                  "y": 0.709
                },
                {
                  "x": 0.352,
                  "y": 0.794
                },
                {
                  "x": 0.352,
                  "y": 0.922
                },
                {
                  "x": 0.352,
                  "y": 0.593
                },
                {
                  "x": 0.352,
                  "y": 0.893
                },
                {
                  "x": 0.352,
                  "y": 0.905
                },
                {
                  "x": 0.352,
                  "y": 0.718
                },
                {
                  "x": 0.301,
                  "y": 0.759
                },
                {
                  "x": 0.301,
                  "y": 0.646
                },
                {
                  "x": 0.301,
                  "y": 0.712
                },
                {
                  "x": 0.301,
                  "y": 0.128
                },
                {
                  "x": 0.301,
                  "y": 0.357
                },
                {
                  "x": 0.301,
                  "y": 0.842
                },
                {
                  "x": 0.301,
                  "y": 0.678
                },
                {
                  "x": 0.301,
                  "y": 0.802
                },
                {
                  "x": 0.301,
                  "y": 0.288
                },
                {
                  "x": 0.301,
                  "y": 0.217
                },
                {
                  "x": 0.279,
                  "y": 0.553
                },
                {
                  "x": 0.279,
                  "y": 0.352
                },
                {
                  "x": 0.279,
                  "y": 0.62
                },
                {
                  "x": 0.246,
                  "y": 0.414
                },
                {
                  "x": 0.246,
                  "y": 0.544
                },
                {
                  "x": 0.225,
                  "y": 0.83
                },
                {
                  "x": 0.225,
                  "y": 0.657
                },
                {
                  "x": 0.225,
                  "y": 0.555
                },
                {
                  "x": 0.225,
                  "y": 0.96
                },
                {
                  "x": 0.208,
                  "y": 0.627
                },
                {
                  "x": 0.208,
                  "y": 0.749
                },
                {
                  "x": 0.404,
                  "y": 0.636
                },
                {
                  "x": 0.179,
                  "y": 0.783
                },
                {
                  "x": 0.179,
                  "y": 0.688
                },
                {
                  "x": 0.179,
                  "y": 0.785
                },
                {
                  "x": 0.179,
                  "y": 0.024
                },
                {
                  "x": 0.156,
                  "y": 0.719
                },
                {
                  "x": 0.156,
                  "y": 0.527
                },
                {
                  "x": 0.156,
                  "y": 0.929
                },
                {
                  "x": 0.156,
                  "y": 0.459
                },
                {
                  "x": 0.106,
                  "y": 0.563
                },
                {
                  "x": 0.106,
                  "y": 0.884
                },
                {
                  "x": 0.106,
                  "y": 0.567
                },
                {
                  "x": 0.404,
                  "y": 0.636
                },
                {
                  "x": 0.099,
                  "y": 0.412
                },
                {
                  "x": 0.091,
                  "y": 0.253
                },
                {
                  "x": 0.091,
                  "y": 0.962
                },
                {
                  "x": 0.083,
                  "y": 0.425
                },
                {
                  "x": 0.179,
                  "y": 0.785
                },
                {
                  "x": 0.062,
                  "y": 0.312
                },
                {
                  "x": 0.062,
                  "y": 0.196
                },
                {
                  "x": 0.404,
                  "y": 0.636
                },
                {
                  "x": 0.057,
                  "y": 0.031
                },
                {
                  "x": 0.697,
                  "y": 0.969
                },
                {
                  "x": 0.018,
                  "y": 0.801
                },
                {
                  "x": 0.018,
                  "y": 0.588
                },
                {
                  "x": 0.018,
                  "y": 0.575
                },
                {
                  "x": 0.016,
                  "y": 0.463
                },
                {
                  "x": 0,
                  "y": 0.059
                }
               ]
        }]
    },
    options: {
        title:{
            display:true,
            text:"Ratings of the same restaurants on different websites don't show linear correlations"
        },
        legend: {
            title: {
                defaultFontSize: 16
            }
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
