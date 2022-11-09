jQuery(function($) {

  // The button inside navbar that hides sidebar
  $('#hide-sidebar')
  .on('click', function() {
    // if sidebar is expanded, then first change it to `hideable` mode and then collapse it
    if ($('#sidebar1').is('.expandable:not(.collapsed)')) {
      $('#sidebar1')
      .removeClass('expandable')
      .addClass('hideable')
      .aceSidebar('collapse')
  
      this.classList.add('collapsed')
    }

    // if it's collapsed, change it from `expandable` to `hideable` mode
    else if ($('#sidebar1').is('.expandable.collapsed')) {      
      $('#sidebar1')
      .removeClass('expandable')
      .addClass('hideable')

      this.classList.add('collapsed')
    }

    // if it's hidden, change it from `hideable` to `expandable` mode and expand it back
    else if ($('#sidebar1').is('.hideable.collapsed')) {      
      $('#sidebar1')
      .removeClass('hideable')
      .addClass('expandable')
      .aceSidebar('expand')
  
      this.classList.remove('collapsed')
    }
  })


  ////////////////////////////////////
  // The `move sidebar to right` button
  $('#id-btn-sidebar-right')
  .on('click', function() {
    $('#sidebar1').toggleClass('sidebar-right')
    $('#sidebar1 .nav').toggleClass('has-active-arrow')
  })


  ////////////////////////////////////
  // Change `sidebar2` texts to make them shorter for horizontal menu
  var sidebarNames = ['Home', 'Layouts', 'Elements', 'Tables', 'Forms', 'Cards', 'Calendar', 'Gallery', 'More']
  $('#sidebar2 .nav > .nav-item > .nav-link > .nav-text > span:first-child')
  .each(function(index) {
    $(this).text(sidebarNames[index])
  })

  // Remove badges as well
  $('#sidebar2 .badge').remove()

})