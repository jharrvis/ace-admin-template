jQuery(function($) {
  $('.sidebar .fa-exclamation-triangle').removeClass('text-danger-m2').addClass('text-yellow-m3')
  $('.sidebar .badge-primary').removeClass('badge-primary').addClass('bgc-success-m1 text-dark-d2')

  window.isAceLayout4 = true;//used in demo.js
  $('input[name="boxed-layout"][value="none"]').trigger('click')

  // show tooltips only when not touchscreen
  if (!('ontouchstart' in window)) $('[data-toggle="tooltip"]').tooltip({container: 'body'})


  // Sortable Task Board
  $('#task-col-0, #task-col-1, #task-col-2')
  .each(function() {
    Sortable.create(this, {
      group: "task",

      draggable: "> .task-item",
      animation: 200,

      ghostClass: "bgc-yellow-l1",  // Class name for the drop placeholder
      chosenClass: "",  // Class name for the chosen item
      dragClass: "",  // Class name for the dragging item
    })
  })


  //////////////////////////////////////////////////
  // Draw charts
  var _animate = !AceApp.Util.isReducedMotion()// Make sure no animation is displayed according to user preferences

  // The traffic sources piechart
  var piechartConfig1 = {
      type: 'doughnut',
      data: {
          datasets: [{
              label: 'Traffic Sources',
              data: [38.7, 24.5, 8.2, 18.6, 10],
              backgroundColor: [
                "#42b254",
                "#2a8dcb",
                "#9957bc",
                "#efcc4e",
                "#e2e3e4"
              ],
          }],
          labels: [
              'Social Networks',
              'Search Engines',
              'Ad Campaigns',
              'Direct Traffic',
              'Other'
          ]
      },
      
      options: {
          responsive: true,

          cutoutPercentage: 75,
          legend: {
              display: false
          },
          animation: {
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
                  return ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                }
              }
          }
      }
  }

  var piechart1 = document.getElementById('piechart1')
  var maxWidth = parseInt($(piechart1).closest("[class*='col-']").width() / 2)
  if (maxWidth > 150) maxWidth = 150

  piechart1.setAttribute('style', "height: "+maxWidth+"px; width: "+maxWidth+"px; max-height: "+maxWidth+"px; max-width: "+maxWidth+"px;")

  var trafficPieChart = new Chart(piechart1, piechartConfig1);
  $(document.getElementById('piechart1').parentNode).after("<div class='piechart-legends mt-1'>"+trafficPieChart.generateLegend()+"</div>")

  ////////////////////////////////////
  // the user devices piechart
  var piechartConfig2 = {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'User Devices',
            data: [45, 18, 37],
            backgroundColor: [
              "#ebab40",
              "#1aa1ab",
              "#4aaceb"
            ],
        }],
        labels: [
            'Desktop',
            'Tablet',
            'Mobile'
        ]
    },
    
    options: {
        responsive: true,

        cutoutPercentage: 75,
        legend: {
            display: false
        },
        animation: {
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
                return ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
              }
            }
        }
    }
}

var piechart2 = document.getElementById('piechart2')
piechart2.setAttribute('style', "height: "+maxWidth+"px; width: "+maxWidth+"px; max-height: "+maxWidth+"px; max-width: "+maxWidth+"px;")
var devicePieChart = new Chart(piechart2, piechartConfig2);
$(document.getElementById('piechart2').parentNode).after("<div class='piechart-legends mt-1'>"+devicePieChart.generateLegend()+"</div>")


////////////////////////////////////////// 


