jQuery(function($) {
	// Smart Wizard v4.4.1 example
	
	// show/hide form validation
	$('#id-validate')
	.prop('checked', false)
	.on('change', function() {
		if( this.checked ) {
			$('form[novalidate]').addClass('d-none')
			$('#validation-form').removeClass('d-none')
		}
		else {
			$('form[novalidate]').removeClass('d-none')
			$('#validation-form').addClass('d-none')    
		}
	})
	
	
	var stepCount = $('#smartwizard-1').find('li > a').length
	var left = (100 / (stepCount * 2))
	// for example if we have **4** steps, `left` and `right` of progressbar should be **12.5%**
	// so that before first step and after last step we don't have any lines
	$('#smartwizard-1').find('.wizard-progressbar').css( {left: left+'%', right: left+'%'} )
	
	// enable wizard
	var selectedStep = 0
	$('#smartwizard-1').smartWizard({
		theme: 'circles',
		useURLhash: false,
		showStepURLhash: false,
		autoAdjustHeight: true,
		transitionSpeed: 150,
		
		//errorSteps: [0,1],
		//disabledSteps: [2,3],
		
		selected: selectedStep,
		
		toolbarSettings: {
			toolbarPosition: 'bottom', // none, top, bottom, both
			toolbarButtonPosition: 'right', // left, right
			showNextButton: false, // show/hide a Next button
			showPreviousButton: false, // show/hide a Previous button
			toolbarExtraButtons: [
				$('<button class="btn btn-outline-secondary sw-btn-prev radius-l-1 mr-2px"><i class="fa fa-arrow-left mr-15"></i> Previous</button>'),
				
				$('<button class="btn btn-outline-primary sw-btn-next sw-btn-hide radius-r-1">Next <i class="fa fa-arrow-right mr-15"></i></button>'),
				
				$('<button class="btn btn-green sw-btn-finish radius-r-1">Finish <i class="fa fa-check mr-15"></i></button>')
				.on('click', function(){
					//Finish Action
				}),
			]
		}
	})
	
	.removeClass('d-none')// initially it is hidden, and we show it after it is properly rendered
	
	.on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
		// move the progress bar by increasing its size (width)
		var progress = parseInt((stepNumber + 1) * 100 / stepCount)
		var halfStepWidth = parseInt(100 / stepCount) / 2
		progress -= halfStepWidth //because for example for the first step, we don't want progressbar to move all the way to next step
		
		$('#smartwizard-1').find('.wizard-progressbar').css('max-width', progress+'%')
		
		// hide/show card toolbar buttons
		// if we are not in the first step, previous button should be enabled, otherwise disabled
		if (stepNumber > 0) {
			$('#wizard-1-prev').removeAttr('disabled')  
		}
		else {
			$('#wizard-1-prev').attr('disabled', '')     
		}
		
		// if we are in the last step, next button should be hidden, and finish button shown instead
		if (stepNumber == stepCount - 1) {
			$('#wizard-1-next').addClass('d-none')
			$('#wizard-1-finish').removeClass('d-none')
		}
		else {
			$('#wizard-1-next').removeClass('d-none')
			$('#wizard-1-finish').addClass('d-none')
		}
	})
	.on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
		if(stepNumber == 0 && stepDirection == 'forward')  {
			
			// use jQuery plugin to validate
			if( document.getElementById('id-validate').checked && !$('#validation-form').valid() ) return false;
			
			// or use HTML & Bootstrap validation
			/**
				var form = document.getElementById('validation-form');
				if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
				
				form.classList.add('was-validated');
				return false;
				}
			*/
		}
	})
	.triggerHandler('showStep', [null, selectedStep, null, null]) // move progressbar to step 1 (0 index)
	
	
	// handle `click` event of card toolbar buttons
	$('#wizard-1-prev').on('click', function() {
		$('#smartwizard-1').smartWizard('prev')
	})
	
	$('#wizard-1-next').on('click', function() {
		$('#smartwizard-1').smartWizard('next')
	})
	
	$('#wizard-1-finish').on('click', function() {
		//
	})
	
	
	
	
	/////////////////////////////////////
	// add input mask to some inputs
	try { // not working in IE11
		$("#phone").inputmask("(999) 999-9999")
		$("#url").inputmask({ regex: "https?://.*" })
	}
	catch(e) {
		$("#phone").attr("placeholder", "(999) 999-9999")
	}
	
	
	
	/////////////////////////////////////
	// Form Validation plugin
	
	//when select box value is changed, revalidate
	$('select#platform')// .css('width','200px').select2({allowClear:true}) //can have select2 or chosen
	.on('change', function(){
		$(this).closest('form').validate().element($(this))
	})
	
	
	var $invalidClass = 'brc-danger-tp2'
	var $validClass = 'brc-info-tp2'
	
	// add phone validation method
	jQuery.validator.addMethod("phone", function (value, element) {
		return this.optional(element) || /^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/.test(value)
	}, "Enter a valid phone number.")
	
	
	$('#validation-form').validate({
		errorElement: 'span',
		errorClass: 'form-text form-error text-danger-m2',
		focusInvalid: false,
		ignore: "",
		rules: {
			email: {
				required: true,
				email:true
			},
			password: {
				required: true,
				minlength: 5
			},
			password2: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			name: {
				required: true
			},
			phone: {
				required: true,
				phone: 'required'
			},
			url: {
				required: true,
				url: true
			},
			comment: {
				//required: true
			},
			state: {
				//required: true
			},
			platform: {
				required: true
			},
			subscription: {
				required: true
			},
			gender: {
				required: true,
			},
			agree: {
				required: true,
			}
		},
		
		messages: {
			email: {
				required: "Please provide a valid email.",
				email: "Please provide a valid email."
			},
			password: {
				required: "Please specify a password.",
				minlength: "Please specify a secure password."
			},
			platform: "Please choose your platform",
			subscription: "Please choose at least one option",
			gender: "Please choose gender",
			agree: "Please agree to our terms of use"
		},
		
		
		highlight: function (element) {
			var $element = $(element);
			
			//remove error messages to be inserted again, so that the `.fa-exclamation-circle` is inserted in `errorPlacement` function
			$element.closest('.form-group').find('.form-text').remove()
			
			if( $element.is('input[type=checkbox]') || $element.is('input[type=radio]') ) return
			
			else if( $element.is('.select2')) {
				var container = $element.siblings('[class*="select2-container"]')
				container.find('.select2-selection').addClass( $invalidClass )
			}
			else if( $element.is('.chosen')) {
				var container = $element.siblings('[class*="chosen-container"]');
				container.find('.chosen-choices, .chosen-single').addClass( $invalidClass )
			}
			
			else {
				$element.addClass($invalidClass + ' d-inline-block').removeClass( $validClass )
			}
		},
		
		success: function (error, element) {
			var parent = error.parent()
			var $element = $(element)
			
			$element.removeClass( $invalidClass )
            .closest('.form-group').find('.form-text').remove()
			
			if ($element.is('input[type=checkbox]') || $element.is('input[type=radio]')) return
			
			else if( $element.is('.select2')) {
				var container = $element.siblings('[class*="select2-container"]')
				container.find('.select2-selection').removeClass($invalidClass)
			}
			else if( $element.is('.chosen')) {
				var container = $element.siblings('[class*="chosen-container"]')
				container.find('.chosen-choices, .chosen-single').removeClass($invalidClass)
			}
			
			else {
				$element.addClass($validClass + ' d-inline-block')
			}
			
			// append 'fa-check' icon
			parent.append('<span class="form-text d-inline-block ml-sm-2"><i class=" fa fa-check text-success-m1 text-120"></i></span>')
		},
		
		errorPlacement: function (error, element) {
			// prepend 'fa-exclamation-circle' icon
			error.prepend('<i class="form-text fa fa-exclamation-circle text-danger-m1 text-100 mr-1 ml-2"></i>')
			
			if(element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
				element.closest('div[class*="col-"]').append(error)
			}
			else if(element.is('.select2')) {
				var container = element.siblings('[class*="select2-container"]')
				error.insertAfter(container)
				container.find('.select2-selection').addClass($invalidClass)
			}
			else if(element.is('.chosen')) {
				var container = element.siblings('[class*="chosen-container"]')
				error.insertAfter(container)
				container.find('.chosen-choices, .chosen-single').addClass($invalidClass)
			}
			else {
				error.addClass('d-inline-block').insertAfter(element)
			}
		},
		
		submitHandler: function (form) {
		},
		invalidHandler: function (form) {
		}
	})
	
})