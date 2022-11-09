jQuery(function($) {
    //Ace Aside example using aceAside function   
    $('#aside-1')
    .aceAside({
        placement: 'right',
        dismiss: true,
        belowNav: true,
        extrwNav: true,
        extraClass: 'my-2'
    })


   // make `#draggable-1` draggable and resizable using interact.js
   $('#draggable-1').css({height: '200px', 'touch-action': 'none'});
   var position = { x: 0, y: 0 }
   interact('#draggable-1')
   .draggable({
     ignoreFrom: '.btn', //for Firefox on Android to react to button events
     listeners: {
       //start : function(event) {
       //},
       move : function(event) {
        position.x += event.dx
        position.y += event.dy

        Object.assign(event.target.style, {
            left: position.x+'px',
            top:  position.y+'px'
        })
       },
     }
   })
   .resizable({
    ignoreFrom: '.btn', //for Firefox on Android to react to button events
    edges: {
        top   : true,
        left  : true,
        bottom: true,
        right: true
    },
  })
  .on('resizemove', function(event) {
    //don't let width or height become less than 200px
    if(event.rect.width < 200) {
        event.rect.width = 200;
        return;
    }
    if(event.rect.height < 100) {
        event.rect.height = 100;
        return;
    }

    if(event.edges.bottom) position.y += event.delta.y;
    else if(event.edges.left || event.edges.right) position.x += event.delta.x / 2;

    Object.assign(event.target.style, {
      left: position.x+'px',
      top:  position.y+'px'
    });

    Object.assign(event.target.style, {
      height: event.rect.height+'px',
      width:  event.rect.width+'px'
    })
  });


  //////////////////////
  // the button in `Inside Container Below Navbar` button's aside
  $('#id-change-to-boxed').on('click', function(e) {
    e.preventDefault()
    $('[name=boxed-layout][value=all]').trigger('click')
  });
});
