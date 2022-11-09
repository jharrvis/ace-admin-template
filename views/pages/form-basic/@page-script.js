jQuery(function($) {

  // disable/enable the `readonly` input
  $('#id-checkbox-disable-it')
  .prop('checked', false)
  .on('click', function() {
    var inp = document.getElementById('id-disable-me')
    inp.disabled = this.checked
    if (this.checked) {
      inp.removeAttribute('readonly')
      inp.value = 'This text field is disabled!'
    }
    else {
      inp.setAttribute('readonly', '')
      inp.value = 'This text field is readonly!'
    }
  })


  $('#toggle-password')
  .on('click', function(e) {
    e.preventDefault()
    $(this).toggleClass('active')

    var inp = document.getElementById('id-form-field-password-toggle')
    inp.type = $(this).hasClass('active') ? 'text' : 'password'
    inp.focus()
  })



  // input with tooltip and popover example
  $('#tooltip-1').tooltip({
    container: 'body',
    template: '<div class="tooltip" role="tooltip"><div class="arrow brc-success-m1"></div><div class="bgc-success-m1 tooltip-inner text-dark text-600 text-110 px-2 pb-2"></div></div>'
  })

  $('#popover-1').popover({
    container: 'body',
    trigger: 'click',
    placement: 'auto',
    template: '<div class="popover brc-primary-m2" role="tooltip"><div class="arrow arrow2 brc-white"></div><div class="arrow brc-primary-m1"></div><h3 class="popover-header bgc-primary-l2 border-0 text-115 text-dark-tp3"></h3><div class="popover-body text-grey-d2 text-105"></div></div>'
  })



  // textarea limiter
  $('#id-textarea-limit1').maxlength({
    alwaysShow: true,
    allowOverMax: false,

    warningClass: "badge badge-dark",
    limitReachedClass: "badge badge-warning",
    placement: 'bottom-right-inside'
  })

  $('#id-textarea-limit2').maxlength({

    alwaysShow: true,
    allowOverMax: false,
    appendToParent: true,

    warningClass: "w-100 popover bs-popover-bottom  brc-primary-m2 border-2",
    limitReachedClass: "w-100 popover bs-popover-bottom brc-danger-m2 border-2",
    placement: 'bottom',

    message: function(currentText, maxLength) { 
      return '<div class="arrow '+(maxLength == currentText.length ? 'brc-danger': 'brc-primary')+'" style="left:calc(50% - 0.5rem)"></div>\
              <div class="popover-body">'+(Math.max(0, maxLength - currentText.length))+' characters remaining ...\
              <div class="h-1"></div> max allowed: '+maxLength+'!</div>'
    }
  })

  $('.indeterminate').prop('indeterminate', true)


  //autosize for textarea
  autosize($('#id-textarea-autosize'))


  ///////////////////////////////////////////////
  //masked input
  try {//not working in IE11
    $("#form-field-mask-1").inputmask("99/99/9999")
    $("#form-field-mask-2").inputmask("(999) 999-9999")
    $("#form-field-mask-3").inputmask("a*-999-a999")
    $("#form-field-mask-4").inputmask("~9.99 ~9.99 999")
    //$("").inputmask("9-a{1,3}9{1,3}")
  } catch(e) {}


  ///////////////////////////////////////////////
  // ionRangeSlider (the last red slider)
  $("#id-ionslider-1").ionRangeSlider()

  // noUiSlider
  // the vertical green slider
  var slider1 = $("#id-slider-1").css({'height': '260px', 'z-index': 10}).get(0)// z-index for tooltip to appear above purple slider
  noUiSlider.create(slider1, {
    orientation: "vertical",
    tooltips: true,
    start: [20, 80],
    connect: true,
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

  $(slider1).find('.noUi-handle').addClass('brc-success-d2 slider-bars-h').end()
            .find('.noUi-connect').addClass('bgc-success-d1').end()
            .find('.noUi-tooltip').addClass('opacity-1 bgc-success-d2 brc-success-d2 text-white radius-3 px-3')


  // the first horizontal slider with round handles
  var slider2 = document.querySelector("#id-slider-2")
  noUiSlider.create(slider2, {
    tooltips: true,
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
  })

  $(slider2)
  .find('.noUi-handle').addClass('brc-info-d2 border-2 radius-round slider-bars-none').end()
  .find('.noUi-base').addClass('bgc-grey-l1').end()
  .find('.noUi-connect').addClass('bgc-info-d2').end()
  .find('.noUi-tooltip').addClass('bgc-dark-tp1 text-white border-0 text-90 radius-1 px-2')


  // the purple slider
  var slider3 = document.querySelector("#id-slider-3");
  noUiSlider.create(slider3, {
    tooltips: true,
    start: 50,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
  });
  $(slider3).find('.noUi-handle').addClass('border-3 brc-purple-tp1 bgc-white-tp1 radius-1').end()
  .find('.noUi-connect').addClass('bgc-purple-tp1').end()
  .find('.noUi-tooltip').addClass('bgc-dark-tp1 text-white border-0 text-90 radius-1 px-2');


  // the third (disabled) slider
  var slider4 = document.querySelector("#id-slider-4");
  noUiSlider.create(slider4, {
    tooltips: true,
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
  });

  slider4.setAttribute('disabled', true);
  $(slider4).find('.noUi-handle').addClass('brc-primary').end()
            .find('.noUi-connect').addClass('bgc-primary-tp1').end()
            .find('.noUi-tooltip').addClass('bgc-dark-tp1 text-white border-0 text-90 radius-1 px-2');



  // the orange slider
  var slider5 = document.querySelector("#id-slider-5")
  noUiSlider.create(slider5, {
    tooltips: false,
    start: 10,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
  })
  $(slider5).find('.noUi-handle').addClass('brc-white-tp1 bgc-warning-d2 radius-round slider-bars-none shadow').css('border-width', '8px').end()
  .find('.noUi-base').addClass('bgc-grey-l2').end()
  .find('.noUi-connect').addClass('bgc-warning').end()



  //////////////////////////////////////////

  // input spinner
  $("#id-spinner-1").TouchSpin({
    min: 0,
    max: 100,
    step: 0.1,
    decimals: 2,
    boostat: 5,
    maxboostedstep: 10,
    postfix: '%',

    buttondown_class: 'btn btn-danger',
    buttonup_class: 'btn btn-success',

    buttondown_txt: '<i class="fa fa-minus"></i>',
    buttonup_txt: '<i class="fa fa-plus"></i>',
  })


  $("#id-spinner-2").TouchSpin({
    verticalbuttons: true,

    buttondown_class: 'btn btn-xs btn-info',
    buttonup_class: 'btn btn-xs btn-info',

    verticaldownclass: '',
    verticalupclass: '',

    verticaldown: '<i class="fa fa-angle-down"></i>',
    verticalup: '<i class="fa fa-angle-up"></i>',
  })


  $("#id-spinner-3").TouchSpin({
    verticalbuttons: true,

    buttondown_class: 'btn btn-xs btn-primary',
    buttonup_class: 'btn btn-xs btn-primary',

    verticaldownclass: '',
    verticalupclass: '',

    verticaldown: '<i class="fa fa-caret-down"></i>',
    verticalup: '<i class="fa fa-caret-up"></i>',
  })


  /////////////////////////////////////////

  // custom ace file input

  // simple
  $('#ace-file-input1').aceFileInput({      
    /**
    btnChooseClass: 'bgc-grey-l2 pt-15 px-2 my-1px mr-1px',
    btnChooseText: 'SELECT FILE',
    placeholderText: 'NO FILE YET',
    placeholderIcon: '<i class="fa fa-file bgc-warning-m1 text-white w-4 py-2 text-center"></i>'
    */
  })
  $('#ace-file-input11').aceFileInput({      
    btnChooseClass: 'bgc-grey-l2 pt-15 px-2 my-1px mr-1px',
    btnChooseText: 'เลือกรูปภาพ',
    placeholderText: 'ยังไม่มีรูปภาพอัพโหลดครับ',
    placeholderIcon: '<i class="fa fa-images bgc-info-m1 text-white w-4 py-2 text-center"></i>'
  })

  // multiple with image preview
  $('#ace-file-input2').aceFileInput({
    style: 'drop',
    droppable: true,

    container: 'border-1 border-dashed brc-grey-l1 brc-h-info-m2 shadow-sm',

    placeholderClass: 'text-125 text-600 text-grey-l1 my-2',
    placeholderText: 'Drop images here or click to choose',
    placeholderIcon: '<i class="fa fa-cloud-upload-alt fa-3x text-info-m2 my-2"></i>',

    //previewSize: 64,
    thumbnail: 'large',

    //allowExt: 'gif|jpg|jpeg|png|webp|svg',
    //allowMime: 'image/png|image/jpeg',
    allowMime: 'image/*',

    //maxSize: 100000,
  })

  let fileInput = document.getElementById('ace-file-input2')
  fileInput.addEventListener('changed.ace.file', function(e) {
    // get dropped/selected files

    // console.log(e.$_selectedFiles.method)
    // console.log(e.$_selectedFiles.list)
  })

  fileInput.addEventListener('invalid.ace.file', function(e) {
    // console.log(e.$_fileErrors)    
  })

  fileInput.addEventListener('preview_failed.ace.file', function(e) {
    // console.log(e.$_previewError)
    // if(e.$_previewError && e.$_previewError.code == 2) alert(e.$_previewError.filename + ' is not an image!')
  })

  fileInput.addEventListener('clear.ace.file', function(e) {
    // e.preventDefault()
  })

  // some available methods

  // $('#ace-file-input2').aceFileInput('disable')
  // $('#ace-file-input2').aceFileInput('startLoading')

  // $('#ace-file-input2').aceFileInput('showFileList', [{name: 'avatar3.jpg', type: 'image', path: 'assets/image/avatar/avatar3.jpg'} , {name: 'avatar2.jpg', type: 'image', path: 'assets/image/avatar/avatar2.jpg'}])
  // $('#ace-file-input1').aceFileInput('showFileList', [{name: '2.txt', type: 'document'}])
  // $('#ace-file-input1').aceFileInput('resetInput');



  //////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////


  // datepicker
  var TinyDatePicker = DateRangePicker.TinyDatePicker;
  TinyDatePicker('#id-date-1', {
    mode: 'dp-below',
  })
  .on('statechange', function(ev) {
      
  })

  // modal one
  TinyDatePicker('#id-date-2', {
    mode: 'dp-modal',
  }).on('statechange', function(ev) {
    // console.log(ev);
  })


  // third one
  // on mobile devices show native datepicker
  if( 'ontouchstart' in window && window.matchMedia('(max-width: 600px)') ) {
    document.querySelector('#id-date-3').setAttribute('type', 'date')
  }
  else {
    TinyDatePicker('#id-date-3', {
      mode: 'dp-modal',
   })
  }

  //////
  // date range picker example
  var daterange_container = document.querySelector('#id-daterange-container')
  // Inject DateRangePicker into our container
  DateRangePicker.DateRangePicker(daterange_container, {
      mode: 'dp-modal'
  })
  .on('statechange', function (_, rp) {
      // Update the inputs when the state changes
      var range = rp.state
      $('#id-daterange-from').val( range.start.getFullYear() + '' + (range.start.getMonth() + 1).toString().padStart(2, "0") + '' + range.start.getDate().toString().padStart(2, "0") )
      $('#id-daterange-to').val( range.end.getFullYear() + '' + (range.end.getMonth() + 1).toString().padStart(2, "0") + '' + range.end.getDate().toString().padStart(2, "0") )
  })

  $('#id-daterange-from, #id-daterange-to').on('focus', function() {    
    daterange_container.classList.add('visible')
  })

  var daterange_wrapper = document.querySelector('#id-daterange-wrapper')
  var previousTimeout = null;
  $( daterange_wrapper ).on('focusout', function() {
      if(previousTimeout) clearTimeout(previousTimeout)
      previousTimeout = setTimeout(function() {
        if ( !daterange_wrapper.contains(document.activeElement) ) {
          daterange_container.classList.remove('visible')
        }
      }, 10)
  })



  ////////////////////////
  // Datetimepicker plugin
  $('#id-timepicker').datetimepicker({
    icons: {
      time: 'far fa-clock text-green-d1 text-120',
      date: 'far fa-calendar text-blue-d1 text-120',

      up: 'fa fa-chevron-up text-secondary',
      down: 'fa fa-chevron-down text-secondary',
      previous: 'fa fa-chevron-left text-secondary',
      next: 'fa fa-chevron-right text-secondary',

      today: 'far fa-calendar-check text-purple-d1 text-120',
      clear: 'fa fa-trash-alt text-orange-d2 text-120',
      close: 'fa fa-times text-danger text-120'
    },

    // sideBySide: true,

    toolbarPlacement: "top",

    allowInputToggle: true,
    // showClose: true,
    // showClear: true,
    showTodayButton: true,

    //"format": "HH:mm:ss"
  })

  //***** NOTE *******//
  // the above `date/time` picker plugin was designed for BS3.
  // To make it work with BS4, the following piece of code is required
  $('#id-timepicker')
  .on('dp.show', function() {
    $(this).find('.collapse.in').addClass('show')
    $(this).find('.table-condensed').addClass('table table-borderless')

    $(this).find('[data-action][title]').tooltip() // enable tooltip
  })

  // now listen to the `.collapse` events inside this datetimepicker accordion (one `.collapse` is for timepicker, the other one is for datepicker)
  // then add or remove the old `in` BS3 class so the plugin works correctly
  $(document)
  .on('show.bs.collapse', '.bootstrap-datetimepicker-widget .collapse', function() {
    $(this).addClass('in')
  }).on('hide.bs.collapse', '.bootstrap-datetimepicker-widget .collapse', function() {
    $(this).removeClass('in')
  })



  //////////////////////////////////
  // the small time picker inside popover

  $('#id-popover-timepicker')
  .popover({
    title: 'Choose Time',
    sanitize: false,
    content: function() {
      return $('#id-popover-timepicker-html').html()
    },
    html: true,
    placement: 'auto',
    trigger: 'manual',
    container: 'body',

    template: '<div class="popover popover-timepicker brc-primary-m3 border-1 radius-1 shadow-sm" role="tooltip"><div class="arrow brc-primary"></div><h3 class="popover-header bgc-primary-l3 brc-primary-l1 text-dark-tp4 text-600 text-center pb-25"></h3><div class="popover-body text-grey-d2 p-4"></div></div>'
  })
  .on('click', function() {
    // show popover when button is clicked
    $(this).popover('toggle')
    $(this).toggleClass('active')

    // get a reference to it
    var popover = $(document.body).find('.popover-timepicker').last()

    // hide popover if clicked outside of it
    if(popover.length > 0 && popover.hasClass('show')) {
      var This = this
      $(document).on('click.popover-time', function(ev) {
        if(popover.get(0).contains(ev.target) || ev.target == document.getElementById('id-popover-timepicker')) return
        $(This).popover('hide')
        $(This).removeClass('active')

        $(document).off('.popover-time')
      })
    }
  })



  ////////////////////////////////////
  // color picker

  try {
    $('#id-color-picker-1').colorpicker({
      container: true,
      extensions: [
        {
          name: 'swatches',
          options: {
            colors: {
              'tetrad1': '#f00',
              'tetrad2': '#00f',
              'tetrad3': '#eee',
              'tetrad4': '#ddd'
            },
            namesAsValues: false
          }
        }
      ]
    })
    .on('colorpickerChange', function(event) {
      $('#id-color-picker-1-update').css('background-color', event.color.toString())
    })
  }
  catch(err) {
    $('#id-color-picker-1').attr('placeholder', 'Plugin not loaded...')
  }


  ////////////////////////////////////
  // the other colorpicker
  var colorPicker = new iro.ColorPicker("#color-picker-container", {
    // Set the size of the color picker
    width: 160,
    // Set the initial color to pure red
    color: "#f00"
  })
  colorPicker
  .on('color:change', function(color, changes) {
    //console.log(color.hexString);
  })



  ////////////////////////////////////////
  // Knob input

  $('.knob').knob()

})