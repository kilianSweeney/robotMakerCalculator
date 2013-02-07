Ext.define('motioncalc.view.About', {
	extend: 'Ext.Panel',
	xtype: 'aboutcard',
	requires: [
		],
//	controllers: ['AddMaterial'],
	config: {
		title: 'ABOUT',
		isEnabled: false,
		id: 'aboutCardID',
		scrollable: true,
		items: [
		    {
			docked: 'top',
			xtype: 'toolbar',
			title: 'ABOUT RMC',
			id: 'AboutRMC',
			items: [
				{
					xtype:'button', 
					name:'buttonAboutInfo', 
					id:'buttonAboutInfo', 
					text:'info',
					disabled:false,
					listeners: {
						tap: function(){
							Ext.getCmp('aboutItems').showPicker();
						}
					}
				},
				{xtype: 'spacer'},
				{
					xtype:'button', 
					name:'buttonAboutShare', 
					id:'buttonAboutShare', 
					text:'share',
					disabled:false,
					listeners: {
						tap: function(){
							Ext.getCmp('aboutSocialShares').showPicker();
						}
					}
				}
			]
		    },
			{
				xtype: 'container',
				name: 'aboutPages',
				id: 'aboutPages',
				items: [
				    	{
						xtype: 'container',
						id: 'aboutWelcome',
						html: 'welcome! loading...',
					},
				    	{
						xtype: 'container',
						id: 'aboutUnits',
						html: 'units loading...',
						hidden: true
					},
				    	{
						xtype: 'container',
						id: 'aboutInertia',
						html: 'inertia loading...',
						style: '',
						hidden: true					
					},
				    	{
						xtype: 'container',
						id: 'aboutSettings',
						html: 'settings loading...',
						style: '',
						hidden: true					
					},
				    	{
						xtype: 'container',
						id: 'aboutMaterials',
						html: 'materials loading...',
					},
					{
						xtype: 'container',
						id: 'aboutWiki',
						html: 'Wiki Links loading...',
						hidden: true					
					},
					{
						xtype: 'container',
						id: 'aboutAbout',
						html: '<div class="about-version">version: 1.0.0 | &copy;2013</div><p>&nbsp;</p>',
						hidden: true					
					},

					{
						xtype: 'selectfield',
						name : 'aboutItems',
						id: 'aboutItems',
						options: [{text:'Welcome Memo',value:'aboutWelcome'},{text:'Units Converter',value:'aboutUnits'},{text:'Inertia Calculator',value:'aboutInertia'},{text:'Global Settings',value:'aboutSettings'},{text:'Managing Materials',value:'aboutMaterials'},{text:'Wiki Links',value:'aboutWiki'},{text:'Version info',value:'aboutAbout'},],
						hidden: true,
					},
				]
			},
			{
				xtype:'hiddenfield',
				name: 'aboutActiveField',
				id: 'aboutActiveField',
				value: 'aboutWelcome'
			},
			{
				xtype: 'selectfield',
				name : 'aboutSocialShares',
				id: 'aboutSocialShares',
				store: '_ShareOptions',
				displayField: 'title',
				valueField: 'fc',
				hidden: true
			},
		]
	},
	getFieldList: function(){
		var fieldList = ['aboutActiveField'];
		return fieldList;
	},
	initialize: function(){ 
		function getFieldList(){
			var fieldList = ['aboutActiveField'];
			return fieldList;
		}
		function hideShow(){
			var allItems = Ext.getCmp('aboutItems')
			activeItem = Ext.getCmp('aboutActiveField').getValue(),
			items = allItems.getOptions(),
			count = items.length;
			for(var i = 0; i < count; i++){
				Ext.getCmp(items[i].value).hide();
			}
//			console.log(Ext.getCmp('aboutActiveField').getValue(),activeItem);
			Ext.getCmp(activeItem).show();
			Ext.getCmp('aboutActiveField').setValue(activeItem);
			
			var scroller = Ext.getCmp('aboutCardID').getScrollable();
			if(typeof scroller != "undefined")scroller.getScroller().scrollTo(0,0,false);
		}
		function getPages(){
			function getIt(url,id){
				Ext.Ajax.request({
					url: 'resources/content/' + url,
					method: 'GET',
					callback: function(options, success, response) {
					    Ext.getCmp(id).setHtml( response.responseText );
					}
				});
			}
			var 	pages = [{url:'welcome.html',id:'aboutWelcome'},{url:'units.html',id:'aboutUnits'},{url:'inertia.html',id:'aboutInertia'},{url:'settings.html',id:'aboutSettings'},{url:'materials.html',id:'aboutMaterials'},{url:'wiki.html',id:'aboutWiki'}];
			for(i in pages){
				getIt(pages[i].url,pages[i].id);
//				console.log(pages[i].url,pages[i].id);
			}			
		}
		var 	aboutItems = Ext.getCmp('aboutItems'),
			activeItem; 
		motioncalc.app.getAppState(this.getFieldList());
		activeItem = Ext.getCmp('aboutActiveField').getValue();
		aboutItems.setValue(activeItem);
		hideShow();
		Ext.getCmp('aboutItems').on({
			change: function(){
				Ext.getCmp('aboutActiveField').setValue(Ext.getCmp('aboutItems').getValue());
				hideShow();
				motioncalc.app.setAppState(getFieldList(),6);
			}
		});
		Ext.getCmp('aboutSocialShares').on({
			change: function(){
				var txt ='Get%20with%20it!%20Get%20Robot%20Maker%20Calculator';
				Ext.getCmp('aboutSocialShares').getValue()(txt,'about');			
			}
			
		});
		this.on({
			activate: function(){motioncalc.app.setAppState(getFieldList(),6);}
		});
		getPages();
 	}
});

