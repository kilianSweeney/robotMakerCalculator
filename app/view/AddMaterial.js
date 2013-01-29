Ext.define('motioncalc.view.AddMaterial', {
	extend: 'Ext.form.FormPanel',
	xtype: 'addmaterialcard',
	id: 'addMaterialID',
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select',
		'Ext.field.Number',
		'Ext.Button'
		],
	controllers: ['AddMaterial'],
	config: {
		title: 'Add Material',
		isEnabled: false,
		items: [
		    {
			docked: 'top',
			xtype: 'toolbar',
			title: 'Add Material',
			id: 'AddMaterialTop',
			items: [
				{
					xtype:'button', 
					name:'buttonRestoreMaterials', 
					id:'buttonRestoreMaterials', 
					text:'restore list',
					disabled:false
				},
				{xtype: 'spacer'},
				{
					xtype:'button', 
					name:'buttonManageMaterials', 
					id:'buttonManageMaterials', 
					text:'edit material',
					disabled:false,
				}
			]
		    },
		    {
			xtype: 'fieldset',
			items: [
			    {
				xtype: 'textfield',
				name : 'materialName',
				id: 'materialName',
				label: 'Material Name'
			    },
			    {
				xtype: 'numberfield',
				name : 'materialDensity',
				value: 0,
				id: 'materialDensity',
				label: 'Amount'
			    },
			    {
				xtype: 'selectfield',
				name : 'materialUnitType',
				id: 'materialUnitType',
				label: 'Unit Type'
			    }
			]
		   },
		    {
			xtype: 'selectfield',
			name : 'materialDensities',
			id: 'materialDensities',
			store: '_MaterialDensities',
			displayField: 'name',
			valueField: 'density',
			hidden: true
		    },
		    {
			xtype: 'button',
			name : 'buttonManageMaterialOne',
			id: 'buttonManageMaterialOne',
			text: 'Cancel',
			style: 'width:49%;float:left;'
		    },
		    {
			xtype: 'button',
			name : 'buttonManageMaterialTwo',
			id: 'buttonManageMaterialTwo',
			text: 'Save',
			style: 'width:49%;float:right;'
		    },
		    {
			xtype: 'hiddenfield',
			name : 'materialOriginalValue',
			value: 0,
			id: 'materialOriginalValue'
		    },


		]
	},
	initialize: function(){
		Ext.getCmp('materialUnitType').setOptions(motioncalc.app.conversionFunctions.fillUnits('Density'));
	}
});

