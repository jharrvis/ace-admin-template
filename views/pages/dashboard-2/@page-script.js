jQuery(function($) {

  window.currentLayout = 2

  $('#navbar-themes-show-msg').removeClass('d-none')
  $('#navbar-themes-show, #auto-match-div').addClass('d-none')
  $('#id-auto-match').prop('checked', false)
  $('input[value="not-navbar"]').parent().addClass('d-none')



  $('.sidebar .fa-exclamation-triangle').removeClass('text-danger-m2').addClass('text-yellow-m3')
  $('.sidebar .badge-primary').removeClass('badge-primary').addClass('bgc-success-m1 text-dark-d2')

  // show tooltips
  if (!('ontouchstart' in window)) $('[data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip" role="tooltip"><div class="brc-secondary arrow"></div><div class="bgc-secondary-d2 tooltip-inner text-600 text-110 pt-15 pb-2"></div></div>',
    placement: 'left',
    container: 'body'
  })

  // Welcome message
	if (localStorage.getItem('welcome.ace') !== 'displayed' && window.matchMedia('(min-width: 1200px)').matches) {
		$.aceToaster.add({
			placement: 'tc',
      body: "\
          <div class='position-tl w-100 h-100 bgc-black-tp6'></div>\
          <div class='position-tl w-100 h-100 bgc-primary-tp4 opacity-4'></div>\
          <div class='p-25 d-flex pos-rel'>\
						<span class='d-inline-block text-center mb-3 py-3 px-1'>\
							<i class='fa fa-leaf fa-2x w-6 text-white ml-0 mr-25'></i>\
						</span>\
						<div>\
						  <h3 class='text-125'>Welcome to Ace!</small></h3>\
              In this layout, <span class='text-600'>sidebar</span> starts from <span class='bgc-yellow-l2 text-dark-m3 px-2px pb-2px radius-1'>top</span> of the page\
              and <i>navbar</i> is inside content area.\
            </div>\
          </div>\
					<div>\
            <button data-dismiss='toast' class='btn btn-sm btn-outline-white btn-tp border-0 radius-round position-tr mt-15 mr-1'>\
              <i class='fa fa-times px-1px'></i>\
            </button>\
					</div>",
				
			width: 420,
			delay: 8,

      close: false,

			className: 'bgc-green-tp3 text-white shadow overflow-hidden border-0 p-1 radius-3px',

			bodyClass: 'border-0 text-white text-120 p-0 radius-1',
			headerClass: 'd-none',
    })
  
		localStorage.setItem('welcome.ace', 'displayed')// save so that we don't show it again
	}

  //////////////////////////////

  
  // Handle conversation box scrollbars
  let conversations = document.getElementById('conversations')
  conversations.addEventListener('expanded.ace.card', function() {
    // add `.mh-100` (max-height: 100%) when fullscreened
    var el = conversations.querySelector('[class*="ace-scroll"]')
    el.classList.add('mh-100')
  })

  conversations.addEventListener('restore.ace.card', function() {
    // remove `.mh-100` when restored
    var el = conversations.querySelector('[class*="ace-scroll"]')
    el.classList.remove('mh-100')
  })


  // Tasks ... add a `line through` when checked
  $('#tasks input[type=checkbox]')
  .on('change', function() {
    $(this).closest('label').find('.task-title').toggleClass('line-through', this.checked);
  })


  ///////////////////////////////////
  // Draw Charts

  var _animate = !AceApp.Util.isReducedMotion()

  // the small chart in infoboxes
 $('.infobox-line-chart').each(function() {
  new Chart(this, {
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
              type: 'line',
              data: $(this).data('values'),
              backgroundColor: 'transparent',
              hoverBackgroundColor: '#70bcd9',
              fill: true,

              borderColor: 'rgba(109, 187, 109, 0.8)',

              borderWidth: 2.5,
              pointRadius: 7,
              lineTension: 0.4,

              pointBackgroundColor: 'transparent',
              pointBorderColor: 'transparent'
            }
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
            left: -10,
            right: 0,
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
              template: '<div class="tooltip" role="tooltip"><div class="brc-info-d2 arrow"></div><div class="bgc-info-d2 tooltip-inner font-bolder text-110"></div></div>'
            })
            .tooltip('show')
            .on('hidden.bs.tooltip', function() {
              canvas.setAttribute('data-original-title', '');//so that when mouse is back over canvas's blank area, no tooltip is shown
            });
    
          }
        }//tooltips
      }
  })

 })



  // The task progress piechart inside infoboxes
 $('.infobox-piechart').each(function() {
  var val = parseInt($(this).data('value'))
  new Chart(this, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Task Progress',
            data: [val, 100 - val],
            backgroundColor: [
                "#6775b3",
                "#e1e3f0",
            ],
            hoverBackgroundColor: [
              "#6775b3",
              "#e1e3f0",
            ],
            borderWidth: 0
        }]
    },
    
    options: {
        responsive: true,

        cutoutPercentage: 80,
        legend: {
            display: false
        },
        animation: {
          // animateScale: true,
            animateRotate: true,
            duration: _animate ? 1000 : false
        },
        tooltips: {
            enabled: false
        }
    }
  })
 })

  //////////

  // sale stats chart
  var salesChart = document.getElementById("sales-chart")
  if (salesChart.parentNode.offsetWidth < 600) {
    salesChart.style.height = '180px'
  }
  else if (salesChart.parentNode.offsetWidth < 800) {
    salesChart.style.height = '240px'
  }

  var salesChartCtx = salesChart.getContext("2d")

  /*** Gradient Backgrounds ***/
  var gradient1 = salesChartCtx.createLinearGradient(0, 0, 0, 400)
      gradient1.addColorStop(0, 'rgba(114,193,224, 0.2)')
      gradient1.addColorStop(1, 'rgba(114,193,224, 0)')

  var gradient2 = salesChartCtx.createLinearGradient(0, 0, 0, 300)
      gradient2.addColorStop(0, 'rgba(138,200,138, 0.45)')
      gradient2.addColorStop(1, 'rgba(138,200,138, 0)')

  var gradients = []
      gradients.push(gradient1, gradient2)


  var chartOptions1 = {
    lineTension: 0.3,
    borderWidth: 1.5,
    pointRadius: 6
  }

  new Chart(salesChartCtx, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "In-store",
          data: [ 0, 2000, 8000, 2000, 500, 2000, 1000, 4000, 2000, 5000, 3500, 4000],
  
          borderColor: '#8ac88a',
          pointBorderColor: 'transparent',          
  
          fill: true,
          backgroundColor : gradients[1],
          pointBackgroundColor: 'transparent',
          pointHoverBorderColor: '#8ac88a',
          pointHoverBackgroundColor: '#8ac88a',
          pointHoverRadius: 8,
        
          
          borderWidth: chartOptions1.borderWidth,
          pointRadius: chartOptions1.pointRadius,
          lineTension: chartOptions1.lineTension,
        },
        {
        label: "Online",
        data : [1500, 3200, 2500, 3000, 4500, 3800, 3600, 4900, 4800, 7900, 7200, 9100],
        
        borderColor: '#72c1e0',
        pointBorderColor: 'transparent',

        fill: true,
        backgroundColor : gradients[0],
        pointBackgroundColor: 'transparent',
        pointHoverBorderColor: '#72c1e0',
        pointHoverBackgroundColor: '#72c1e0',
        pointHoverRadius: 8,

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
            fontColor: "#a0a4a9",
            fontStyle: "600",
            fontSize: "12",
            beginAtZero: false,
            maxTicksLimit: 3,
            padding: 16,
            callback: function(value, index, values) {
              var val = parseInt(value / 1000)
              return val > 0 ? val + 'k' : val
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
            fontSize: "13",
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

  //////////////////////////////////////////

  // revenue vs expense bar chart
  new Chart(document.getElementById("revenue-expense-chart").getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [     
          {
            label: "Revenue",
            data: [4500, 4200, 5000, 3900, 6500, 6800, 6600, 5900, 7000, 8900, 9800, 9100],

            borderWidth: 0,
            backgroundColor: '#47c28f',
            hoverBackgroundColor: '#47c28f',
            
            barPercentage: 0.7,
            categoryPercentage: 0.7
          },
          {
            label: "Expense",
            data: [ 2000, 1900, 2200, 2100, 1500, 2050, 1220, 2850, 1650, 2500, 2350, 2400],

            borderWidth: 0,
            backgroundColor: '#f0b34e',
            hoverBackgroundColor: '#f0b34e',

            barPercentage: 0.6,
            categoryPercentage: 0.6
          },
          
        ]
    },
    options: {
      cornerRadius: 4,
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
            fontColor: "#a0a4a9",
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
            fontColor: "#808489",
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


  ////////////////////////////////
  
  // Traffic Sources piechart
  var config_traffic_sources = {
    type: 'doughnut',
    data: {
        datasets: [{
            label: 'Traffic Sources',
            data: [40.7, 27.5, 9.3, 21.6, 2.9],
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
            'Ad Campaings',
            'Direct Traffic',
            'Other'
        ]
    },
    
    options: {
        responsive: true,

        cutoutPercentage: 78,
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


  var trafficSourceCanvas = document.getElementById('traffic-source-chart')
  var trafficSourcePieChart = new Chart(trafficSourceCanvas, config_traffic_sources)

  // place legends
  $(trafficSourceCanvas).parent().after("<div id='traffic-source-legends' class='piechart-legends text-95 text-secondary-d3'>"+trafficSourcePieChart.generateLegend()+"</div>")

  var trafficSourceChart_Legends_Wrapped = document.getElementById('traffic-source-legends').offsetTop > trafficSourceCanvas.offsetTop + trafficSourceCanvas.offsetHeight

  var demographicsChart = document.getElementById("demographics-chart")

  if (trafficSourceChart_Legends_Wrapped) {
    // In traffic source piechart when legends go below the chart (wrapped below), it means we have extra height.
    // So let's make demographics chart taller as well
    demographicsChart.height = parseInt(demographicsChart.parentNode.parentNode.clientHeight * 0.66);
  }


  // Demographics bar chart
  new Chart(demographicsChart.getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
        datasets: [
          {
            label: "Female",
            data: [15, 38, 21, 16, 7, 3],
            borderWidth: 0,
            backgroundColor: '#44a3e2',
            hoverBackgroundColor: '#69b7ea',
            
            categoryPercentage: 0.6
          },
          {
            label: "Male",
            data: [12, 32, 17, 14, 6, 1.5],
            borderWidth: 0,
            backgroundColor: '#eca022',
            hoverBackgroundColor: '#f5b03e',

            categoryPercentage: 0.6
          },
          
        ]
    },
    options: {
      cornerRadius:2,
      legend: {
          display: true
      },
      animation: {
        duration: _animate ? 1000 : false
      },
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            fontFamily: "Open Sans",
            fontColor: "#a0a4a9",
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
              display: false
          },
          ticks: {          
            fontFamily: "Open Sans",
            fontColor: "#808489",
            fontSize: "13",
            fontStyle: "400",
            padding: 12
          }
        }]
      },

      legend: {
        display: false,
      },

      tooltips: {
        enabled: true,
        callbacks: {
          label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';

              if (label) {
                  label += ': ';
              }
              label += tooltipItem.yLabel + 'k';
              return ' ' + label;
          }
        }
      }

    }
  })



  // User Devices piechart
  var config_user_devices = {
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

        cutoutPercentage: 78,
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



  var userDevicePieChart = new Chart(document.getElementById('user-device-chart'), config_user_devices);

  // place legends
  $(document.getElementById('user-device-chart')).parent().after("<div id='user-device-legends' class='piechart-legends text-95 text-secondary-d3'>"+userDevicePieChart.generateLegend()+"</div>")

  if(trafficSourceChart_Legends_Wrapped) {
    // In traffic source piechart when legends go below the chart (wrapped below), it means we have extra height.
    // So let's do the same for userDevice piechart and move legends below it
    var p = document.getElementById('user-device-legends').parentNode
    p.classList.add('flex-column')
    p.classList.remove('align-items-start')
    p.classList.add('align-items-center')
  }

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