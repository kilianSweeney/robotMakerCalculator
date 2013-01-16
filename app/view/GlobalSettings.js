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
			title: 'Global Settings'
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
//				options: fillUnits('Density'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.density);
					},
				change: function(selectbox,newValue,oldValue)
				    {
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
//				options: fillUnits('Mass'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.mass);
					},
				change: function(selectbox,newValue,oldValue)
				    {
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
//				options: fillUnits('Linear distance'),
				listeners:{
//					initialize:function(){
//						this.setValue(motioncalc.app.linearDistance);
//					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(motioncalc.view.GlobalSettings.isEnabled){
						if(newValue === oldValue)return;        
						motioncalc.app.linearDistance = newValue;
						motioncalc.app.setGlobalSetting('LinearDistance',newValue);
					}
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'inertia',
				label: 'Inertia',
				id: '_inertia',
//				options: fillUnits('Inertia'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.inertia);
					},
				change: function(selectbox,newValue,oldValue)
				    {
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
			Ext.ComponentQuery.query('#_mass')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Mass'));
			Ext.ComponentQuery.query('#linear-distance')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Linear distance')).setValue(motioncalc.app.linearDistance);
//			Ext.ComponentQuery.query('#linear-distance')[0].setValue(motioncalc.app.linearDistance);
			Ext.ComponentQuery.query('#_inertia')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Inertia'));
			Ext.ComponentQuery.query('#_density')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Density'));
			motioncalc.view.GlobalSettings.isEnabled = true;
	}
});

