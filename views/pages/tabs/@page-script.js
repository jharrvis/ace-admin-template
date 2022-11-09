jQuery(function($) {
    // in `tabs-below` and `tabs-right` example we have button[data-toggle=next] elements
    $('[data-toggle=next]')
    .on('click', function(e) {
        e.preventDefault()

        $(this)
        .closest('.card-body')
        .find('a[data-toggle=tab][href="'+this.getAttribute('href')+'"]')
        .tab('show')
    })
})