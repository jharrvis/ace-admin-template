jQuery(function($) {

    // set pointer-events to none for dark layers that appear on hover above dark images
    $('#gallery .h-100.w-100').css('pointer-events', 'none')
    //.pswp__button, .pswp__button--arrow--left::before, .pswp__button--arrow--right::before {background-image: svg;}

    var pswpElement = document.querySelector('.pswp')

    var items = null // the items to be used in the lightbox

    var triggerBtns = document.querySelectorAll('.show-lightbox') // these are the buttons/images that are supposed to trigger lightbox for each image when clicked
   
    // and each time we click an image/button to open lightbox, it should be initialized ... this is how the plugin works
    $(triggerBtns)
    .on('click', function(e) {
        e.preventDefault()

        if(items == null) {
            items = []
            $('#gallery img[data-size]').each(function(index, img) {
                var size = img.getAttribute('data-size').split(/\D/)
                items.push({
                    src: img.src.replace('/thumb', '/'),
                    w: size[0], 
                    h: size[1],
                    ref: img,
                    title: img.getAttribute('alt') || 'Image '+(index+1)+' caption'
                })
                triggerBtns[index].setAttribute('data-index', index)
            })
        }

        var options = {
            index: +this.getAttribute('data-index'),

            bgOpacity: 0.8,
            history: false,
            closeOnScroll: false,

            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].ref,
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect()

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width}
            },
            addCaptionHTMLFn: function(item, captionEl) {
                if(!item.title) {
                    return false
                }
                captionEl.children[0].innerHTML = item.title
                return true
            }

        }

        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options)
		gallery.init()
    })// click

})