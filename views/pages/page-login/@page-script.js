$(function($) {

    // because "Login Here" and "Signup now" links are not inside a "UL" or ".nav", they preserve "active" class
    // and we should remove that, to be able to move between tab panes
    $('a[data-toggle="tab"]')
    .on('click', function() {
        $('a[data-toggle="tab"]').removeClass('active')
    })


    // start/show carousel to change backgrounds
    $('#id-start-carousel')
    .on('click', function(e) {
        e.preventDefault()
        $('.carousel-indicators').removeClass('d-none')
        $('#loginBgCarousel').carousel(1)
    })

    var isFullsize = false

    // remove the background/carousel section
    // if you want a compact login page (without the carousel area), you should do so in your HTML
    // but in this demo, we modify HTML using JS
    $('#id-remove-carousel')
    .on('click', function(e) {
        e.preventDefault()

        $('#id-col-intro').remove() // remove the .col that contains carousel/intro
        $('#id-col-main').removeClass('col-lg-7') // remove the col-* class name for the login area

        $('#row-1')
        .addClass('justify-content-center')// so .col is centered

        .find('> .col-12') // change .col-12.col-xl-10, etc to .col-12.col-lg-6.col-xl-5 (so our login area is 50% of document width in `lg` mode , etc)        
        .removeClass('col-12 col-xl-10 offset-xl-1').addClass(!isFullsize ? 'col-12 col-lg-6 col-xl-5' : '')
        

        $('.col-md-8.offset-md-2.col-lg-6.offset-lg-3')// the input elements that are inside "col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3" columns
                                                       // ... remove '.col-lg-6 offset-lg-3' (will become .col-md-8)
        .removeClass('col-lg-6 offset-lg-3')

        // remove "Welcome Back" etc titles that were meant for desktop, and show the other titles that were meant for mobile (lg-) view
        // because this compact login page is similar to mobile view
        $('h4').each(function() {
            var mobileTitle = $(this).parent().next()
            if (mobileTitle.hasClass('d-lg-none')) mobileTitle.removeClass('d-lg-none').prev().remove()
        })
    })


    // make the login area fullscreen
    // if you want a fullscreen login page you should do so in your HTML
    // but in this demo, we modify HTML using JS
    $('#id-fullscreen')
    .on('click', function(e) {
        e.preventDefault()
        if (window.navigator.msPointerEnabled) $('.body-container').addClass('h-100') // for IE only

        isFullsize = true

        $('.main-container').removeClass('container')

        $('.main-content').removeClass('justify-content-center minh-100').addClass('px-4 px-lg-0')
        .children().attr('class', 'd-flex flex-column flex-lg-row flex-grow-1 my-3 m-lg-0') // removes padding classes and add d-flex, etc
        
        $('#row-1')
        .addClass('flex-grow-1')        
        .find('> .col-12').removeClass('shadow radius-1 col-xl-10 offset-xl-1').addClass('d-lg-flex') //remove shadow, etc from, the child .col and add d-lg-flex
        
        $('#row-2').addClass('flex-grow-1')

        $('#id-col-intro').removeClass('col-lg-5').addClass('col-lg-4')
        $('#id-col-main').removeClass('col-lg-7 offset-2').addClass('col-lg-6 mx-auto d-flex align-items-center justify-content-center')
    })

})