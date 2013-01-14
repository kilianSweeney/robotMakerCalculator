Ext.define('motioncalc.view.GlobalSettings', {
	extend: 'Ext.form.FormPanel',
	xtype: 'globalsettingscard',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select'
		],
	controllers: ['GlobalSettings'],
	config: {
		iconCls: 'settings3',
		title: 'Settings',
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
				options: [{text:'1',value:'1'},{text:'2',value:'2'}],
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.decimalStyle);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.decimalStyle = newValue;
					setGlobalSetting('DecimalStyle',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'scientificNotation',
				label: 'Scientific Notation',
				options: [{text:'On',value:'true'},{text:'Off',value:'false'}],
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.scientificNotation);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.scientificNotation = newValue;
					setGlobalSetting('ScientificNotation',newValue);
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
					setGlobalSetting('SignificantDigits',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'density',
				label: 'Density',
				options: fillUnits('Density'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.density);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.density = newValue;
					setGlobalSetting('Density',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'mass',
				label: 'Mass',
				options: fillUnits('Mass'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.mass);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.mass = newValue;
					setGlobalSetting('Mass',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'linearDistance',
				label: 'Linear Distance',
				options: fillUnits('Linear distance'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.linearDistance);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.linearDistance = newValue;
					setGlobalSetting('LinearDistance',newValue);
				    }
		                    },
			    },
			    {
				xtype: 'selectfield',
				name : 'inertia',
				label: 'Inertia',
				options: fillUnits('Inertia'),
				listeners:{
					initialize:function(){
						this.setValue(motioncalc.app.inertia);
					},
				change: function(selectbox,newValue,oldValue)
				    {
					if(newValue === oldValue)return;        
					motioncalc.app.inertia = newValue;
					setGlobalSetting('Inertia',newValue);
				    }
		                    },
			    }			],
		    }
		]
	}
});

