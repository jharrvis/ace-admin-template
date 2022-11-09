jQuery(function($) {

    // star rating plugin
    $.fn.ratingThemes['fontawesome5-theme'] = {
        filledStar: '<i class="fas fa-star text-orange-m2"></i>',
        emptyStar: '<i class="far fa-star"></i>',
        clearButton: '<i class="fas fa-minus-circle text-110"></i>'
    }

    $('.star-rating').rating({
        animate: false,
        hoverOnClear: false,
        size: 'sm',
        theme: 'fontawesome5-theme',
        containerClass: 'is-star',

        clearCaptionClass: 'badge badge-sm btn-light-secondary border-1 text-80',

        starCaptionClasses: {
            0.5: 'badge badge-sm btn-light-danger border-1 text-80',
            1: 'badge badge-sm btn-light-danger border-1 text-80',
            1.5: 'badge badge-sm btn-light-danger border-1 text-80',
            2: 'badge badge-sm btn-light-warning border-1 text-80',
            2.5: 'badge badge-sm btn-light-warning border-1 text-80',
            3: 'badge badge-sm btn-light-warning border-1 text-80',
            3.5: 'badge badge-sm btn-light-info border-1 text-80',
            4: 'badge badge-sm btn-light-info border-1 text-80',
            4.5: 'badge badge-sm btn-light-success border-1 text-80',
            5: 'badge badge-sm badge-success text-80'
        }
    })



    ///////////////////////////////////////

    // typeahead.js
    // example taken from plugin's page at: https://twitter.github.io/typeahead.js/examples/
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            
            // an array that will be populated with substring matches
            matches = [];
            
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({ value: str });
                }
            });

            cb(matches);
        }
    }

    var US_STATES = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]
    $('input.typeahead').typeahead(
        {
            hint: true,
            highlight: true,
            minLength: 1,
            classNames: {
                menu : 'dropdown-menu',
                suggestion : 'dropdown-item',
                cursor : 'bgc-yellow-m2'
            }
        },
        {
            name: 'states',
            displayKey: 'value',
            source: substringMatcher(US_STATES),
            limit: 10
        }
    )



    ///////////////////////////////////////

    // bootstrap select
    $.fn.selectpicker.Constructor.DEFAULTS.tickIcon = 'far fa-check-square text-125 text-orange mt-1'
    $('#select-picker-1').selectpicker()


    ///////////////////////////////////////

    // duallist box
    var demo1 = $('select[name="duallistbox_demo1[]"]').bootstrapDualListbox({infoTextFiltered: '<span class="badge badge-purple badge-lg">Filtered</span>'});
    var container1 = demo1.bootstrapDualListbox('getContainer');
    container1.find('.btn').removeClass('btn-default').addClass('btn-xs btn-outline-info btn-h-outline-info btn-bold m-0')
    .find('.glyphicon-arrow-right').attr('class', 'fa fa-arrow-right').end()
    .find('.glyphicon-arrow-left').attr('class', 'fa fa-arrow-left')


    ///////////////////////////////////////
    // select2
    $('.select2').select2({
        allowClear: true,
        dropdownParent: $('#select2-parent'),
    })
    

    // chosen
    $(".chosen-select").chosen({allow_single_deselect:true})


    // tag input
    $('#tag-input').tagsinput({
        tagClass: 'badge badge-secondary font-normal',
        focusClass: 'tagsinput-focus'
    })
})