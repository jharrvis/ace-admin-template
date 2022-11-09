jQuery(function($) {
    if (!window.Intl) {
      console.log("Calendar can't be displayed because your browser doesn's support `Intl`. You may use a polyfill!");
      return;
    }


    //hide/show relevant alert messages according to device
    if('ontouchstart' in window) {
      $('#alert-1').removeClass('d-none')
      $('#alert-2').addClass('d-none')
    }


    // initialize the external events
    new FullCalendar.Draggable(document.getElementById('external-events'), {
      itemSelector: '.fc-event',
      longPressDelay: 50,
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText,
          classNames: eventEl.getAttribute('data-class').split(' ')
        }
      }
    })



    // change styling options and icons
    FullCalendar.BootstrapTheme.prototype.classes = {
        root: 'fc-theme-bootstrap',
        table: 'table-bordered table-bordered brc-default-l2 text-secondary-d1 h-95',
        tableCellShaded: 'bgc-secondary-l3',
        buttonGroup: 'btn-group',
        button: 'btn btn-white btn-h-lighter-blue btn-a-blue',
        buttonActive: 'active',
        popover: 'card card-primary',
        popoverHeader: 'card-header',
        popoverContent: 'card-body',
    };
    FullCalendar.BootstrapTheme.prototype.baseIconClass = 'fa';
    FullCalendar.BootstrapTheme.prototype.iconClasses = {
        close: 'fa-times',
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right',
        prevYear: 'fa-angle-double-left',
        nextYear: 'fa-angle-double-right'
    };
    FullCalendar.BootstrapTheme.prototype.iconOverrideOption = 'FontAwesome';
    FullCalendar.BootstrapTheme.prototype.iconOverrideCustomButtonOption = 'FontAwesome';
    FullCalendar.BootstrapTheme.prototype.iconOverridePrefix = 'fa-';



    //for some random events to be added
    var date = new Date();
    var m = date.getMonth();
    var y = date.getFullYear();

    var day1 = Math.random() * 20 + 2;
    var day2 = Math.random() * 25 + 1;

  // initialize the calendar
  var calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
    themeSystem: 'bootstrap',

    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },

    events: [
		  {
        title: 'Some Event',
        start: new Date(y, m, 1, Math.random() * 23 + 1),
        allDay: true,
        className: 'bgc-red-d1 text-white text-95'
		  },
		  {
        title: 'Long Event',
        start: new Date(y, m, day1, Math.random() * 23 + 1),
        end: new Date(y, m, day1 + 4, Math.random() * 23 + 1),
        allDay: true,
        className: 'bgc-green-d2 text-white text-95'
		  },
		  {
        title: 'Other Event',
        start: new Date(y, m, day2, Math.random() * 23 + 1),
        allDay: true,
        className: 'bgc-blue-d2 text-white text-95'
		  }
    ],
    

    selectable: true,
    selectLongPressDelay: 200,

		select: function(date) {
      bootbox.prompt("New Event Title:", function(title) {
          if (title !== null && title.length > 0) {
            calendar.addEvent({
                title: title,
                start: date.start,
                end: date.end,
                allDay: true,
                classNames: ['text-95', 'bgc-info-d2', 'text-white']
            });
          }
      });
    },
    

    editable: true,
    droppable: true,

    drop: function(info) {
      // is the "remove after drop" checkbox checked?
      if ( document.getElementById('drop-remove').checked ) {
        info.draggedEl.parentNode.removeChild(info.draggedEl);
      }
    },


    eventClick: function(info) {
			//display a modal
			var modal = 
			'<div class="modal fade">\
			  <div class="modal-dialog">\
         <div class="modal-content">\
          <div class="modal-header">\
            <h5 class="modal-title">Edit Event</h5>\
            <button type="button" class="close" data-dismiss="modal">&times;</button>\
          </div>\
          <div class="modal-body">\
            <form class="m-0">\
              <div class="input-group">\
                  <div class="input-groupp-repend align-self-center mr-2">\
                    Title\
                  </div>\
                  <input class="form-control" autocomplete="off" type="text" value="' + info.event.title + '" />\
                  <div class="input-group-append">\
                    <button type="submit" class="btn btn-sm btn-success btn-bold"><i class="fa fa-check mr-2px"></i> Save</button>\
                    <button type="button" class="btn btn-sm btn-outline-danger btn-bold ml-2px" data-action="delete"><i class="far fa-trash-alt text-120"></i></button>\
                  </div>\
              </div>\
            </form>\
          </div>\
			  </div>\
			 </div>\
			</div>';
		
		
			var modal = $(modal).appendTo('body');
			modal.find('form').on('submit', function(ev){
        ev.preventDefault();

        info.event.setProp('title' , $(this).find("input[type=text]").val());

				modal.modal("hide");
			});
			modal.find('button[data-action=delete]').on('click', function() {
        info.event.remove();
				modal.modal("hide");
			});
			
			modal.modal('show').on('hidden.bs.modal', function(){
				modal.remove();
			});
    }
  
  });



  //
  calendar.render();

});