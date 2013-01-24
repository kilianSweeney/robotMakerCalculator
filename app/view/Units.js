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
                title: 'UNIT CONVERTER'
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
			Ext.getCmp('unitsFrom').setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
			global_measurementTypeChange = true;
			Ext.getCmp('unitsTo').setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
		    }
               	}
	    },
	    {
		xtype: 'selectfield',
		name : 'unitsFrom',
		id: 'unitsFrom',
		label: 'Unit',
		dataType: 'unit-types',
//		options: fillUnits('Area'),
            },
	    {
		xtype: 'numberfield',
		name : 'unitsAmount',
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
			unitsAmount = Ext.getCmp('unitsAmount');
			unitsAnswer = Ext.getCmp('unitsAnswer');
			if(unitsAmount.get('value')==0){
				unitsAnswer.set('value',0);
				return;
			}
			unitsFrom = Ext.getCmp('unitsFrom');
			unitsTo = Ext.getCmp('unitsTo');
			unitsType = Ext.getCmp('unitsType');
			returnedValue = motioncalc.app.conversionFunctions.unitsConvert(unitsAmount.get('value'),unitsFrom.get('value'),unitsTo.get('value'),unitsType.get('value'),true);
			unitsAnswer.set('value',returnedValue);
//			console.log(unitsAnswer.get('value') +' | '+returnedValue);
		}

		Ext.getCmp('unitsType').setOptions(motioncalc.app.conversionFunctions.buildUnitTypeSELECT());
		Ext.getCmp('unitsTo').setOptions(motioncalc.app.conversionFunctions.fillUnits('Area'));
		Ext.getCmp('unitsFrom').setOptions(motioncalc.app.conversionFunctions.fillUnits('Area'));


		Ext.Array.each(Ext.ComponentQuery.query('selectfield[dataType="unit-types"]'),function(){
				this.on({
					change: function(){sendToUnitsConvert();}
				});
		});

		Ext.getCmp('unitsAmount').on({
			blur: function(){sendToUnitsConvert();}
		});
		this.on({
			activate: function(){sendToUnitsConvert();}
		});

	}
});
