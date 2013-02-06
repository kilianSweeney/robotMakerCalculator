Ext.define('motioncalc.view.Inertia', {
    extend: 'Ext.form.FormPanel',
    xtype: 'inertiacard',
	id:'inertiaID',
    requires: [
        'Ext.form.FieldSet',
	'Ext.field.Number',
	'Ext.field.Hidden',
	'Ext.Button',
	'motioncalc.util.Conversions'
    ],
	
    config: {
        iconCls: 'expand',
        title: 'Inertia',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'INERTIA CALC',
		items: [
			{
				xtype:'button', 
				name:'buttonInertiaSolution', 
				id:'buttonInertiaSolution', 
				text:'result',
				disabled:false,
			},
			{xtype: 'spacer'},
			{
				xtype:'button', 
				name:'buttonMaterials', 
				id:'buttonMaterials', 
				text:'materials',
				disabled:true
			}
		]
            },
	    {
		xtype: 'hiddenfield',
		name : 'isMass',
		id: 'isMass',
		value: 1
	    },
	    {
		xtype: 'hiddenfield',
		name : 'inertiaActive',
		id: 'inertiaActive',
		value: 0
	    },
	    {
		xtype: 'hiddenfield',
		name : 'inertiaMaterialsClickCount',
		id: 'inertiaMaterialsClickCount',
		value: 0
	    },
		{
			xtype: 'fieldset',
			items: [
			    {
				xtype: 'selectfield',
				name : 'inertiaMaterials',
				id: 'inertiaMaterials',
				store: '_MaterialDensities',
				displayField: 'name',
				valueField: 'name',
				hidden: true
			    },
			    {
				xtype: 'selectfield',
				name : 'inertiaShape',
				label: 'Shape',
				id: 'inertiaShape',
				options: [{value:"cylinder",text:"Cylinder"},{value:"parallelepiped",text:"Parallelepiped"},{value:"sphericalShell",text:"Spherical Shell"},{value:"sphere",text:"Sphere"},{value:"slenderRod",text:"Slender Rod"},{value:"tetrahedron",text:"Tetrahedron"}],
			    },
			    {
				xtype: 'numberfield',
				name : 'inertiaDensity',
				value: 0,
				id: 'inertiaDensity',
				cls: ['convert-for-it'],
				label: 'Density',
				disabled: true
			    },
			    {
				xtype: 'numberfield',
				name : 'inertiaMass',
				value: 0,
				id: 'inertiaMass',
				cls: 'convert-for-it',
				label: 'Mass',
			    },
			    {
				xtype: 'numberfield',
				name : 'inertiaHeight',
				value: 0,
				dataType: 'linear-distance',
				id: 'inertiaHeight',
				label: 'Height',
				hidden: true
			    },
			    {
				xtype: 'numberfield',
				name : 'inertiaLength',
				value: 0,
				dataType: 'linear-distance',
				id: 'inertiaLength',
				label: 'Length',
			    },
			    {
				xtype: 'numberfield',
				name : 'inertiaWidth',
				value: 0,
				dataType: 'linear-distance',
				id: 'inertiaWidth',
				label: 'Width',
				hidden: true
			    },
			    {
				xtype: 'numberfield',
				name : 'outsideDiameter',
				value: 0,
				dataType: 'linear-distance',
				id: 'outsideDiameter',
				label: 'Outside Diameter',
			    },
			    {
				xtype: 'numberfield',
				name : 'insideDiameter',
				value: 0,
				dataType: 'linear-distance',
				id: 'insideDiameter',
				label: 'Inside Diameter',
			    },
			    {
				xtype: 'numberfield',
				name : 'radius',
				value: 0,
				dataType: 'linear-distance',
				id: 'radius',
				label: 'Radius',
				hidden: true
			    },
		]
	},
	{
		xtype: 'container',
		name : 'inertiaAnswer',
		id: 'inertiaAnswer',
	},
        ]
    }
});

