Ext.define('motioncalc.view.About', {
	extend: 'Ext.Container',
	xtype: 'aboutcard',
	requires: [
		],
//	controllers: ['AddMaterial'],
	config: {
		title: 'ABOUT',
		isEnabled: false,
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
				id: 'aboutAbout',
				html: 'version: 1.0.0 | &copy;2013',
				style: 'margin: 20px auto; height:460px; width: 320px; padding: 30px; color: #999999; font-size: .75em; background:url(resources/startup/motioncalc/robotstart320.png) no-repeat;',
				hidden: true					
			},
		    	{
				xtype: 'container',
				id: 'aboutUnits',
				html: '<embed style="width:100%;height:100%;" src="app/content/units.html"/>',
				style: '',
				hidden: true
			},
		    	{
				xtype: 'container',
				id: 'aboutInertia',
				html: 'inertia Txt',
				style: '',
				hidden: true					
			},
		    	{
				xtype: 'container',
				id: 'aboutSettings',
				html: 'settings Txt',
				style: '',
				hidden: true					
			},
		    	{
				xtype: 'container',
				id: 'aboutWelcome',
				html: 'welcome Txt',
				style: '',
			},
			{
				xtype: 'selectfield',
				name : 'aboutItems',
				id: 'aboutItems',
				options: [{text:'Version info',value:'aboutAbout'},{text:'Units Converter',value:'aboutUnits'},{text:'Inertia Calculator',value:'aboutInertia'},{text:'Global Settings',value:'aboutSettings'},{text:'Welcome Memo',value:'aboutWelcome'}],
				hidden: true,
			},
			{
				xtype:'hiddenfield',
				name: 'aboutActiveField',
				id: 'aboutActiveField',
				value: 0
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
		function hideShow(activeItem){
			var allItems = Ext.getCmp('aboutItems'),
			items = allItems.getOptions(),
			count = items.length;
			for(var i = 0; i < count; i++){
				Ext.getCmp(items[i].value).hide();
			}
			if(activeItem == 0)activeItem = 'aboutWelcome';
			else Ext.getCmp('aboutItems').setValue(activeItem);
//			console.log(Ext.getCmp('aboutActiveField').getValue(),activeItem);
			Ext.getCmp(activeItem).show();
			Ext.getCmp('aboutActiveField').setValue(activeItem);
		}
		motioncalc.app.getAppState(this.getFieldList());
		hideShow(Ext.getCmp('aboutActiveField').getValue());
		Ext.getCmp('aboutItems').on({
			change: function(){
				hideShow(0);
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
 	}
});

