Ext.define('motioncalc.controller.AddMaterial', {
	extend : 'Ext.app.Controller',
	requires : ['motioncalc.store.MaterialDensities'],
	config: {
		views : ['motioncalc.view.AddMaterial'],
		refs : {
			materials: '#materialDensities',
			buttonMaterials: '#buttonManageMaterials',
			buttonRestore: '#buttonRestoreMaterials',
			buttonOne: '#buttonManageMaterialOne',
			buttonTwo: '#buttonManageMaterialTwo',
			addMaterialView: '#addMaterialID',
			materialName: '#materialName',
			materialDensity: '#materialDensity',
			materialUnitType: '#materialUnitType',
		},
		control: {
			addMaterialView: {
				activate: function(){
					Ext.getCmp('manageMaterialActive').setValue(1);
				}
			},
			materialName: {
			},
			materialDensity: {
			},
			materialUnitType: {
			},

			materials: {
				change: function(){
					var record, name,value,densities;
					densities = Ext.getCmp('materialDensities');
					value = densities.getValue();
					if(value == 0 || value == null)return;
					value = motioncalc.app.conversionFunctions.unitsConvert(value,motioncalc.app.DENSITYBASEUNITS,Ext.getCmp('materialUnitType').getValue(),'Density');
					record = densities.record,
					name = densities.getDisplayField();
					name = record.get(name);
					Ext.getCmp('materialName').setValue(name);
					Ext.getCmp('materialDensity').setValue(value);
					Ext.getCmp('materialOriginalValue').setValue(value);
					Ext.getCmp('AddMaterialTop').setTitle('EDIT MATERIAL');
					Ext.getCmp('materialName').setReadOnly(true);
					Ext.getCmp('buttonManageMaterials').set('text','remove');
					Ext.getCmp('buttonManageMaterials').addCls('danger-class');
				}
			},
			buttonMaterials: {
				tap: function(){
					if(Ext.getCmp('materialOriginalValue').getValue()==0){
						Ext.getCmp('materialDensities').setValue(null);
						Ext.getCmp('materialDensities').showPicker();
					}
					else {
						var name = Ext.getCmp('materialName').getValue();
						Ext.Msg.confirm(							
						   	'Remove "' + name + '"',
							'Do you want to permanently remove "' + name + '" from the Material Densities List?',
							function(buttonId) {
								if (buttonId === 'yes') {
									var 	stor = Ext.getStore('_MaterialDensities'),
										rec = stor.findRecord('name',Ext.getCmp('materialName').getValue());
									stor.remove(rec);
									stor.sync();
									motioncalc.app.mainView.setActiveItem(3);            
								}
							}
						);
					}
				}
			},
			buttonRestore: {
				tap: function(){
					Ext.Msg.confirm(							
					   	'Restore List',
						'Do you want to restore to the default Material Densities List?',
						function(buttonId) {
							if (buttonId === 'yes') {
								motioncalc.app.restoreMaterials(true);
								motioncalc.app.mainView.setActiveItem(3);
							}
						}
					);				
				}
			},
			buttonOne: {
				tap: function(){
					motioncalc.app.mainView.setActiveItem(3);
				}
			},
			buttonTwo: {
				tap: function(){
					var ogValue,name,density;
					name = Ext.String.capitalize(Ext.getCmp('materialName').getValue());
					density = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('materialDensity').getValue(),Ext.getCmp('materialUnitType').getValue(),motioncalc.app.DENSITYBASEUNITS,'Density');
					ogValue = Ext.getCmp('materialOriginalValue').getValue();
					if(name == ''){
						Ext.Msg.alert(							
						   	'"Material Name"',
							'Please give this material a name.'
						);
						return;
					}
					
					if(density == 0){
						Ext.Msg.alert(							
						   	'Amount',
							'Please give this material a density value amount.'
						);
						return;
					}
					Ext.Msg.confirm(							
					   	'Save "' + name + '"?',
						'Do you want to save "' + name + '"?',
						function(buttonId) {
							if (buttonId === 'yes') {
								var stor = Ext.getStore('_MaterialDensities');
								stor.load();
								var rec = stor.findRecord('name',name);
								if(rec===null){
									stor.add({name:name,density:density});
									rec = stor.findRecord('name',name);
								}
								else rec.set('density',density);
								rec.save();
								motioncalc.app.mainView.setActiveItem(3);
							}
						}
					);
				}
			}

		}
	},
});


