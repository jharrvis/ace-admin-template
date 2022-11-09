jQuery(function($) {

  //the slider inside "Settings dropdown"
  var slider = document.querySelector("#id-slider")

  noUiSlider.create(slider, {
    tooltips: true,
    start: 100,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
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

  $(slider).find('.noUi-handle').addClass('brc-info-d1 border-2 radius-3px').end()
  .find('.noUi-base').addClass('bgc-grey-l1').end()
  .find('.noUi-connect').addClass('bgc-info-d1').end()
  .find('.noUi-tooltip').addClass('bgc-info-d1 text-white border-0 text-90 text-600 radius-1 px-2')


  slider.noUiSlider.on('update', function (value) { 
    $('#settings-dropdown').css('opacity', value/100)
  })

})