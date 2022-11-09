jQuery(function($) {
    $('#tooltip').tooltip()

    // tooltips with custom templates
    $('#tooltip-1')
    .tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="brc-secondary-d3 arrow"></div><div class="bgc-secondary-d3 tooltip-inner text-105 text-600"></div></div>'
    })

    $('#tooltip-2')
    .tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow brc-danger-d3"></div><div class="bgc-danger-d3 tooltip-inner text-110 text-600 p-2"></div></div>'
    })

    $('#tooltip-3')
    .tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow brc-success-d3"></div><div class="bgc-success-d3 tooltip-inner text-dark-tp3 text-600 text-110 px-2 pb-15"></div></div>'
    })

    $('#tooltip-4')
    .tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow brc-yellow-d1"></div><div class="bgc-yellow-d1 tooltip-inner text-dark-tp2 text-110 text-600 px-2 pb-15"></div></div>'
    })

    $('#tooltip-5')
    .tooltip({
        template: '<div class="tooltip" role="tooltip"><div class="arrow brc-purple-d2"></div><div class="shadow border-2 radius-2 brc-purple-d2 bgc-purple-l4 tooltip-inner text-dark-tp1 text-110 text-600 px-2 pb-15"></div></div>'
    })


    // popovers
    $('#popover-1')
    .popover({
        container: 'body',
        trigger: 'focus'
    })

    // popovers with custom templates
    $('#popover-2')
    .popover({
        container: 'body',
        trigger: 'focus',
        template: '<div class="popover brc-primary-m2 border-b-2" role="tooltip"><div class="arrow arrow2 brc-primary-l2"></div><div class="arrow brc-primary-m1"></div><h3 class="popover-header bgc-primary-l2 border-0 text-110 text-dark-tp3 text-600"></h3><div class="popover-body text-grey-d3 text-105"></div></div>'
    })

    $('#popover-3')
    .popover({
        container: 'body',
        trigger: 'focus',
        template: '<div class="popover brc-success-m3" role="tooltip"><div class="arrow brc-success"></div><h3 class="popover-header border-0 bgc-success-m2 text-dark-tp4 text-600"></h3><div class="popover-body text-grey-d2 text-110"></div></div>'
    })

    $('#popover-4')
    .popover({
        container: 'body',
        trigger: 'focus',
        template: '<div class="popover bgc-white brc-purple-m3 border-2" role="tooltip"><div class="arrow brc-purple"></div><div class="popover-body text-grey-d2 text-110"></div></div>'
    })

    $('#popover-5')
    .popover({
        container: 'body',
        trigger: 'focus',
        template: '<div class="popover bgc-brown-d3 border-0" role="tooltip"><div class="arrow arrow2 brc-brown-d3"></div><div class="popover-body text-white text-110 text-600"></div></div>'
    })

})
