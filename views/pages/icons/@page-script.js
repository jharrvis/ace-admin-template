jQuery(function($) {

    // change sidebar icons to material icons
    $('#id-material')
    .on('click', function() {
        var icons = ['home', 'dashboard', 'computer', 'border_all', 'edit', 'dashboard', 'calendar_today', 'camera', 'apps']
        $('.sidebar')
        .find('.nav > .nav-item > .nav-link > .nav-icon')
        .each(function(index, e) {
            $(this)
            .after('<i class="material-icons-outlined nav-icon">'+icons[index]+'</i>')
            .remove()
        })

        $('.sidebar')
        .find('.caret')
        .attr('class', 'caret rt-n90 material-icons-outlined')
        .html('chevron_left')
    })


    // change sidebar icons to jam icons
    $('#id-jamicons')
    .on('click', function() {
        var icons = ['dashboard', 'layout', 'computer-alt', 'grid', 'pencil', 'task-list', 'calendar', 'picture', 'tag']
        $('.sidebar')
        .find('.nav > .nav-item > .nav-link > .nav-icon')
        .each(function(index, e) {
            $(this)
            .after('<i class="nav-icon jam jam-'+icons[index]+'"></i>')
            .remove()
        })

        $('.sidebar')
        .find('.caret')
        .attr('class', 'caret rt-n90')
        .addClass('jam jam-chevron-left')
        .html('')
    })


    // change sidebar icons to eva icons
    $('#id-evaicons')
    .on('click', function() {
        var icons = ['home-outline', 'layout-outline', 'monitor-outline', 'grid-outline', 'edit-2-outline', 'browser-outline', 'calendar-outline', 'image-outline', 'cube-outline']
        $('.sidebar')
        .find('.nav > .nav-item > .nav-link > .nav-icon')
        .each(function(index, e) {
            $(this)
            .after('<i class="nav-icon eva eva-'+icons[index]+'"></i>').
            remove()
        })

        $('.sidebar')
        .find('.caret')
        .attr('class', 'caret rt-n90')
        .addClass('eva eva-chevron-left-outline')
        .html('')
    })


    // change sidebar icons back to fontawesome icons
    $('#id-fontawesome')
    .on('click', function() {
        var icons = ['fa fa-tachometer-alt', 'fa fa-cube', 'fa fa-desktop', 'fa fa-table', 'fa fa-edit', 'fa fa-list', 'far fa-calendar-alt', 'far fa-image', 'fa fa-tag']
        $('.sidebar')
        .find('.nav > .nav-item > .nav-link > .nav-icon')
        .each(function(index, e) {
            $(this).after('<i class="nav-icon '+icons[index]+'"></i>').remove()
        })

        $('.sidebar')
        .find('.caret')
        .attr('class', 'caret rt-n90')
        .addClass('fa fa-angle-left')
        .html('')
    })

})