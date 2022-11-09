jQuery(function($) {

  // show tooltips only when not touchscreen
  if (!('ontouchstart' in window)) $('[data-toggle="tooltip"]').tooltip({container: 'body'})


  // display the message only 2 times
  var displayed = parseInt(localStorage.getItem('welcome.classic.ace') || '0');
  if (displayed < 2) {
      localStorage.setItem('welcome.classic.ace', displayed + 1)

      $.aceToaster.add({
        placement: 'tc',
        body: "<div class='py-2 pl-1 pr-3 d-flex '>\
              <span class='d-inline-block mr-2 text-center py-3 px-1'>\
                <i class='pos-abs fa fa-leaf fa-2x w-6 text-dark-m3 mt-2px'></i>\
                <i class='pos-rel fa fa-leaf fa-2x w-6 text-success-m3 mr-1'></i>\
              </span>\
              <div>\
                <h3 class='text-125 text-success'>Welcome to Ace!</h3>\
                <p class='mb-1'>A lightweight, feature-rich, customizable and easy to use admin template!</p>\
              </div>\
              <button data-dismiss='toast' class='btn btn-sm btn-brc-tp btn-lighter-grey btn-h-lighter-danger btn-a-lighter-danger radius-round position-tr mt-1 mr-2px'>\
                <i class='fa fa-times px-1px'></i>\
              </button>\
            </div>",
          
        width: 500,
        delay: 10,
        //sticky: true,

        progress: 'position-tl bgc-success-tp1 pt-3px',
        progressReverse: true,

        close: false,
        //belowNav: true,

        className: 'bgc-white overflow-hidden border-0 p-0 radius-0',

        bodyClass: 'border-1 border-t-0 brc-secondary-l2 text-dark-tp3 text-120 p-2',
        headerClass: 'd-none'
      })
  }


  //////////////////////////////////////////////////
  // Sortable task list
  Sortable.create(document.getElementById('tasks'), {
    draggable: ".task-item",
    filter: "label.checkbox",
    preventOnFilter: false,
    animation: 200,

    ghostClass: "bgc-yellow-l1",  // Class name for the drop placeholder
    chosenClass: "",  // Class name for the chosen item
    dragClass: "",  // Class name for the dragging item
  })

  // toggle tasks checkbox on/off
  $('#tasks input[type=checkbox]').on('change', function() {
    $(this).closest('#tasks > div').toggleClass('bgc-secondary-l4', this.checked).find('label').toggleClass('line-through text-grey-d2', this.checked);
  })



  //////////////////////////////////////////////////
  //draw charts


  // make sure no animation is displayed according to user preferences
  var _animate = !AceApp.Util.isReducedMotion()


  // Traffic Sources piechart
  var trafficSourceCanvas = document.getElementById('traffic-source-chart');

  var trafficSourcePieChart = new Chart(trafficSourceCanvas, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Traffic Sources',
            data: [40.7, 27.5, 9.3, 19.6, 4.9],
            backgroundColor: [
              "#4ca5ae",
              "#f18e5d",
              "#ea789d",
              "#22c1e4",
              "#e2e3e4"
            ],
        }],
        labels: [
            'Social Networks',
            'Search Engines',
            'Ad Campaings',
            'Direct Traffic',
            'Other'
        ]
    },
    
    options: {
        responsive: true,

        cutoutPercentage: 70,
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
                return ' ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%'
              }
            }
        }
    }
  })

  // place the legends
  $(trafficSourceCanvas)
  .parent().after("<div id='traffic-source-legends' class='piechart-legends text-95 text-secondary-d3'>"+trafficSourcePieChart.generateLegend()+"</div>")



  ////////////////////////////
  // the sales stats chart
  var salesChart = document.getElementById("saleschart")
  if (salesChart.parentNode.offsetWidth < 600) {
    salesChart.height = 180
  }

  var salesChartCtx = salesChart.getContext("2d")

  /*** Background Gradient ***/
  var gradient1 = salesChartCtx.createLinearGradient(0, 0, 0, 400)
      gradient1.addColorStop(0, 'rgba(114,193,224, 0.2)')
      gradient1.addColorStop(1, 'rgba(114,193,224, 0)')

  var gradient2 = salesChartCtx.createLinearGradient(0, 0, 0, 300)
      gradient2.addColorStop(0, 'rgba(138,200,138, 0.45)')
      gradient2.addColorStop(1, 'rgba(138,200,138, 0)')

  var gradients = [gradient1, gradient2]

  var chartOptions1 = {
    lineTension: 0.3,
    borderWidth: 1.5,
    pointRadius: 0
  }

  new Chart(salesChartCtx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "In-store",
          data: [3200, 1500, 3500, 2500, 3200, 7000, 2300, 3500, 3500, 6000, 6200, 8100],
  
          borderColor: '#72c1e0',
          pointBorderColor: '#72c1e0',

          fill: true,
          backgroundColor : gradients[0],
          pointBackgroundColor: '#fff',

          borderWidth: chartOptions1.borderWidth,
          pointRadius: chartOptions1.pointRadius,
          lineTension: chartOptions1.lineTension,
        },
        {
          label: "Online",
          data : [2500, 4200, 3000, 4000, 5500, 4800, 4600, 5900, 5800, 8900, 8200, 9000],

          borderColor: '#8ac88a',
          pointBorderColor: '#8ac88a',

          fill: true,
          backgroundColor : gradients[1],
          pointBackgroundColor: '#fff',

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
        titleFontFamily: 'Open Sans',


        bodyFontColor: 'rgba(0, 0, 0, 0.8)',
        bodyFontSize: 14,
        bodyFontFamily: 'Open Sans',
        
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
            fontColor: "#a0a4a9",
            fontStyle: "600",
            fontSize: 12,
            beginAtZero: false,
            maxTicksLimit: 6,
            padding: 16,
            callback: function(value, index, values) {
              var val = parseInt(value / 1000);
              return val > 0 ? val + 'k' : val;
            }
          },
          gridLines: {
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
            fontColor: "#808489",
            fontSize: 13,
            fontStyle: "400",
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



  ///////////
  // the Page views chart in infoboxes
  $('canvas.infobox-line-chart').each(function() {
      var ctx = this.getContext('2d');
      var gradientbg = ctx.createLinearGradient(0, 0, 0, 50);
      gradientbg.addColorStop(0, 'rgba(109, 187, 109, 0.25)');
      gradientbg.addColorStop(1, 'rgba(109, 187, 109, 0.05)');

      let data =  $(this).data('values');
  
      new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                data: data,
                backgroundColor: gradientbg,
                hoverBackgroundColor: '#70bcd9',
                fill: true,
  
                borderColor: 'rgba(109, 187, 109, 0.8)',
  
                borderWidth: 2.25,
                pointRadius: 7,
                lineTension: 0.4,
  
                pointBackgroundColor: 'transparent',
                pointBorderColor: 'transparent',
  
                pointHoverBackgroundColor: 'rgba(109, 187, 109, 0.8)',
                pointHoverBorderColor: 'rgba(109, 187, 109, 0.8)',
              },
              {
                type: 'bar',
                data: data,
                backgroundColor: 'transparent',
                hoverBackgroundColor: 'transparent',
                fill: false,
  
                borderColor: 'transparent',
  
                barPercentage: 0.8
              },
            ]
        },

        options: {

          responsive: false,
          animation: {
            duration: _animate ? 1000 : false
          },
          
          legend: {
              display: false
          },
          layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: -10
            }
          },
          scales: {
              yAxes: [
                  {
                    stacked: true,
                    ticks: {
                      display: false,
                      beginAtZero: true,
                    },
                    gridLines: {
                      display: false,
                      drawBorder: false
                    }
                  }
              ],

              xAxes: [
                {
                  stacked: true,
                  gridLines: {
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    display: false //this will remove only the label
                  }
                },
              ]
           },//scales

           tooltips: {
              // Disable the on-canvas tooltip, because canvas area is small and tooltips will be cut (clipped)
              enabled: false,
              mode: 'index',

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
                  template: '<div class="tooltip" role="tooltip"><div class="brc-info-d2 arrow"></div><div class="bgc-info-d2 tooltip-inner text-600 text-110"></div></div>'
                })
                .tooltip('show')
                .on('hidden.bs.tooltip', function() {
                  canvas.setAttribute('data-original-title', '');//so that when mouse is back over canvas's blank area, no tooltip is shown
                });
       
              }
            }// tooltips
           
        }
    })
  })


  // infobox's circular progress bar
  $('canvas.infobox-progress-chart').each(function() {
    var color = $(this).css('color')

    new Chart(this.getContext('2d'), {
      type: 'doughnut',
      data: {
          datasets: [{
              data: [$(this).data('percent'), 100 - $(this).data('percent')],
              backgroundColor: [
                color,
                  "#e3e5ea"
              ],
              hoverBackgroundColor: [
                color,
                 "#e3e5ea"
              ],
              borderWidth: 0
          }]
      },
      
      options: {
          responsive: false,
          cutoutPercentage: 80,
          legend: {
              display: false
          },
          animation: {
              duration: _animate ? 500 : false,
              easing: 'easeInCubic'
          },
          tooltips: {
              enabled: false,
          }
      }
  })
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