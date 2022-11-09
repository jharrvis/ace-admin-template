jQuery(function($) {

    // Select Categories Tree
    var categoryData = [
        {
            id: 1,
            name: 'For Sale',
   
            children: [
                {
                    id: 2,
                    name: 'Appliances'
                },                
                { 
                    id: 3,
                    name: 'Arts & Crafts'
                },
                { 
                    id: 4,
                    name: 'Clothing'
                },
                { 
                    id: 5,
                    name: 'Electronics'
                },
                { 
                    id: 6,
                    name: 'Jewelry'
                },
                { 
                    id: 7,
                    name: 'Office & Business'
                },
                { 
                    id: 8,
                    name: 'Sports & Fitness'
                }
            ]
        },


        {
            id: 10,
            name: 'Vehicles',
   
            children: [
                {
                    id: 11,
                    name: 'Cars',

                    children: [
                        {
                            id: 12,
                            name: 'Convertible'
                        },                
                        { 
                            id: 13,
                            name: 'Coupe'
                        },
                        { 
                            id: 14,
                            name: 'Hatchback'
                        },
                        { 
                            id: 15,
                            name: 'SUV'
                        },
                        { 
                            id: 16,
                            name: 'Sedan'
                        },
                        { 
                            id: 17,
                            name: 'Truck'
                        }
                    ]
                },

                { 
                    id: 18,
                    name: 'Bikes'
                },
                { 
                    id: 19,
                    name: 'Boats'
                }
            ]
        },

        {
            id: 20,
            name: 'Services'
        },
        {
            id: 21,
            name: 'Personals'
        }
        
    ]

    // the icon to show when a node is selected
    var selectedIcon =
    '<span class="selected-icon d-inline-block text-center border-1 bgc-orange-d1 px-1px mx-1 text-70 pb-1px radius-2px">\
        <i class="w-2 fa fa-check text-white"></i>\
    </span>'

    // the icon to show when a node is deselected
    var deselectedIcon = 
    '<span class="deselected-icon d-inline-block text-center border-1 bgc-white brc-secondary-m3 px-1px mx-1 text-70 pb-1px radius-2px">\
        <i class="w-2 fa fa-times text-orange-l3"></i>\
    </span>'

    var enableDragAndDrop = !(('ontouchstart' in window) && window.matchMedia('(max-width: 767.98px)').matches)
    var categoryTree = $('#id-jqtree-categories')
    categoryTree
    .tree({
        data: categoryData,
        autoOpen: false,
        useContextMenu: false,

        dragAndDrop: enableDragAndDrop,
 
        closedIcon : $('<i class="bgc-white w-2 far fa-plus-square text-grey-l1 text-110"></i>'),
        openedIcon : $('<i class="bgc-white w-2 far fa-minus-square text-default-d2 text-110"></i>'),

        onCreateLi: function(node, $li, is_selected) {
            // insert the icon
            var title = $li.find('.jqtree-title')
            if(node.children.length == 0) {
                title.addClass('text-grey-d2 text-95')
                if( is_selected ) {
                    $(selectedIcon).insertBefore(title)
                }
                else {
                    $(deselectedIcon).insertBefore(title)
                }
            }
            else {
                title.addClass('text-secondary-d3 font-italic')
            }

            $li.find('.jqtree-element').addClass('bgc-h-warning-l3 radius-1')
        }
    })

    if(enableDragAndDrop) $('#has-drag-drop').removeClass('d-none')

    categoryTree.on('tree.click', function(e) {
        // Disable single selection
        e.preventDefault()

        var selectedNode = e.node
        if (selectedNode.id === undefined || selectedNode.children.length > 0) {
            // only select single (no-children) nodes
            return
        }

        // if already selected, deselect it
        if (categoryTree.tree('isNodeSelected', selectedNode)) {
            categoryTree.tree('removeFromSelection', selectedNode)

            // insert *deselectedIcon* and remove .selected-icon
            var icon = $(selectedNode.element).find('.selected-icon')
            $(deselectedIcon).insertAfter(icon)
            icon.remove()
        }    
        else {
            categoryTree.tree('addToSelection', selectedNode)

            // insert *selectedIcon* and remove .deselected-icon
            var icon = $(selectedNode.element).find('.deselected-icon')
            $(selectedIcon).insertAfter(icon)
            icon.remove()
        }
    })


    ///////////////////////////////////////////////////////


    // Browse Files Tree
    var fileData = [
        {
            id: 1,
            name: 'Cloud Files',
            icons: {
                'default': ['<i class="fas fa-cloud"></i>', 'text-blue-m1']
            },
            children: [
                {
                    id: 2,
                    name: 'Folder 1',
                    icons: {
                        'default': ['<i class="fa fa-folder"></i>', 'text-orange-d1'],
                        'open': ['<i class="fa fa-folder-open"></i>', 'text-orange-d1']
                    },
                    children: [
                        { 
                            id: 3,
                            name: 'ebook.pdf' ,
                            icons: {
                                'default': ['<i class="far fa-file-pdf text-125"></i>', 'text-danger-m1'],
                            }
                        },
                        { 
                            id: 4,
                            name: 'archive.zip' ,
                            icons: {
                                'default': ['<i class="far fa-file-archive text-125"></i>', 'text-purple-m1'],
                            }
                        },
                        { 
                            id: 5,
                            name: 'video.mp4' ,
                            icons: {
                                'default': ['<i class="far fa-file-video text-125"></i>', 'text-success-m1'],
                            }
                        },
                    ]
                },
                { 
                    id: 6,
                    name: 'README.md',
                    icons: {
                        'default': ['<i class="far fa-file"></i>', 'text-grey']
                    },
                }
            ]
        },
        {
            id: 7,
            name: 'Local Files',
            icons: {
                'default': ['<i class="fas fa-desktop"></i>', 'text-info']
            },
            children: [
                {
                    id: 8,
                    name: 'document.doc',
                    icons: {
                        'default': ['<i class="fa fa-file-word"></i>', 'text-blue-m2']
                    },
                }
            ]
        }
    ]


    var fileTree = $('#id-jqtree-files')
    fileTree
    .tree({
          data: fileData,
          autoOpen: 1,
          // dragAndDrop: true,
          useContextMenu: true,

          // used to specify drag & dropped item's color         
          onCanMoveTo: function(node) {
            node.element.querySelector('* > .jqtree-element').classList.add('bgc-warning-l1', 'border-x-2', 'brc-warning');        
            return true
          },
          
          closedIcon : $('<i class="fa fa-caret-right text-muted"></i>'),
          openedIcon : $('<i class="fa fa-caret-right rotate-45 text-muted"></i>'),

          onCreateLi: function(node, $li) {
              $li.find('.jqtree-element').addClass('bgc-h-warning-l3')
              
              // insert the icons
              if(node.icons) {
                  var $title = $li.find('.jqtree-title')

                  var iconDefault = null
                  // prepend the `default` icon
                  if(node.icons.default) {
                    iconDefault = $( node.icons.default[0] ).addClass( node.icons.default[1] ).addClass('node-icon')
                    $title.prepend( iconDefault )
                  }

                  // prepend the `open` icon
                  if(node.icons.open) {
                      if(iconDefault) iconDefault.addClass('closed-icon')
                        $title.prepend(
                            $( node.icons.open[0] ).addClass( node.icons.open[1] ).addClass('opened-icon').addClass('node-icon')
                        )
                  }
              }
          }
    })


    // function to (un)highlight tree nodes
    var _highlightNode = function(node) {
        var className = node.children.length > 0 ? 'bgc-success-l2' : 'bgc-primary-l2';   
        var el = node.element.querySelector('* > .jqtree-element')
        el.classList.add(className)
        el.classList.remove('bgc-h-warning-l3')
    }

    var _unhighlightNode = function(node) {
        var el = node.element.querySelector('* > .jqtree-element')
        el.classList.remove('bgc-success-l2')
        el.classList.remove('bgc-primary-l2')
        el.classList.add('bgc-h-warning-l3')
    }


    var _lastDropdownToggler = null, _lastNodeWithDropdown = null
    // function to hide context menu
    var _hideContextMenu = function(togglerBtn) {        
        $(togglerBtn.parentNode).removeClass('dropdown dd-backdrop dd-backdrop-none-md')
        $(togglerBtn).next().remove()
        $(togglerBtn).dropdown('dispose').remove()
        _lastDropdownToggler = null
        _lastNodeWithDropdown = null
    }


    fileTree
    .on('tree.click', function(e) {
        // Disable single selection
        e.preventDefault()

        // if a context menu is displayed, return
        if (_lastDropdownToggler != null ) return    

        var selectedNode = e.node    
        if (selectedNode.id === undefined) {
            //console.warn('The multiple selection functions require that nodes have an id');
            return
        }

        if (fileTree.tree('isNodeSelected', selectedNode)) {
            fileTree.tree('removeFromSelection', selectedNode)
            _unhighlightNode(selectedNode)
        } else {
            fileTree.tree('addToSelection', selectedNode)
            _highlightNode(selectedNode)
        }
    })
    .on('tree.contextmenu',
        function(event) {   
            if(_lastDropdownToggler != null) {
                if (event.node.element == _lastNodeWithDropdown) return // dropdown already shown
                _hideContextMenu(_lastDropdownToggler) // hide previous dropdown
            }


            _lastNodeWithDropdown = event.node.element

            var item = event.node.element.querySelector('.jqtree-title')
            $(item)
            .addClass('dropdown dd-backdrop dd-backdrop-none-md')
            // create and append dropdown menu and toggler
            .append('<a href="#" class="d-none" data-toggle="dropdown">&nbsp;</a>\
            <div class="dropdown-menu dropdown-caret radius-1 border-b-2 shadow-sm brc-default-m2 dd-slide-up dd-slide-none-md"><div class="dropdown-inner">\
                <div class="d-md-none dropdown-title px-3 text-secondary-d3">'+event.node.name+'</div>\
                <div class="d-md-none dropdown-divider"></div>\
                <a href="#" class="dropdown-item"><i class="fa fa-edit text-blue mr-1 w-2"></i> Rename</a>\
                <a href="#" class="dropdown-item"><i class="fa fa-trash-alt text-danger mr-1 w-2"></i> Delete</a>\
            </div></div>')



            // now show dropdown
            _lastDropdownToggler = item.querySelector('[data-toggle=dropdown]')

           // $(_lastDropdownToggler.nextElementSibling)
           //.on('click', function(e) {
               // e.stopImmediatePropagation() // so that node doesn't get selected
               // $(_lastDropdownToggler).dropdown('hide') // so that dropdown gets hidden
           //})
    
            $(_lastDropdownToggler)
            .dropdown('show')
            .parent()
            .one('hide.bs.dropdown', function(e) {
                _hideContextMenu(this.querySelector('[data-toggle=dropdown]'))         
            })
        }
    )

})