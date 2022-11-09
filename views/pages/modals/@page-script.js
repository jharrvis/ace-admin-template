jQuery(function($) {

    $('#toggleBodyScrollbars').on('click', function() {
        $(this).toggleClass('btn-green')
        $('#bodyScrollbars').toggleClass('d-none')
    })

    // BootBox
    $('#id-bootbox-alert').on('click', function() {
        bootbox.alert({
            message: "This is alert.",
            onEscape: true,
            callback: function(){
            }
        })
    })

    $('#id-bootbox-confirm').on('click', function() {
        bootbox.confirm({
            message: "This is confirm.",
            onEscape: true,
            callback: function(result) {
            }
        })
    })

    $('#id-bootbox-prompt').on('click', function() {
        bootbox.prompt({
            title: "<p class='text-orange-d2 mb-0'>Are you sure?</p><p class='text-80 text-secondary'>Type \"yes\" and then click \"OK\" to conintue</p>",
            onEscape: true,
            callback: function(result) {
                //console.log(result);
            }
        })
    })


    $('#id-bootbox-custom').on('click', function() {
       bootbox.dialog({
        message: '<p>This dialog demonstrates many of the options available when using the Bootbox library</p>',
        onEscape: true,
        buttons: {
                success :
                 {
                    label : "<i class='fa fa-check'></i> Success!",
                    className : "btn-success",
                    callback: function() {
                        //Example.show("great success")
                    }
                },
                danger :
                {
                    label : "Danger!",
                    className : "btn-danger",
                    callback: function() {
                        //Example.show("uh oh, look out!")
                    }
                }, 
                click :
                {
                    label : "Click ME!",
                    className : "btn-primary",
                    callback: function() {
                        //Example.show("Primary button")
                    }
                }, 
                button :
                {
                    label : "Just a button...",
                    className : "btn-secondary"
                }
            }
      })
    })
   
})
