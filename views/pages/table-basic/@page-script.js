jQuery(function($) {

    // highlight simple table row when selected
    function _highlight(row, checked) {
        // `classList.toggle` with 2 arguments isn't supported in IE10+
        // row.classList.toggle('active', checked)
        // row.classList.toggle('bgc-yellow-l3', checked)
        // row.classList.toggle('bgc-h-default-l3', !checked)

        if (checked) {
            row.classList.add('active')
            row.classList.add('bgc-success-l3')
            row.classList.remove('bgc-h-default-l3')
        }
        else {
            row.classList.remove('active')
            row.classList.remove('bgc-success-l3')
            row.classList.add('bgc-h-default-l3')
        }
    }
    
    $('#simple-table tbody tr')
    .on('click', function(e) {
        var ret = false
        try {
            // return if clicked on a .btn or .dropdown
            ret = e.target.classList.contains('btn') || e.target.parentNode.classList.contains('btn')|| e.target.closest('.dropdown') != null
        } catch(err) {}

        if (ret) return

        var inp = this.querySelector('input')
        if(inp == null) return

        if(e.target.tagName != "INPUT") {
            inp.checked = !inp.checked
        }
        _highlight(this, inp.checked)
    })

    $('#simple-table thead input')
    .on('change', function() {
        var checked = this.checked
        $('#simple-table tbody input[type=checkbox]')
        .each(function() {
            this.checked = checked
            var row = $(this).closest('tr').get(0)
            _highlight(row, checked)
        })
    })

    // responsive table using basic table plugin
    $('#responsive-table').basictable({breakpoint: 800})
})