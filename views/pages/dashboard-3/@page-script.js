jQuery(function($) {

  window.currentLayout = 2

  $('#navbar-themes-show-msg').removeClass('d-none')
  $('#navbar-themes-show, #auto-match-div').addClass('d-none')
  $('#id-auto-match').prop('checked', false)
  $('input[value="not-navbar"]').parent().addClass('d-none')


  
  // Enable tooltips
  $('.page-tools .btn').tooltip({
    container: 'body',
    template: '<div class="tooltip" role="tooltip"><div class="arrow brc-secondary-d2"></div><div class="tooltip-inner text-600 text-110 pb-2 bgc-secondary-d2"></div></div>',
    trigger: 'hover',
    placement: 'top'
  })

  //////////////////////////////////////////////

  var _animate = !AceApp.Util.isReducedMotion()


  // The small pageview chart inside infoboxes
  new Chart(document.getElementById("linechart-1"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
              type: 'line',
              label: '',
              
              data: [107, 122, 136, 112, 139, 120, 134, 128, 108, 122, 119, 125],
              
              spanGaps: true,

              lineTension: 0,
              backgroundColor: 'transparent',
              borderColor: 'rgba(93, 170, 201, 0.75)',
              borderWidth: 2,

              fill: true,
              backgroundColor : 'rgba(89, 182, 218, 0.25)',

              pointRadius: 5,
              pointBorderColor: 'transparent',
              pointBackgroundColor: 'transparent',
              pointBorderWidth: 5,

              pointHoverBackgroundColor: 'rgb(93, 170, 201)',
              pointHoverBorderColor: 'rgb(93, 170, 201)'
            }
        ]
    },
    options: {
      responsive: true,
      animation: {
         duration: _animate ? 1000 : false
      },
      legend: {
          display: false
      },
      scales: {
        yAxes: [
            {
                ticks: {
                    display: false,
                    min: 80, // minimum value
                    max: 200 // maximum value
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
            }
        ],

        xAxes: [
          {
            barThickness: 4,
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
                display: false //this will remove only the label
            }
          },
        ]
      },

      tooltips: {
        // Disable the on-canvas tooltip, because canvas area is small and tooltips will be cut (clipped)
        enabled: false,

        //use bootstrap tooltip instead
        custom: function(tooltipModel) {
          var title = '';
          var canvas = this._chart.canvas;

          if (tooltipModel.body) {
            title = tooltipModel.title[0] + ': ' + Number(tooltipModel.body[0].lines[0]).toLocaleString();
          }
          canvas.setAttribute('data-original-title', title);//will be used by bootstrap tooltip

          $(canvas)
          .tooltip({
            placement: 'bottom',
            template: '<div class="tooltip" role="tooltip"><div class="bgc-info-d2 tooltip-inner font-bolder text-110"></div></div>'
          })
          .tooltip('show')
          .on('hidden.bs.tooltip', function() {
            canvas.setAttribute('data-original-title', '');//so that when mouse is back over canvas's blank area, no tooltip is shown
          });
 
        }
      }//tooltips
    }
  })



 // small pie chart
 new Chart(document.getElementById('piechart-1'), {
  type: 'doughnut',
  data: {
      datasets: [{
          label: 'Traffic Sources',
          data: [38.7, 24.5, 8.2, 18.6, 10],
          backgroundColor: [
              "#ea5d6a",
              "#718ff1",
              "#12d18f",
              "#ff7124",
              "#ffc688",
          ],
      }],
      labels: [
          'social networks',
          'search engines',
          'ad campaigns',
          'direct traffic',
          'other'
      ]
  },
  
  options: {
      responsive: true,

      cutoutPercentage: 50,
      legend: {
          display: false
      },
      animation: {
         // animateScale: true,
          animateRotate: true,
          duration: _animate ? 1000 : false
      },
      tooltips: {
          enabled: true,
          cornerRadius: 0,
          bodyFontColor: '#fff',
          bodyFontSize: 14,
          fontStyle: 'bold',
          
          backgroundColor: 'rgba(34, 34, 34, 0.73)',
          borderWidth: 0,
         
          caretSize: 5,

          xPadding: 12,
          yPadding: 12,
          
          callbacks: {
            label: function(tooltipItem, data) {
              var label = data.labels[tooltipItem.index]
              return ' ' + label + ": " + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
            }
          }
      }
   }
 })


  ////////////////////////////////////////

  // the big (More Stats) chart 
  var canvas = document.getElementById("saleschart")
  var ctx = canvas.getContext("2d")

  /*** Gradient ***/
  var gradient1 = ctx.createLinearGradient(0, 0, 0, 300)
    gradient1.addColorStop(0, 'rgba(89, 182, 218, 0.3)')
    gradient1.addColorStop(1, 'rgba(89, 182, 218, 0)')

  var gradient2 = ctx.createLinearGradient(0, 0, 0, 250)
    gradient2.addColorStop(0, 'rgba(112, 187, 112, 0.4)') 
    gradient2.addColorStop(1, 'rgba(112, 187, 112, 0)')

  var gradients = [];
     gradients.push(gradient1, gradient2)


