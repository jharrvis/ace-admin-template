jQuery(function($) {

    $('#id-toast-removeall').on('click', function() {
        $.aceToaster.removeAll()
        // $.aceToaster.removeAll(null, true) // `true` means remove instantly
    })

    /**
    document.addEventListener('add.ace.toaster', function(e) {
        // triggered when a new toast is made
        // e.target
    })    
    document.addEventListener('clear.ace.toaster', function(e) {
        // this is triggered when hideAll/removeAll is called
        // you can prevent them with `e.preventDefault()`

        // `e.detail` has the following
        // String: e.detail.placement
        // Boolean: e.detail.remove (i.e remove or just hide)       
    })
    */



    $('#id-toast-default').on('click', function() {
        $.aceToaster.add({
            placement: 'tc',
            title: 'Notification message!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            icon: '<i class="text-blue mr-2 text-130">\
                    <i class="fas fa-exclamation-circle mt-25 fa-2x text-blue"></i>\
                   </i>',
            iconClass: 'mt-3',

            delay: 5000,

            closeClass: 'btn btn-light-danger border-0 btn-bgc-tp btn-xs px-2 py-0 text-150 position-tr mt-n25',

            className: 'bgc-white-tp1 border-none border-t-4 brc-primary-tp1 rounded-sm pl-3 pr-1',
            headerClass: 'bg-transparent border-0 text-120 text-blue-d3 font-bolder mt-3',
            bodyClass: 'pt-0 pb-3 text-105'
        })
    })


    $('#id-toast-info').on('click', function() {
        $.aceToaster.add({
            placement: 'tr',
            body: "<p class='p-3 mb-0 text-center'>\
                        <span class='d-inline-block text-center mb-3 py-3 px-1 border-1 brc-success radius-round'>\
                            <i class='fa fa-check fa-2x w-6 text-success-m1 mx-2px'></i>\
                        </span><br />\
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit!\
                    </p>\
                    <button data-dismiss='toast' class='btn btn-block btn-info radius-t-0 border-0'>OK</button>",
                
            width: 360,
            delay: 5000,

            close: false,

            className: 'bgc-white-tp1 shadow ',

            bodyClass: 'border-0 p-0 text-dark-tp2',
            headerClass: 'd-none',
        })
    })


    $('#id-toast-warning').on('click', function() {
        $.aceToaster.add({
            placement: 'tr',
            body: "<div class='bgc-orange-d1 text-white px-3 pt-3'>\
                        <div class='border-2 brc-white px-3 py-25 radius-round'>\
                            <i class='fa fa-times text-150'></i>\
                        </div>\
                    </div>\
                    <div class='p-3 mb-0 flex-grow-1'>\
                        <h4 class='text-130'>Warning</h4>\
                        Lorem ipsum dolor sit amet!\
                    </div>\
                    <button data-dismiss='toast' class='align-self-start btn btn-xs btn-outline-grey btn-h-light-grey py-2px mr-1 mt-1 border-0 text-150'>&times;</button>",
                
            width: 420,
            delay: 5000,

            close: false,

            className: 'bgc-white-tp1 shadow border-0',

            bodyClass: 'd-flex border-0 p-0 text-dark-tp2',
            headerClass: 'd-none',
        })
    })


    $('#id-toast-success').on('click', function() {
        $.aceToaster.add({
            placement: 'rc',
            body: "<p class='p-3 mb-0 text-center text-white'>\
                        <span class='d-inline-block mb-3'>\
                            <i class='fa fa-check fa-2x'></i>\
                        </span><br />\
                        <span class='text-125'>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</span>\
                    </p>",
                
            width: 360,
            delay: 4000,

            close: false,

            className: 'bgc-green-d2 shadow ',

            bodyClass: 'border-0 p-0',
            headerClass: 'd-none',

            progress: 'position-bl bgc-black-tp6 py-2px m-1px'
        })
    })


    $('#id-toast-success2').on('click', function() {
        $.aceToaster.add({
            placement: 'rc',
            body: "<p class='p-3 mb-0 text-center text-white'>\
                        <span class='d-inline-block mb-3 border-2 bgc-white radius-round p-25'>\
                            <i class='fa fa-check fa-2x mx-1px text-success'></i>\
                        </span><br />\
                        <span class='text-125'>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</span>\
                    </p>\
                    <button data-dismiss='toast' class='close position-tr mt-1 mr-2 text-white'>&times;</button>\
                    ",
                
            width: 360,
            delay: 4000,

            close: false,

            className: 'bgc-success-d2 shadow ',

            bodyClass: 'border-0 p-0',
            headerClass: 'd-none',

            progress: 'position-bl bgc-white-tp4 py-2px m-1px',
            progressReverse: true
        })
    })


    $('#id-toast-error').on('click', function() {
        $.aceToaster.add({
            placement: 'br',
            body: "<div class='p-3 m-2 d-flex'>\
                     <span class='align-self-center text-center mr-3 py-2 px-1 border-1 bgc-danger radius-round'>\
                        <i class='fa fa-times text-180 w-4 text-white mx-2px'></i>\
                     </span>\
                     <div>\
                        <h4 class='text-dark-tp3'>Something went wrong</h4>\
                        <span class='text-dark-tp3 text-110'>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</span>\
                     </div>\
                    </div>\
                    <button data-dismiss='toast' class='btn text-grey btn-h-light-danger position-tr mr-1 mt-1'><i class='fa fa-times'></i></button>",
                
            width: 480,
            delay: 5000,

            close: false,

            className: 'shadow border-none radius-0 border-l-4 brc-danger',

            bodyClass: 'border-0 p-0',
            headerClass: 'd-none'
        })
    })


    $('#id-toast-dark').on('click', function() {
        $.aceToaster.add({
            placement: 'tl',
            sticky: true,
            title: 'This is a dark notice with 5s delay!',
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='#' class='text-warning-m3'>Vivamus eget</a> tincidunt velit.\
            <span class='opacity-5'><span class='opacity-5'><i class='fas fa-exclamation-triangle mr-1 mb-1 position-br opacity-5 fa-6x'></i></span></span>",

            //closeClass: 'btn btn-link btn-xs text-yellow text-150 text-decoration-none p-1',
            closeClass: 'btn btn-dark btn-h-danger btn-xs px-2 py-0 text-150 position-tr mr-n25 mt-n3',


            delay: 5000,

            className: 'bgc-black-tp2 radius-2px border-none border-l-4 brc-orange px-3 shadow',

            headerClass: 'bg-transparent border-0 text-orange-m3 text-115 mt-35',
            bodyClass: 'text-white pt-0 mb-4'
        })
    })


    $('#id-toast-primary').on('click', function() {
        $.aceToaster.add({
            placement: 'center',
            title: 'This is a primary notice!',
            body: '<div class="position-tr w-100 h-100 bgc-black-tp9" style="z-index: -1;"></div>\
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#" class="text-yellow-l2 font-bolder">Vivamus eget</a> tincidunt velit.\
            ',

            image: 'assets/image/avatar/avatar.png',
            imageClass: 'radius-round p-2px bgc-white',

            closeClass: 'btn btn-xs py-0 btn-link bgc-h-white-tp9 no-underline text-white text-150 position-tr mr-n2',

            className: 'bgc-primary-tp2 border-0 px-2 shadow',
            headerClass: 'bg-transparent border-0 text-white text-120 pt-2',
            bodyClass: 'text-white pt-0 pb-2'
        })
    })



    $('#id-toast-sticky').on('click', function() {
        var toast = $.aceToaster.add({
            placement: 'tc',
            title: 'This is a draggable sticky notice!',
            body: '\
                    <div class="bgc-success-d2 px-3 py-3 radius-round ml-1 mr-3 mb-3 float-left">\
                      <i class="fa fa-check text-140 text-white mx-1px"></i>\
                    </div>\
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="#" class="text-blue-d2 font-bolder">Vivamus eget</a> tincidunt velit.\
                    <hr class="my-3" />\
                    <p class="text-center mt-2 mb-0">\
                        <button type="button" data-dismiss="toast" class="btn px-4 btn-light-secondary">Cancel</button>\
                        <button type="button" data-dismiss="toast" class="btn px-4 btn-green">Continue</button>\
                    </p>',
            
            width: '420px',

            sticky: true,
            belowNav: true,

            closeClass: 'btn btn-bgc-tp border-0 btn-light-danger btn-xs px-2 py-1px m2-px radius-1 text-100 font-normal position-tr mt-2px mr-2px',

            //icon: '<i class="fa fa-user fa-2x text-success-m3 ml-2 mr-1"></i>',
           
            headerClass: 'bgc-transparent border-0 text-white text-140 mb-3 p-0 pl-3 pr-4',
            titleClass: 'text-dark-tp3 font-normal pt-15',

            className: 'brc-success-m1 border-1 border-t-4 radius-0 pr-0',

            bodyClass: 'pt-0 pl-3 text-105'
        })

        // enable dragging using interact.js
        toast.style.touchAction = 'none'

        var position = { x: 0, y: 0 }
        interact(toast)
        .draggable({
          ignoreFrom: '.btn', //for Firefox on Android to react to button events
          listeners: {
            move : function(event) {
             position.x += event.dx
             position.y += event.dy
     
             Object.assign(event.target.style, {
                transform: "translateX("+position.x+"px) translateY("+position.y+"px)"
             })
            },
          }
        })
    })



    ////////////////
    $('#id-sweeralert-1').on('click', function() {
        var swalWithBootstrapButtons = Swal.mixin({
            buttonsStyling: false
        })
          
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            scrollbarPadding: false,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
            customClass: {'confirmButton': 'btn btn-green mx-2 px-3',  'cancelButton': 'btn btn-red mx-2 px-3'}
          }).then(function(result) {
            if (result.value) {
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Operation completed successfully.',
                type: 'success',
                icon: 'success',
                customClass: {'confirmButton': 'btn btn-info px-5'}
              })
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: 'Cancelled',
                text: 'Cancelled successfully.',
                type: 'error',
                icon: 'error',
                customClass: {'confirmButton': 'btn btn-secondary px-5'}
              })
            }
        })
    })

    $('#id-sweeralert-2').on('click', function() {
      Swal.fire({
        position: 'top-end',
        scrollbarPadding: false,
        type: 'info',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })
    })
   
})
