jQuery(function($) {

    // instead of listening to window `scroll` event, we use `IntersectionObserver`
    // to observe an element and determine when it becomes visible/invisible during scrolling
    
    // when we scroll down, navbar becomes fixed
    // we use a hidden element (#scroll-down) to determine when to do the above

    if (window.IntersectionObserver) {
        var observer = new window.IntersectionObserver(function(entries) {
            var entry = entries[0];
            var isOut = entry.intersectionRatio < 1 && entry.boundingClientRect.y < 0
            if (isOut) {
                $('.navbar').addClass('navbar-compact')
            } else {
                $('.navbar').removeClass('navbar-compact')
            }
        },
        {
            threshold: [1.0],
            delay: 100
        })

        observer.observe(document.getElementById('scroll-down'))
    }
})