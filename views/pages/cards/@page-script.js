jQuery(function($) {
 // let's save position and state of `cards`

 // this should be done server side in a database
 // but for this demo we save data to `localStorage`

 function _saveData(name, value) {
  localStorage.setItem(name+'.ace', JSON.stringify(value))
 }
 
 function _getData(name) {
  var value = localStorage.getItem(name+'.ace') || '{}'
  try {
    value = JSON.parse(value)
  }
  catch(e) {
    value = {}
  }
  return value
 }

 function _removeData(name) {
  localStorage.removeItem(name+'.ace')
 }


 // in this demo we dynamically assign an ID to containers & cards so that we can easily save/restore data to localStorage
 $('.cards-container')
 .each(function(index) {
   this.setAttribute('id', 'card-container-' + (index+1))
 })
 $('.card')
 .each(function(index) {
   this.setAttribute('id', 'card-' + (index+1))
 })


 // load saved state of cards. for example `collapsed` or `closed`
 var states = _getData('widget-states')
 for(var widgetId in states) {
  var state = states[widgetId]


  if( state == 'hidden' ) $('#' + widgetId).aceCard('hideFast')
  else if( state == 'shown' ) $('#' + widgetId).aceCard('showFast')
  else if( state == 'closed' ) {
    $('#' + widgetId).aceCard('closeFast')
    // any maybe remove the parent '.cards-container' if it has no '.card' elements anymore
  }
 }//for


 // load saved order of cards
 var containers = _getData('widget-containers');
 for(var containerId in containers) {
   var containerEl = document.getElementById(containerId)
   if (!containerEl) continue

   var cards = containers[containerId]//list of cards in this container

   // add each card to the container
   for(var i = 0; i < cards.length; i++) {
    var card = document.getElementById(cards[i])
    if (card) {
      containerEl.appendChild( card );
      card.classList.add('mb-3')//if it's not the first card in this container, maybe add some distance from top 'mt-3'
    }    
   }//for

 }//for



 // now show page content, after restoring widgets' state and order
 document.getElementById('widgets-area').classList.remove('invisible')


 //enable sortable plugin
 $('.cards-container').each(function() {
    Sortable.create(this, {
      // give them a common name, so `.card` elements can be drag & dropped between different `.cards-containers`
      group: "widgets",

      draggable: "> .card",// we are interested in dragging/sorting `.card` elements that are direct children of `.cards-container` elements
      animation: 200,
    
      ghostClass: "brc-grey-m1",
      chosenClass: "",
      dragClass: "bgc-yellow-m2",

      handle: ('ontouchstart' in window ? ".card-header" : null),// in touch devices only drag using .card-header
      filter: ".card-toolbar-btn",
      preventOnFilter: false,

      onEnd: function (evt) {
        // when a `drag & drop` has ended

        // first get our previously saved `containers` data
        var containers = _getData('widget-containers')

        // clear our `from` (origin) and `to` (target) card-containers (i.e set to empty array)
        containers[evt.to.id] = []
        containers[evt.from.id] = []

        // now find all their `.card` children and add them to the array
        $('#' + evt.to.id).find('> .card').each(function() {
          containers[evt.to.id].push(this.id)
        })
        $('#' + evt.from.id).find('> .card').each(function() {
          containers[evt.from.id].push(this.id)
        })

        // now save them back again
        _saveData('widget-containers', containers)

        // also add some distance
        var newPrevSibling = evt.item.previousElementSibling
        if( newPrevSibling && newPrevSibling.classList.contains('card') ) {
          newPrevSibling.classList.add('mb-3')
        }
        evt.item.classList.add('mb-3')
      }
    })
  })



  // save widget states
  function saveWidgetState(id, state) {
    var states = _getData('widget-states')

    states[id] = state

    _saveData('widget-states', states)
  }

  // listen to relevant events to save states
  AceApp.EventHandler.on(document, 'hidden.ace.card', '.card', function(ev) {
    saveWidgetState(ev.delegateTarget.id, 'hidden')
  })
  AceApp.EventHandler.on(document, 'shown.ace.card', '.card', function(ev) {
    saveWidgetState(ev.delegateTarget.id, 'shown')
  })
  AceApp.EventHandler.on(document, 'closed.ace.card', '.card', function(ev) {
    saveWidgetState(ev.delegateTarget.id, 'closed')
  })



  // clear saved order and states and reload page
  $('#reset-1, #reset-2')
  .on('click', function() {
    _removeData('widget-containers')
    _removeData('widget-states')
    document.location.reload()
  })



  // update scrollable content's max height according to available space
  setTimeout(function() {
    try {
      var _scroller = document.querySelector('.card div[class*="ace-scroll"]')
      _scroller.style.maxHeight = _scroller.parentNode.clientHeight + 'px'
      _scroller.closest('.card').classList.remove('h-100')
    } catch(e) {}
  }, 10)

})