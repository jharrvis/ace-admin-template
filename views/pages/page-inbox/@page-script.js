jQuery(function($) {
    $('.page-content').find('input[type=checkbox]').prop('checked', false)

    $('#select-all')
    .on('change', function() {
        if(this.checked) {
            $('#inbox-header').addClass('d-none')
            $('#inbox-actions').removeClass('d-none')

            $('.message-item').addClass('bgc-primary-l3').find('input[type=checkbox]').prop('checked', true)
        }
        else {
            $('#inbox-header').removeClass('d-none')
            $('#inbox-actions').addClass('d-none')

            $('.message-item').removeClass('bgc-primary-l3').find('input[type=checkbox]').prop('checked', false)
        }
    })

    
        

    // when clicking a message, hide message list and show message details
    $('.message-item')
    .on('click', function() {
        $('#message-list').addClass('d-none')
        $('#message-view').removeClass('d-none')
    })

    // the go back button (from message details to message list)
    $('#message-list-back-btn')
    .on('click', function() {
        $('#message-list').removeClass('d-none')
        $('#message-view').addClass('d-none')
    })

    // when clicking on checkbox, star, and action buttons, don't open message details
    $('.message-select-btn, .message-star-btn, .message-actions')
    .on('click', function(e) {
        e.stopPropagation()
    })


    $('#aside-compose').on('show.bs.modal', function() {
        $('#aside-menu').modal('hide')
    })


    $('#message-editor').aceWysiwyg({
        toolbarPlacement: function(toolbarHtml) {
            var toolbar = $(toolbarHtml).appendTo('#message-editor-toolbar')
            toolbar.addClass('bgc-white border-none border-t-1 brc-secondary-l2 py-15')
            return toolbar;
        },
        toolbarStyle: 2,
        toolbar:
        [
            'font',
            null,
            'fontSize',
            null,
            'bold',
            'italic',
            null,
            'insertunorderedlist',
            'insertorderedlist',
            null,
            'createLink',
            'unlink',
            null,
            'insertImage',
            null,
            'foreColor',
            'backColor',
            null,
            'removeFormat',
            'undo',
            'redo',
            null,
            'viewSource'
        ],
        
        //toolbarPlacement: function(toolbarHtml) {
          //return $(toolbarHtml).appendTo('.card-header.bgc-success-tp2')
        //}
      })
})
