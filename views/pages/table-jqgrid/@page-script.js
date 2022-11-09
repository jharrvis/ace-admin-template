jQuery(function($) {

	var grid_data = 
	[ 
		{id:"1",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2017-12-13"},
		{id:"2",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2018-02-03"},
		{id:"3",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2016-01-17"},
		{id:"4",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2015-12-23"},
		{id:"5",name:"Laser Printer",note:"note2",stock:"Yes",ship:"FedEx",sdate:"2019-08-06"},
		{id:"6",name:"Play Station",note:"note3",stock:"No", ship:"FedEx",sdate:"2017-12-14"},
		{id:"7",name:"Mobile Telephone",note:"note",stock:"Yes",ship:"ARAMEX",sdate:"2016-06-20"},
		{id:"8",name:"Server",note:"note2",stock:"Yes",ship:"TNT",sdate:"2015-11-11"},
		{id:"9",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2009-02-10"},
		{id:"10",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
		{id:"11",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
		{id:"12",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
		{id:"13",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"},
		{id:"14",name:"Laser Printer",note:"note2",stock:"Yes",ship:"FedEx",sdate:"2007-12-03"},
		{id:"15",name:"Play Station",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
		{id:"16",name:"Mobile Telephone",note:"note",stock:"Yes",ship:"ARAMEX",sdate:"2007-12-03"},
		{id:"17",name:"Server",note:"note2",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
		{id:"18",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
		{id:"19",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
		{id:"20",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
		{id:"21",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
		{id:"22",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
		{id:"23",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"}
	]

	var subgrid_data = 
	[
		{id:"1", name:"sub grid item 1", qty: 11},
		{id:"2", name:"sub grid item 2", qty: 3},
		{id:"3", name:"sub grid item 3", qty: 12},
		{id:"4", name:"sub grid item 4", qty: 5},
		{id:"5", name:"sub grid item 5", qty: 2},
		{id:"6", name:"sub grid item 6", qty: 9},
		{id:"7", name:"sub grid item 7", qty: 3},
		{id:"8", name:"sub grid item 8", qty: 8}
	]



	var grid_selector = "#grid-table"
	var pager_selector = "#grid-pager"
	var grid_box = '#gbox_grid-table'


	// resize to fit page size
	var parent_column = $(grid_selector).closest('.col-12')
	$(window)
	.on('resize.jqGrid', function () {
		$(grid_selector).jqGrid('setGridWidth', parent_column.width())
	})

	//resize on sidebar collapse/expand
	$('.sidebar')
	.on('expand.ace.sidebar' , function() {
		$(grid_box).hide()
	})
	.on('collapsed.ace.sidebar expanded.ace.sidebar' , function() {
		$(grid_selector).jqGrid('setGridWidth', parent_column.width())
		$(grid_box).show()
	})


	// update zIndex for jqGrid modals, to appear above other elements
	$.extend($.jgrid.jqModal, {zIndex: 1100})


	// set custom classes
 	$.jgrid.guiStyles.bootstrap4ace = {
		baseGuiStyle: "bootstrap4",

		gBox: "",
		gView: "",

		hDiv: "border-y-1 brc-grey-l2 mt-n1px bgc-secondary-l3",
		hTable: "text-uppercase text-80 text-dark-tp3",
		colHeaders: "pl-2 pr-1 text-left",


		gridTitle: "bgc-primary-d1 text-white text-125 p-25",
		grid: "table table-hover table-bordered text-dark-m1 text-95 border-0 brc-grey-l2",
		titleButton: "btn btn-primary border-0 mr-2 px-2 w-auto radius-1",

		gridRow: "bgc-h-success-l3",
		
		actionsButton: "action-btn mx-1 px-2px float-none border-0",	

		states: {
			select: "bgc-success-l2 bgc-h-success-l1",
			th: "bgc-yellow-l1 text-blue-d2",
			//hoverTh: "bgc-default-l2 text-default-d3",
			hoverTh: "bgc-yellow-l1 text-dark-m3",
			
			error: "alert bgc-danger-l3",
			//active: "active",
			//textOfClickable: ""
		},


		//dialogs
		overlay: "modal-backdrop",
		dialog: {
			header: "modal-header bgc-default-l4 text-blue-m1 py-2 px-3",
			window: "modal mw-100",
			document: "modal-dialog mw-none",

			content: "modal-content p-0",
			body: "modal-body px-2 py-25 text-130",
			footer: "modal-footer",

			closeButton: "mr-1 mt-n25 px-2 py-1 w-auto h-auto border-1 brc-h-warning-m1 bgc-h-warning-l1 text-danger radius-round",
			fmButton: "btn btn-sm btn-default",

			viewLabel: "control-label py-2",			
			dataField: "form-control my-2 ml-1 w-auto",
			viewCellLabel: "text-right w-4 pr-2",
			viewData: "text-left text-secondary-d2 d-block border-1 brc-grey-l2 p-2 radius-1 my-2 ml-1"
		},

		searchDialog: {
			elem: "form-control w-95",
			operator: "form-control w-95",
			label: "form-control w-95",
			
			addRuleButton: "btn btn-xs btn-outline-primary radius-round btn-bold px-2 mx-1 text-110",
			addGroupButton: "btn btn-xs btn-primary mx-1 text-110",
			deleteRuleButton: "h-4 px-2 pt-0 text-150 mr-1 btn btn-xs btn-outline-danger border-0",
			deleteGroupButton: "h-4 px-2 pt-0 text-150 mr-1 btn btn-xs btn-outline-danger border-0",
		},

		navButton: "action-btn border-0 text-110 mx-1",
		pager: {
			pager: "py-3 px-1 px-md-2 bgc-primary-l4 border-t-1 brc-default-l2 mt-n1px",
			pagerInput: "form-control form-control-sm text-center d-inline-block",
			pagerSelect: "form-control w-6 px-1",
			pagerButton: "p-0 m-0 border-0 radius-round text-110",
		},

		subgrid: {
			button: "",//don't remove
			row: "bgc-secondary-l4 p-0",
		},

		loading: "alert bgc-primary-l3 brc-primary-m2 text-dark-tp3 text-120 px-4 py-3",
	}

	// use the following icons
	var _pageBtn = "btn w-4 h-4 px-0 mx-2px btn-outline-lightgrey btn-h-outline-primary btn-a-outline-primary radius-round bgc-white"
	$.jgrid.icons.icons4ace = {
		baseIconSet: "fontAwesome5",
		common: "fas",
		actions: {
			edit: "fa-pencil-alt text-blue",
			del: "fa-trash-alt text-danger-m1",
			save: "fa-check text-success",
			cancel: "fa-times text-orange-d2"
		},
		
		pager: {
			first: "fa-angle-double-left " + _pageBtn,
			prev: "fa-angle-left " + _pageBtn,
			next: "fa-angle-right " + _pageBtn,
			last: "fa-angle-double-right " + _pageBtn
		},

		gridMinimize: {
			visible: "fa-chevron-up",
			hidden: "fa-chevron-down"
		},

		sort: {
			common: "far",
			asc: "fa-caret-up",
			desc: "fa-caret-down"
		},

		form: {
			close: "fa-times my-2px",
			prev: "fa-chevron-left",
			next: "fa-chevron-right",
			save: "fa-check",
			undo: "fa-times",
			del: "fa-trash-alt",
			cancel: "fa-times",
			
			resizableLtr: "fa-rss fa-rotate-270 text-orange-d1 text-105"
		},
	}


	// initiate plugin
	$(grid_selector).jqGrid({
		//direction: "rtl",

		iconSet: "icons4ace",
		guiStyle: "bootstrap4ace",
		 
		multiselectWidth: 36,		
		
		data: grid_data,
		datatype: "local",
		height: 360,//optional

		//sortable: true,// requires jQuery UI Sortable
	
		colNames:[' ', 'ID','Last Sales','Name', 'Stock', 'Ship via','Notes'],
		colModel:[
			{
				resizable: false,
				name: 'myac',
				index: '',
				width:80,
				fixed:true,
				sortable:false, 
				formatter:'actions', 
				formatoptions: {
					keys:true,
					//delbutton: false,//disable delete button
					delOptions:{
						recreateForm: true,
						beforeShowForm: style_delete_form
					},
					//editformbutton:true,
					//editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
				}
			},
			{
				resizable: false,
				name: 'id',
				index: 'id',
				width:60,
				sorttype:"int",
				editable: true
			},
			{
				resizable: false,
				name: 'sdate',
				index: 'sdate',
				width: 90,
				editable: true,
				sorttype: "date",
				//unformat: pickDate
			},
			{resizable: false,name:'name',index:'name', width:150,editable: true,editoptions:{size:"20",maxlength:"30"}},
			{resizable: false,name:'stock',index:'stock', width:70, editable: true,edittype:"checkbox",editoptions: {value:"Yes:No"}},
			{resizable: false,name:'ship',index:'ship', width:90, editable: true,edittype:"select",editoptions:{value:"FE:FedEx;IN:InTime;TN:TNT;AR:ARAMEX"}},
			{resizable: false,name:'note',index:'note', width:150, sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"10"}} 
		],


		altRows: true,
		altclass: 'bgc-secondary-l5',

		viewrecords : true,
		rowNum: 10,
		rowList:[10,20,30],
		
		pager : pager_selector,
		//toppager: true,
		
		multiselect: true,		
		multiboxonly: true,
		//multikey: "ctrlKey",

		loadComplete : function() {
			var table = this;
			setTimeout(function() {
				$(window).triggerHandler('resize.jqGrid');//trigger window resize to make the grid get the correct size
				enableTooltips(table);
			}, 0);
		},

		editurl: null,//nothing is saved
		caption: "jqGrid with inline editing",

		//autowidth: true, shrinkToFit: true,
		autowidth: true,
		shrinkToFit: $(window).width() > 600,
		forceFit: true,

		grouping: false,
		groupingView : {
			groupField : ['name'],
			groupDataSorted : true,
			plusicon : 'fa fa-chevron-down px-2 w-auto text-primary-m3 bgc-h-primary-l2 py-1 mx-1 radius-1',
			minusicon : 'fa fa-chevron-up px-2 w-auto text-primary-m3 bgc-h-primary-l2 py-1 mx-1 radius-1'
		},

		//subgrid options
		subGridWidth: 36,
		subGrid : true,
		subGridOptions : {
			plusicon : "fas fa-angle-double-down text-secondary-m2 text-90",
			minusicon  : "fas fa-angle-double-up text-info-m1 text-95",
			openicon : "fas fa-fw fa-reply fa-rotate-180 text-orange-d1"
		},

		// for this example we are using local data
		subGridRowExpanded: function (subgridDivId, rowId) {
			var subgridTableId = subgridDivId + "_t";
			$("#" + subgridDivId).html("<table id='" + subgridTableId + "'></table>");
			$("#" + subgridTableId).jqGrid({
				datatype: 'local',
				guiStyle: "bootstrap4ace",
				data: subgrid_data,
				colNames: ['No','Item Name','Qty'],
				colModel: [
					{ name: 'id', width: 50 },
					{ name: 'name', width: 150 },
					{ name: 'qty', width: 50 }
				]
			})
		},

		// resize grid after pagination
		onPaging : function(pgButton){			
			setTimeout(function() {
				$(grid_box).hide();
				$(grid_selector).jqGrid( 'setGridWidth', parent_column.width() );
				$(grid_box).show();
			}, 0);
		},
		
	})
	

	// enable search/filter toolbar
	// jQuery(grid_selector).jqGrid('filterToolbar',{defaultSearch:true,stringResult:true})
	// jQuery(grid_selector).filterToolbar({})


	// navButtons
	$(grid_selector)
	.jqGrid('navGrid', pager_selector,
    	{	//navbar options
      		add: true,
			addicon : 'fa fa-plus-circle text-purple text-100',
			
      		edit: true,
			editicon : 'fa fa-edit text-blue text-100',
			
			del: true,
			delicon : 'fa fa-trash text-danger-m1 text-100',
			
			search: true,
			searchicon : 'fa fa-search text-orange-d1 text-100',
			
			refresh: true,
			refreshicon : 'fa fa-sync text-success-m1 text-100',

			view: true,
      		viewicon : 'fa fa-search-plus text-grey-d1 text-100',      
		},
		{
			// edit record form
			// closeAfterEdit: true,
			width: 320,
			recreateForm: true,
			beforeShowForm : function(e) {
				style_edit_form(e[0]);
			}
		},
		{
			// new record form
			width: 320,
			closeAfterAdd: true,
			recreateForm: true,
			viewPagerButtons: false,
			beforeShowForm : function(e) {
				style_edit_form(e[0]);
			}
		},
		{
			// delete record form
			recreateForm: true,
			beforeShowForm : function(e) {
				style_delete_form(e[0]);
			},
			onClick : function(e) {
			}
		},
		{
			// search form
			recreateForm: true,
			afterShowSearch: function(e){
				style_search_form(e[0]);
			},
			afterRedraw: function(e){
			},
			multipleSearch: true,
			
			// multipleGroup:true,
			// showQuery: true
		},
		{
			// view record form
			recreateForm: true,
			beforeShowForm: function(e){
				style_edit_form(e[0]);
				e[0].querySelector('tr[data-rowpos="1"]').classList.add('d-none');
			}
		}
	)


	// navGrid buttons don't work on touch devices, so trigger them on 'touch'
	$(pager_selector).find('.navtable .action-btn').on('touchend' , function() {
		$(this).triggerHandler('click')
	})


	////////////////////////////////

	// change buttons colors in modals
	function style_edit_form(form) {
		form = $(form)
		// enable datepicker on "sdate" field
		form.find('input[name=sdate]').attr('type', 'date')
		form.find('input[name=stock]').attr('style', 'width: 1.25rem !important;')
		
		// update buttons classes
		var buttons = form.parent().next().find('.EditButton .fm-button').attr('href', '#')// to disable for Bootstrap's "a:not([href])" style
		buttons.eq(0).removeClass('btn-default').addClass('btn-lighter-success border-2 text-600')
		buttons.eq(1).removeClass('btn-default').addClass('btn-lighter-grey border-2')
		
		//update next / prev buttons
		form.parent().next()
			.find('.navButton .fm-button')
			.removeClass('btn-default')
			.addClass('px-25 mx-2px btn-outline-secondary btn-h-outline-primary btn-a-outline-primary radius-round')
	}

	function style_delete_form(form) {
		form = $(form)
		var buttons = form.parent().next().find('.EditButton .fm-button').attr('href', '#')
		buttons.eq(0).removeClass('btn-default').addClass('btn-lighter-danger border-2 text-600')
		buttons.eq(1).removeClass('btn-default').addClass('btn-lighter-grey border-2')
	}	

	function style_search_form(form) {
		form = $(form)
		
		var dialog = form.closest('.ui-jqdialog')
		var buttons = dialog.find('.EditTable').addClass('text-white')

		buttons.find('.EditButton a').removeClass('btn-default')
		buttons.find('.EditButton a[id*="_reset"]').addClass('btn-default')
		buttons.find('.EditButton a[id*="_query"]').addClass('btn-grey')
		buttons.find('.EditButton a[id*="_search"]').addClass('btn-primary')
	}
	

	// enable tooltips
	function enableTooltips(table) {
		$('.navtable .ui-pg-button').tooltip({container:'body', trigger: 'hover'})
		$(table).find('.ui-pg-div').tooltip({container:'body', trigger: 'hover'})
	}

	//var selr = jQuery(grid_selector).jqGrid('getGridParam','selrow')
})