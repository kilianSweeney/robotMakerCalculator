Ext.define('motioncalc.view.Units', {
    extend: 'Ext.form.FormPanel',
    xtype: 'unitscard',
	id:'unitsID',
    requires: [
        'Ext.form.FieldSet',
	'Ext.field.Number',
	'motioncalc.util.Conversions'
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
		id: 'unitsType',
//		options: conversionFunctions.buildUnitTypeSELECT(),
		listeners:{
			
		change: function(selectbox,newValue,oldValue)
		    {
			global_measurementTypeChange = true;
			Ext.ComponentQuery.query('#unitsFrom')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
			global_measurementTypeChange = true;
			Ext.ComponentQuery.query('#unitsTo')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
		    }
               	}
	    },
	    {
		xtype: 'selectfield',
		name : 'unit',
		id: 'unitsFrom',
		label: 'Unit',
		dataType: 'unit-types',
//		options: fillUnits('Area'),
            },
	    {
		xtype: 'numberfield',
		name : 'amount',
		value: 0,
		id: 'unitsAmount',
		label: 'Amount',
	    },
	    {
		xtype: 'selectfield',
		name : 'convertTo',
		id: 'unitsTo',
		dataType: 'unit-types',
		label: 'Convert To',
//		options: fillUnits('Area'),
            },
	    {
		xtype: 'textfield',
		name : 'unitsAnswer',
		id: 'unitsAnswer',
		value: 0,
		label: '=',
		readOnly: true,
	    }
        ]
    },
	initialize: function(){
		function sendToUnitsConvert(){
			if(typeof global_measurementTypeChange ==='undefined')global_measurementTypeChange = false;
			if(global_measurementTypeChange){
				global_measurementTypeChange = false;			
				return;
			}
			var unitsAmount,unitsAnswer,unitsFrom,unitsTo,returnedValue;
			unitsAmount = Ext.ComponentQuery.query('#unitsAmount')[0];
			unitsAnswer = Ext.ComponentQuery.query('#unitsAnswer')[0];
			if(unitsAmount.get('value')==0){
				unitsAnswer.set('value',0);
				return;
			}
			unitsFrom = Ext.ComponentQuery.query('#unitsFrom')[0];
			unitsTo = Ext.ComponentQuery.query('#unitsTo')[0];
			unitsType = Ext.ComponentQuery.query('#unitsType')[0];
			returnedValue = motioncalc.app.conversionFunctions.unitsConvert(unitsAmount.get('value'),unitsFrom.get('value'),unitsTo.get('value'),unitsType.get('value'),true);
			unitsAnswer.set('value',returnedValue);
//			console.log(unitsAnswer.get('value') +' | '+returnedValue);
		}

		Ext.ComponentQuery.query('#unitsType')[0].setOptions(motioncalc.app.conversionFunctions.buildUnitTypeSELECT());
		Ext.ComponentQuery.query('#unitsTo')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Area'));
		Ext.ComponentQuery.query('#unitsFrom')[0].setOptions(motioncalc.app.conversionFunctions.fillUnits('Area'));


		Ext.Array.each(Ext.ComponentQuery.query('selectfield[dataType="unit-types"]'),function(){
				this.on({
					change: function(){sendToUnitsConvert();}
				});
		});

		Ext.Array.each(Ext.ComponentQuery.query('#unitsAmount'),function(){
				this.on({
					change: function(){sendToUnitsConvert();}
				});
		});

	}
});