jQuery(function() {
  var slider = document.querySelector("#id-price-slider")
  noUiSlider.create(slider, {
    tooltips: true,
    start: [50, 150],
    connect: true,
    range: {
        'min': 0,
        'max': 200
    },
    format: {
        from: function(value) {
            return parseInt(value)
        },
        to: function(value) {
            return parseInt(value)
        }
    }
  })

  $(slider)
  .find('.noUi-handle').addClass('brc-info-d2 border-2 radius-1').end()
  .find('.noUi-base').addClass('bgc-grey-l1').end()
  .find('.noUi-connect').addClass('bgc-info-d2').end()
  .find('.noUi-tooltip').addClass('bgc-dark-tp1 text-white border-0 text-90 radius-1 px-2')

})