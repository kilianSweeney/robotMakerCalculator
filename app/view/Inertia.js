Ext.define('motioncalc.view.Inertia', {
    extend: 'Ext.form.FormPanel',
    xtype: 'inertiacard',
	id:'inertiaID',
    requires: [
        'Ext.form.FieldSet',
	'Ext.field.Number',
	'Ext.field.Hidden',
	'motioncalc.util.Conversions'
    ],
	
    config: {
        iconCls: 'expand',
        title: 'Inertia',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Inertia'
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
		label: 'Density',
		readonly: true
	    },
	    {
		xtype: 'numberfield',
		name : 'inertiaMass',
		value: 0,
		id: 'inertiaMass',
		label: 'Mass',
		readonly: false
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
		hidden: true
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
	    },
	    {
		xtype: 'textfield',
		name : 'inertiaAnswer',
		id: 'inertiaAnswer',
		value: 0,
		label: '=',
		readOnly: true,
	    }
        ]
    }
});

