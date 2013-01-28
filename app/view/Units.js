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
                title: 'UNIT CONVERTER',
		items: [
			{
				xtype: 'button',
				id: 'buttonUnitsResult',
				text: 'result',
				disabled: true
			}
		]
            },
		{
			xtype: 'hiddenfield',
			name: 'unitsResultStatus',
			id: 'unitsResultStatus',
			value: 4,
			listeners: {
				change: function(){
					var 	resultStatus = Ext.getCmp('unitsResultStatus').getValue(),
						button = Ext.getCmp('buttonUnitsResult'),
						disabled = true;
					if(resultStatus == 1)disabled = false;
					button.setDisabled(disabled);
//					console.log(disabled);
				}
			}
		},
		{
			xtype: 'fieldset',
			items: [
				    {
					xtype: 'selectfield',
					name : 'measurementType',
					label: 'Measurement Type',
					id: 'unitsType',
					listeners:{
			
					change: function(selectbox,newValue,oldValue)
					    {
						var resultStatus = Ext.getCmp('unitsResultStatus');			
						if(resultStatus.getValue()==4)return;
						resultStatus.setValue(3);
						Ext.getCmp('unitsAmount').setValue(0);
						Ext.getCmp('unitsAnswer').set('html','').hide();
						Ext.getCmp('unitsFrom').setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
						Ext.getCmp('unitsTo').setOptions(motioncalc.app.conversionFunctions.fillUnits(newValue));
						resultStatus.setValue(0);
					    }
				       	}
				    },
				    {
					xtype: 'selectfield',
					name : 'unitsFrom',
					id: 'unitsFrom',
					label: 'Unit',
					dataType: 'unit-types',
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
				    },
			]
		},		
	    {
		xtype: 'container',
		name : 'unitsAnswer',
		id: 'unitsAnswer',
		hidden: true
	    }
        ]
    },
	initialize: function(){
		function sendToUnitsConvert(){
			var resultStatus = Ext.getCmp('unitsResultStatus');
			if(resultStatus.getValue()==3 || resultStatus.getValue()==4)return;
			var unitsAmount,unitsAnswer,unitsFrom,unitsTo,returnedValue;
			unitsAmount = Ext.getCmp('unitsAmount');
			unitsAnswer = Ext.getCmp('unitsAnswer');
			unitsFrom = Ext.getCmp('unitsFrom');
			unitsTo = Ext.getCmp('unitsTo');
			unitsType = Ext.getCmp('unitsType');
			unitsAnswer.hide();
			returnedValue = motioncalc.app.conversionFunctions.unitsConvert(unitsAmount.get('value'),unitsFrom.get('value'),unitsTo.get('value'),unitsType.get('value'),true);
			unitsAnswer.set('html',returnedValue);
			resultStatus.setValue(1);
			unitsAnswer.show({type :"slide",direction : "right", duration : 500});
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
//		this.on({
//			activate: function(){sendToUnitsConvert();}
//		});
		Ext.getCmp('unitsResultStatus').setValue(0);
	}
});
