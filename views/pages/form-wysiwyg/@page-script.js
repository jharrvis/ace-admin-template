jQuery(function($) {

  // update icons for summernote example
  $.extend($.summernote.options.icons ,  {
    'align': 'fa fa-align',
    'alignCenter': 'fa fa-align-center',
    'alignJustify': 'fa fa-align-justify',
    'alignLeft': 'fa fa-align-left',
    'alignRight': 'fa fa-align-right',
    'indent': 'fa fa-indent',
    'outdent': 'fa fa-outdent',
    'arrowsAlt': 'fa fa-arrows-alt',
    'bold': 'fa fa-bold',
    'caret': 'fa fa-caret-down text-grey-m2 ml-1',
    'circle': 'fa fa-circle',
    'close': 'fa fa fa-close',
    'code': 'fa fa-code',
    'eraser': 'fa fa-eraser',
    'font': 'fa fa-font',
    'italic': 'fa fa-italic',
    'link': 'fa fa-link text-success-m1',
    'unlink': 'fas fa-unlink',
    'magic': 'fa fa-magic text-brown-m1',
    'menuCheck': 'fa fa-check',
    'minus': 'fa fa-minus',
    'orderedlist': 'fa fa-list-ol text-blue',
    'pencil': 'fa fa-pencil',
    'picture': 'far fa-image text-purple-d1',
    'question': 'fa fa-question',
    'redo': 'fa fa-repeat',
    'square': 'fa fa-square',
    'strikethrough': 'fa fa-strikethrough',
    'subscript': 'fa fa-subscript',
    'superscript': 'fa fa-superscript',
    'table': 'fa fa-table text-danger-m2',
    'textHeight': 'fa fa-text-height',
    'trash': 'fa fa-trash',
    'underline': 'fa fa-underline',
    'undo': 'fa fa-undo',
    'unorderedlist': 'fa fa-list-ul text-blue',
    'video': 'far fa-file-video text-pink-m1'
  })

  $('#summernote').summernote({
    height: 250,
    minHeight: 150,
    maxHeight: 400
  })


  ///////////////////////////////////
  //lightweight wysiwyg editor
  $('#bootstrap-editor').aceWysiwyg({
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


  ////////////////////////////////
  //markdown editor
  $('#markdown-editor').markdown({
    iconlibrary: 'fa'
  })
  .each(function() {
    $(this).parent().find('.btn')
     .addClass('btn-xs btn-bgc-white btn-light-secondary btn-a-light-primary')
     .removeClass('btn-default')

    $(this).parent().find('.btn[title~="Heading"] > .fa').attr('class', 'fas fa-heading')
    $(this).parent().find('.btn[title~="Image"] > .fa').attr('class', 'far fa-image')
     
    $(this).parent().find('.md-control-fullscreen > .fa , .exit-fullscreen > .fa').addClass('text-orange-d1 text-110')

    $(this).parent().find('.btn-group').addClass('mr-1')
  })

})