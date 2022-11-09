jQuery(function($) {
  var _animate = !AceApp.Util.isReducedMotion()

  /////////////////////////////////////////////
   new Chart(document.getElementById('piechart'), {
    type: 'doughnut',
    data: {
        datasets: [{
          label: 'Traffic Sources',
          data: [35, 27, 12, 23, 8],
          backgroundColor: [
              "#43b9d5",
              "#f1bb41",
              "#498ade",
              "#8e7bd7",
              "#f3e702",
          ],
        }],

        labels: [
          ' social networks',
          ' search engines',
          ' ad campaigns',
          ' direct traffic',
          ' other'
        ]
    },

    options: {
        responsive: true,
        responsiveAnimationDuration: _animate ? 500 : 0,
        cutoutPercentage: 60,
        legend: {
            display: false,
            position: 'right',
            labels: {
              usePointStyle: true
            }
        },
        animation: {
            // animateScale: true,
            animateRotate: true,
            duration: _animate ? 1000 : false
        },
        tooltips: {
            enabled: true,
            cornerRadius: 0,
            bodyFontColor: '#FFF',
            bodyFontSize: 14,
            
            backgroundColor: 'rgba(0,0,0,0.85)',
            borderWidth: 0,
            
            caretSize: 6,

            xPadding: 12,
            yPadding: 12
        }
    }
  })


  ///////////////////////////////////////////////////////



  var mix = document.getElementById("mixchart").getContext('2d')
  new Chart(mix, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Revenue",
          data: [8.5, 4.5, 5.5 , 21.5, 7, 9, 7.5, 19, 8, 18, 21.5, 33.5],
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
          backgroundColor: 'rgba(67,185,213,0.92)',
          hoverBackgroundColor: 'rgba(67,185,213,0.92)',

          barThickness: 10
        },
        {
          label: "Expense",
          data: [11, 9, 5 , 11, 8, 14, 5, 11, 7, 12, 11.5, 13.5],
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
          backgroundColor: 'rgba(142,123,215,0.92)',
          hoverBackgroundColor: 'rgba(142,123,215,0.92)',

          barThickness: 10,
        },
        {
          label: "Profit",
          data: [12, 11, 11 , 14, 9 , 8, 5, 8, 9, 6, 22.5, 15.5],
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
          backgroundColor: 'rgba(58,157,238,0.92)',
          hoverBackgroundColor: 'rgba(58,157,238,0.92)',

          barThickness: 10
        },
        
        {
          type: 'line',
          label: "Revenue",
          data: [32, null, 20.5, 48, 25, 32, 19, 40, 25, 35, 55, 64],
          spanGaps: true,

          lineTension: 0.4,
          backgroundColor: '#e9edf1',
          borderColor: '#e1e5ea',
          borderWidth: 2,
          pointBorderColor: 'transparent',
          pointRadius: 0,
          pointBorderWidth: 0,
        }
      ]
    },

    options: {
      legend: {
        display: false
      },
      animation: {
        duration: _animate ? 1000 : false
      },
      scales: {
        yAxes: [
          {
            id: "revenues",
            stacked: true,
            ticks: {
              beginAtZero: true,
              fontColor: "#80858c"
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          },
          {
            id: "clients",
            position: 'right',
            stacked: true,
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          },
        ],
        xAxes: [
          {
            stacked: true,
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: "#80858c"
            }
          },
        ]
      }

    }
  })


  /////////////////////////////////////////////


  // The 'Misc' progress charts
  var progressData = [55, 40, 70]
  var progressColor = ['#3a9dee', '#867dc2', '#1277ca']

  var startHeight = 180
  for(var p = 0 ; p < progressData.length ; p++) {
    var canvas = document.createElement('canvas')
    canvas.id = 'progress-chart-' + (p+1)
    canvas.height = startHeight - p * 45;
    if(p > 0) {
      canvas.classList.add('pos-abs');
      canvas.setAttribute('style', 'top: 0; bottom: 0; margin-top: auto; margin-bottom:auto');
    }
    
    document.getElementById('progress-chart').appendChild(canvas)

    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [progressData[p], 100 - progressData[p]],
                backgroundColor: [
                    progressColor[p],
                    "#e9f2f6"
                ],
                hoverBackgroundColor: [
                    progressColor[p],
                    "#e9f2f6"
                ],
                borderWidth: 0
            }]
        },
        
        options: {
            cutoutPercentage: (90 - p * 2),
            rotation: Math.PI * 0.7,
            legend: {
                display: false
            },
            animation: {
                //animateScale: true,
                duration: _animate ? 1200 - (200 * p) : false,
                easing: 'easeInCubic'
            },
            tooltips: {
                enabled: false,
            }
        }
    }

    new Chart(canvas, config)
  }


  ////////////////////////////////////


  //chartist plugin
  new Chartist.Line('.ct-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }, {
    fullWidth: true,
    height: 200,
    chartPadding: {
      right: 40
    }
  })

  new Chartist.Line('.ct-chart', {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ,20],
      series: [
        [4, 8, 34, 23, 11, 16, 22, 16, 19, 31, 70, 18, 16, 24, 35, 27, 19, 10, 50, 5, 15, 4],
        [1, 3, 41, 19, 8, 12, 13, 5, 4, 7, 10, 62, 10, 19, 11, 9, 8, 16, 11, 9, 14, 28],
        [11, 23, 21, 49, 18, 22, 8, 15, 10, 27, 11, 22, 20, 49, 21, 19, 8, 6, 2, 1, 6, 4]
      ]
    }, {
      low: 0,
      fullWidth: true,
      lineSmooth:  Chartist.Interpolation.simple({
          divisor: 3
        }),
      height: 235,
      showArea: true,
      showPoint: false,  
      
      showLabel: false,
      axisX: {
        showGrid: false,
        showLabel: false,
      },
      axisY: {
        showLabel: false,
      },

      }
  )
    

  ////////////////////////////////////

  //flot charts
  var d1 = [[0, 12], [1, 22], [2, 24], [3, 20], [4, 25], [5, 15], [6, 24], [7, 23], [8, 16], [9, 16], [10, 18], [11, 21], [12, null]]
  var d2 = [[0, 40], [1, 48], [2, 35], [3, 30], [4, 40], [5, 39], [6, 40], [7, 41], [8, 36], [9, 37], [10, 42], [11, 52], [12, null]]
  var d3 = [[0, 2], [1, 2], [2, 1], [3, 1], [4, 1], [5, 2], [6, 1], [7, 1], [8, 1], [9, 2], [10, 2], [11, 1], [12, null]]

  $.plot("#sales-chart", [
      {
        data: d1,
        color: "#2bb4b5",
        bars: { show: true }
      },
      {
        data: d2,
        color: "#57c9f5",
        bars: { show: true }
      },
      {
        data: d3,
        color: "#d9ae9e",
        bars: { show: false },
        lines: {
          fillOpacity:1,
          show: true,
          fill: true,
          lineWidth: 2
        }
      }
    ],
    {
      series: {
          stack: true,
          bars: {
            barWidth: 0.5,
            lineWidth: 0,
            fill:0.9
          }
      },
      xaxis: {
        //autoScale:"exact",
        color: '#e9f2f6',
        tickSize: 0,
        font: {
            size: 12,
            weight: "600",
            family: "Open Sans",
            variant: "small-caps",
            color: "rgba(102, 68, 68, 0.67)"
        }
      },
      yaxis: {
          autoScale:"exact",
          color: '#e9f2f6',
          
          font: {
            size: 12,
            weight: "600",
            family: "Open Sans",
            variant: "small-caps",
            color: "rgba(0, 85, 102, 0.73)"
          }
      },
      grid: {
          color: '#a9b2ba',
          borderWidth: 0,

          marki1ngs: [ { xaxis: { from: 0, to: 12 }, yaxis: { from: 20, to: 20 }, color: "rgba(187, 0, 0, 0.33)" } ]
      }
  })

  /////////////////////////////////////////////////////

  // google charts
  google.charts.load('current', {'packages':['gauge']});
  google.charts.setOnLoadCallback(drawChart1);

  function drawChart1() {
    var data = google.visualization.arrayToDataTable([
      ['Label', 'Value'],
      ['Memory', 80],
      ['CPU', 55],
      ['Network', 68]
    ])

    var options = {
      width: 400, height: 120,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 5
    }

    var chart = new google.visualization.Gauge(document.getElementById('google_chart_gauge'))

    chart.draw(data, options)

    setInterval(function() {
      data.setValue(0, 1, 40 + Math.round(60 * Math.random()))
      chart.draw(data, options)
    }, 13000)

    setInterval(function() {
      data.setValue(1, 1, 40 + Math.round(60 * Math.random()))
      chart.draw(data, options)
    }, 5000)

    setInterval(function() {
      data.setValue(2, 1, 60 + Math.round(20 * Math.random()))
      chart.draw(data, options)
    }, 26000)
  }


  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  })
  google.charts.setOnLoadCallback(drawRegionsMap)

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Italy', 100],
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],          
      ['France', 500],
      ['Canada', 600],
    ])

    var options = {colorAxis: {colors: ['#fa7b5a', '#49ac97', '#f28dad']},
    backgroundColor: '#fff',
    datalessRegionColor: '#ddd',
    defaultColor: '#ef3e48'};

    var chart = new google.visualization.GeoChart(document.getElementById('google_chart_region'))

    chart.draw(data, options)
  }


  //////////////

  google.charts.load('current', {packages:['wordtree']})
  google.charts.setOnLoadCallback(drawChart2)

  function drawChart2() {
    var data = google.visualization.arrayToDataTable(
      [ ['Phrases'],
        ['cats eat kibble'],
        ['cats eat mice'],
        ['cats eat mice'],
        ['cats eat kibble'],
        ['cats eat mice'],
        ['cats are evil'],
        ['cats are weird'],
        ['cats eat mice'],
      ]
    )

    var options = {
      maxFontSize: 16,
      wordtree: {
        format: 'implicit',
        word: 'cats'
      }
    }

    var chart = new google.visualization.WordTree(document.getElementById('google_chart_tree'))
    chart.draw(data, options)
  }

})