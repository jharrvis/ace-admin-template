jQuery(function($) {
    var bodyContainer = document.querySelector('.body-container')
    // for sticky nav to work
    // overflow is visible by default in desktop modes, but it's hidden in mobile to prevent horizontal scrollbars
    bodyContainer.style.overflow = 'visible'

    var profileTabs = document.querySelector('.sticky-nav')
    profileTabs.addEventListener('sticky-change', function(e) {
        // when tabs become sticky, add is-stuck class (see @page-style.css)
        this.classList.toggle('is-stuck', e.detail.isSticky)
    })
    
    $('#sidebar')
    .on('show.ace.sidebar', function() {
        if (this.classList.contains('sidebar-push') ) {
            bodyContainer.style.overflow = '' // so we don't have body scrollbars
        }
    })
    .on('hide.ace.sidebar', function() {
        if (this.classList.contains('sidebar-push') ) {
            bodyContainer.style.overflow = 'visible' //so we have our sticky nav back
        }
    })


    var _animate = !AceApp.Util.isReducedMotion()

    // progress chart showing user skills
    var skillData = [74, 68, 50]
    var skillColor = ['green-m1', 'purple-m1', 'primary-m1']
    var skillTextColor = ['secondary-d3', 'secondary-d3', 'secondary-d3']
    var skillName = ['HTML &amp; CSS', 'Angular', 'Backend']


    for(var p = 0; p < skillData.length; p++) {
       var canvas =
       $('<div class="pos-rel m-2 text-center text-'+skillColor[p]+'" style="max-width: 30%;">\
            <canvas height="100" width="100"></canvas>\
            <span class="position-center text-85 text-600 text-'+skillTextColor[p]+'">'+skillName[p]+'</span>\
        </div>')
  
       $('#skill-chart').append(canvas)
       var color = canvas.css('color')
       canvas = canvas.find('canvas')

       var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [skillData[p], 100 - skillData[p]],
                    backgroundColor: [
                        color,
                        "#dbe7ed"
                    ],
                    hoverBackgroundColor: [
                        color,
                        "#dbe7ed"
                    ],
                    borderWidth: 0
                }]
            },
            
            options: {
                responsive: true,
                cutoutPercentage: 88,
                rotation: Math.PI * 0.5,
                legend: {
                    display: false
                },
                animation: {
                    //animateScale: true,
                    duration: _animate ? 500 : 0,
                },
                tooltips: {
                    enabled: false,
                }
            }
        }

        new Chart(canvas.get(0), config)
    }


    //////////////////////////////
    // file input in edit profile

    $('#id-field0').aceFileInput({
        style: 'drop',
        droppable: true,
    
        container: 'border-1 border-dashed brc-grey-m4 brc-h-warning-m1',
    
        placeholderClass: 'text-125 text-600 text-grey-l1 my-2',
        placeholderText: 'Drop profile image or click to choose',
        placeholderIcon: '<i class="fa fa-user fa-3x text-green-m3 my-2"></i>',
    
        thumbnail: 'large',

        allowExt: 'gif|jpg|jpeg|png|webp|svg'
    })

})