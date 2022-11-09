jQuery(function($) {

  //enable ripple effect ... see also @page-style.css
  $('#id-ripple').on('click', function() {
    Waves.attach('.btn:not([class*="btn-light"]):not([class*="btn-h-light"]):not([class*="btn-h-outline"])', ['waves-light'])
    Waves.attach('.btn[class*="btn-h-outline"]:not([class*="btn-a-outline"])', ['waves-light'])

    Waves.attach('.btn[class*="btn-light"]')
    Waves.attach('.btn[class*="btn-h-light"][class*="btn-a-light"]')
    Waves.attach('.btn[class*="btn-h-outline"][class*="btn-a-outline"]')

    Waves.init()
    
    this.setAttribute('disabled', 'disasbled')
    this.blur()

    $('#btn-app-1 .badge').removeClass('m-n2')
  })

})