new Chart(document.getElementById("revenue-expense-chart"), {
  type: 'bar',
  data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [     
        {
          label: "Revenues",
          data: [4500, 4200, 5000, 3900, 6500, 6800, 6600, 5900, 7000, 8900, 9800, 9100],
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderWidth: 1,
          backgroundColor: '#6dbb6d',
          hoverBackgroundColor: '#3eb985',
          
          barPercentage: 0.65,
          categoryPercentage: 0.65
        },
        {
          label: "Expenses",
          data: [ 2000, 1900, 2200, 2100, 1500, 2050, 1220, 2850, 1650, 2500, 2350, 2400],
          borderColor: ('MozAppearance' in document.documentElement.style) ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.05)',
          borderWidth: 1,
          backgroundColor: '#e4e6ea',
          hoverBackgroundColor: 'rgba(240, 181, 82, 0.47)',

          barPercentage: 0.6,
          categoryPercentage: 0.6
        },
        
      ]
  },
  options: {
    cornerRadius: 6,
    legend: {
        display: true
    },
    animation: {
       duration: _animate ? 1000 : false
    },
    scales: {
      yAxes: [{
        ticks: {
          fontFamily: "Open Sans",
          fontColor: "#808489",
          fontStyle: "600",
          fontSize: "12",
          beginAtZero: false,
          maxTicksLimit: 8,
          padding: 16,
          callback: function(value, index, values) {
            var val = parseInt(value / 1000);
            return val > 0 ? val + 'k' : val;
          }
        },
        gridLines: {
          zeroLineColor: "transparent",
            drawTicks: false,
            display: false
        }
      }],
      xAxes: [{
        gridLines: {
            zeroLineColor: "transparent",
            display: true,
            borderDash: [2, 3],
            tickMarkLength: 3
        },
        ticks: {          
          fontFamily: "Open Sans",
          fontColor: "#707479",
          fontSize: "13",
          fontStyle: "400",
          padding: 12
        }
      }]
    },

    tooltips: {
      enabled: true,
      callbacks: {
        label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
                label += ': ';
            }
            label += "$"+ parseFloat(tooltipItem.yLabel / 1000) + 'k';
            return label;
        }
      }
    }
  }
 })


  //////////////////////////////

  var pageViewCanvas = document.getElementById("pageviewschart");
  var ctx1 = pageViewCanvas.getContext('2d');
  var gradient1 = ctx1.createLinearGradient(0, 0, 0, pageViewCanvas.clientHeight);
  gradient1.addColorStop(0, 'rgba(23, 167, 178, 0.3)');   
  gradient1.addColorStop(1, 'rgba(23, 167, 178, 0.1)');

  var gradient2 = ctx1.createLinearGradient(0, 0, 0, pageViewCanvas.clientHeight);
  gradient2.addColorStop(0, 'rgba(22, 176, 255, 0.3)');   
  gradient2.addColorStop(1, 'rgba(22, 176, 255, 0.1)');


  new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        type: 'line',
        label: 'Desktop',
        
        data: [26000, 32000, 22000, 34000, 24000, 20000, 28000, 40000, 28000, 34000, 25000, 40000],

        lineTension: 0,
        borderColor: 'rgba(23, 167, 178, 0.6)',
        borderWidth: 1,

        fill: true,
        backgroundColor : gradient1,

        pointRadius: 10,
        pointBorderWidth: 10,
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.27)',
        pointBorderColor: 'transparent',

        lineTension: 0.3
      },
      {
        type: 'line',
        label: 'Mobile',
        
        data: [12000, 28000, 40000, 30000, 20000, 15000, 15000, 22000, 15000, 16000, 20000, 30500],
        

        lineTension: 0,
        borderColor: 'rgba(22, 176, 255, 0.6)',
        borderWidth: 1,

        fill: true,
        backgroundColor : gradient2,

        pointRadius: 10,
        pointBorderWidth: 10,
        pointBackgroundColor: 'transparent',
        pointHoverBackgroundColor: 'rgba(0, 0, 0, 0.27)',
        pointBorderColor: 'transparent',

        lineTension: 0.3
      }   
     ]
    },
    options: {
      responsive: true,

      animation: {
        duration: _animate ? 1000 : false
      },

      tooltips: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem, data) {
            var label = data.datasets[tooltipItem.datasetIndex].label || '';

            if (label) {
                label += ': ';
            }
            label += parseFloat(tooltipItem.yLabel / 1000) + 'k';
            return  " " + label;
          },
        }
      },

      scales: {
        yAxes: [
            {
              ticks: {
                fontFamily: "Open Sans",
                fontColor: "#85808e",
                fontStyle: "normal",
                fontSize: "13",
                beginAtZero: false,
                maxTicksLimit: 6,
                padding: 12,
                callback: function(value, index, values) {
                  var val = parseInt(value / 1000);
                  return val > 0 ? val + 'k' : val;
                }
              },
              gridLines: {
                display: false,
                drawBorder: false,
                
                borderDash: [2, 4],
                color: '#cbd1d5'
              }
            }
        ],
  
        xAxes: [
          {          
            gridLines: {
              display: false,
              borderDash: [2, 2],
              tickMarkLength: 8,
              color: '#dbe1e5'
            },
            ticks: {
              fontFamily: "Open Sans",
              fontColor: "#75707e",
              fontSize: "13",
              padding: 0
            }
          },
        ]
      },

      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
          generateLabels: function(chart) {
            labels = Chart.defaults.global.legend.labels.generateLabels(chart);
            labels[0].fillStyle = '#75cad0';
            labels[1].fillStyle = '#5dc7fe';
            return labels;
          }
        }
      },
    }
  })

})


// Update conversation's max-height according to available space
var updateScrollAreaHeight = function() {
  var _scroller = document.querySelector('#conversations [class*="ace-scroll"]')
  _scroller.style.display = 'none'
  if (_scroller) _scroller.style.maxHeight = (Math.max(320, _scroller.parentNode.clientHeight)) + 'px'
  _scroller.style.display = ''
}
window.addEventListener('load', updateScrollAreaHeight)
window.addEventListener('resize', updateScrollAreaHeight)