var chartOptions1 = {
  lineTenstion: 0.3,
  borderWidth: 2,
  pointRadius: 2
}

new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Twitter",
        data : [150, 320, 250, 300, 450, 380, 360, 490, 480, 790, 720, 910],
        
        borderColor: 'rgba(89, 182, 218, 0.7)',
        pointBorderColor: 'rgba(89, 182, 218, 0.67)',

        fill: true,
        backgroundColor : gradients[0],
        pointBackgroundColor: '#FFF',

        borderWidth: chartOptions1.borderWidth,
        pointRadius: chartOptions1.pointRadius,
        lineTension: chartOptions1.lineTension,
      },
      {
        label: "Facebook",
        data: [ 600, 700, 520, 450, 580, 650, 720, 850, 650, 500, 350, 400],

        borderColor: 'rgba(112, 187, 112, 0.7)',
        pointBorderColor: 'rgba(112, 187, 112, 0.67)',          

        fill: true,
        backgroundColor : gradients[1],
        pointBackgroundColor: '#FFF',
        
        borderWidth: chartOptions1.borderWidth,
        pointRadius: chartOptions1.pointRadius,
        lineTension: chartOptions1.lineTension,
      }
    ]
    },
    options: {
      responsive: true,
      animation: {
        duration: _animate ? 1000 : false
     },

      datasetStrokeWidth : 3,
      pointDotStrokeWidth : 4,

      tooltips: {
        enabled: true,
        cornerRadius: 0,
        
        titleFontColor: 'rgba(0, 0, 0, 0.8)',
        titleFontSize: 16,
        titleFontStyle: 'normal',

        bodyFontColor: 'rgba(0, 0, 0, 0.8)',
        bodyFontSize: 14,
        fontFamily: 'Open Sans',
        
        backgroundColor: 'rgba(255, 255, 255, 0.73)',
        borderWidth: 2,
        borderColor: 'rgba(254, 224, 116, 0.73)',
       
        caretSize: 5,

        xPadding: 12,
        yPadding: 12,
     
      },

      scales: {
        yAxes: [{
          ticks: {
            fontFamily: "Open Sans",
            fontColor: "#85808e",
            fontStyle: "bolder",
            fontSize: "13",
            beginAtZero: false,
            maxTicksLimit: 3,
            padding: 16
        },
        gridLines: {
            drawTicks: false,
            display: false
        }
        }],
        xAxes: [{
          gridLines: {
              zeroLineColor: "transparent"
          },
          ticks: {                
            fontFamily: "Open Sans",
            fontColor: "#85808e",
            fontSize: "14",
            padding: 12
          }
        }]
      },
      
      legend: {
        display: true,
        position: 'top'
      }
    }
  })

})