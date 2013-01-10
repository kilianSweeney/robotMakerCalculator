Ext.define('motioncalc.view.Units', {
    extend: 'Ext.form.FormPanel',
    xtype: 'unitscard',
	id:'unitsID',
    requires: [
        'Ext.form.FieldSet',
	'Ext.field.Number'
    ],

    config: {
        iconCls: 'sign_leftright',
        title: 'Units',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Unit Converter'
            },
	    {
		xtype: 'selectfield',
		name : 'measurementType',
		label: 'Measurement Type',
		options: buildUnitTypeSELECT(),
		listeners:{
			
		change: function(selectbox,newValue,oldValue)
		    {
			Ext.ComponentQuery.query('#unitType')[0].setOptions(fillUnits(newValue));
			Ext.ComponentQuery.query('#convertTo')[0].setOptions(fillUnits(newValue));
		    }
               	}
	    },
	    {
		xtype: 'selectfield',
		name : 'unit',
		id: 'unitType',
		label: 'Unit',
		options: fillUnits('Area'),
		listeners:{
			
//		change: function(selectbox,newValue,oldValue)
//		    {

//		    }
		}
            },
	    {
		xtype: 'numberfield',
		name : 'amount',
		label: 'Amount',
		listeners:{
			
//		change: function(selectbox,newValue,oldValue)
//		    {

//		    }
               	}
	    },
	    {
		xtype: 'selectfield',
		name : 'convertTo',
		id: 'convertTo',
		label: 'Convert To',
		options: fillUnits('Area'),
		listeners:{
			
//		change: function(selectbox,newValue,oldValue)
//		    {

//		    }
		}
            },
	    {
		xtype: 'numberfield',
		name : 'unitsAnswer',
		id: 'unitsAnswer',
		label: '=',
		readOnly: true,
		listeners:{
			
//		change: function(selectbox,newValue,oldValue)
//		    {

//		    }
               	}
	    }
        ]
    }
});
