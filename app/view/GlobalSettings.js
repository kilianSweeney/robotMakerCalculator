Ext.define('motioncalc.view.GlobalSettings', {
	extend: 'Ext.form.FormPanel',
	xtype: 'globalsettingscard',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'motioncalc.util.Conversions'
		],
	controllers: ['GlobalSettings'],
	config: {
		iconCls: 'settings3',
		title: 'Settings',
		isEnabled: false,
		items: [
		    {
			docked: 'top',
			xtype: 'toolbar',
			title: 'GLOBAL SETTINGS',
			items: [
				{xtype: 'spacer'},
				{
					xtype:'button', 
					name:'buttonAddMaterial', 
					id:'buttonAddMaterial', 
					text:'+/- material',
					disabled:false,
					listeners: {
						tap: function(){
							var pane;
							pane = 4;
							Ext.getCmp('materialName').setValue('');
							Ext.getCmp('materialDensity').setValue(0);
							Ext.getCmp('materialOriginalValue').setValue(null);
							Ext.getCmp('materialName').setReadOnly(false);
							Ext.getCmp('AddMaterialTop').setTitle('Add Material');
							Ext.getCmp('buttonManageMaterials').set('text','edit material');
							Ext.getCmp('buttonManageMaterials').removeCls('danger-class');
							motioncalc.app.mainView.setActiveItem(pane);
						}
					}
				}
			]
		    },
		    {
			xtype: 'fieldset',
//			title: 'Details',
			items: [
			    {
				xtype: 'selectfield',
				name : 'decimalStyle',
				label: 'Decimal Style',
				options: [{text:'US',value:'1'},{text:'EUR',value:'2'}],
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.decimalStyle);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.decimalStyle = newValue;
					motioncalc.app.setGlobalSetting('DecimalStyle',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'significantDigits',
				label: 'Significant Digits',
				options: [{text:'1',value:'1'},{text:'2',value:'2'},{text:'3',value:'3'},{text:'4',value:'4'},{text:'5',value:'5'},{text:'6',value:'6'},{text:'7',value:'7'}],
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.significantDigits);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.significantDigits = newValue;
					motioncalc.app.setGlobalSetting('SignificantDigits',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'density',
				label: 'Density',
				id: '_density',
				listeners:{
				change: function(selectbox,newValue,oldValue)
				    {
					if(!motioncalc.view.GlobalSettings.isEnabled)return;
					if(newValue === oldValue)return;        
					motioncalc.app.density = newValue;
					motioncalc.app.setGlobalSetting('Density',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'mass',
				label: 'Mass',
				id: '_mass',
				listeners:{
					change: function(selectbox,newValue,oldValue)
					    {
						if(!motioncalc.view.GlobalSettings.isEnabled)return;
						if(newValue === oldValue)return;        
						motioncalc.app.mass = newValue;
						motioncalc.app.setGlobalSetting('Mass',newValue);
					    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'linearDistance',
				label: 'Linear Distance',
				id: 'linear-distance',
				listeners:{
					change: function(selectbox,newValue,oldValue)
					    {
						if(!motioncalc.view.GlobalSettings.isEnabled)return;
						if(newValue === oldValue)return;        
						motioncalc.app.linearDistance = newValue;
						motioncalc.app.setGlobalSetting('LinearDistance',newValue);
					    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'inertia',
				label: 'Inertia',
				id: '_inertia',
				listeners:{
					change: function(selectbox,newValue,oldValue)
					    {
						if(!motioncalc.view.GlobalSettings.isEnabled)return;
						if(newValue === oldValue)return;        
						motioncalc.app.inertia = newValue;
						motioncalc.app.setGlobalSetting('Inertia',newValue);
					    }
		                    },
			    }			],
		    }
		]
	},
	initialize: function(){
			Ext.getCmp('_mass').setOptions(motioncalc.app.conversionFunctions.fillUnits('Mass')).setValue(motioncalc.app.mass);;
			Ext.getCmp('linear-distance').setOptions(motioncalc.app.conversionFunctions.fillUnits('Linear distance')).setValue(motioncalc.app.linearDistance);
			Ext.getCmp('_inertia').setOptions(motioncalc.app.conversionFunctions.fillUnits('Inertia')).setValue(motioncalc.app.inertia);
			Ext.getCmp('_density').setOptions(motioncalc.app.conversionFunctions.fillUnits('Density')).setValue(motioncalc.app.density);
			motioncalc.view.GlobalSettings.isEnabled = true;
	}
});

