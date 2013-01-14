Ext.define('motioncalc.util.Conversions', {
	config: {
		name: 'Conversions'
	},
	buildUnitTypeSELECT: function(){
		var returnArray,lastOne,unitType;
		returnArray=new Array();
		lastOne='';
		Ext.getStore('_Conversions').each(function(){
			unitType = this.get('unitType');
			if(lastOne!==unitType){
				returnArray.push({text:unitType,value:unitType});
			}
			lastOne=unitType;
		});
		return returnArray;
	},
	fillUnits: function(type){
		var optionsCount, unitFrom, returnArray;
		optionsCount=0;
		unitFrom='';
		returnArray = [];
		Ext.getStore('_Conversions').each(function(){
			if(this.get('displayUnit')){
				if(this.get('unitType')==type)
				{
					unitFrom=this.get('unitFrom');
					returnArray.push({text: unitFrom, value: unitFrom});
				}
			}
		});
		return returnArray;
	},
	unitsConvert: function(value,unitsFrom,unitsTo,unitType,forDisplay){
		value=!value?0:value;
		value=(value.toString().replace(',','.'))*1;
		var sngPriorAdd;
		var sngPostAdd;
	
		var sngXFactor;
		var sngBase;
		var intX;
		var intConversionsCount;
		var store = Ext.getStore('_Conversions');
	
		// Check to see if units are the same
		if (unitsFrom == unitsTo){
			return value;
		}
		// Find the units to convert from
		var i = 0;
		store.each(function()
		{
			if(this.get("unitFrom") == unitsFrom && this.get("unitType")==unitType){
				intX=i;
			}
			i++;
		});
		sngBase=value*store.getAt(intX).get('xFactor') + store.getAt(intX).get('plusFactor');

		//now find units to convert to
		i = 0;
		store.each(function()
		{
			if(this.get('displayUnit')){
				if(this.get('unitFrom') == unitsTo){
					intX=i;
				}			
			}
			i++;
		});
		var returnValue = (sngBase-store.getAt(intX).get('plusFactor'))/store.getAt(intX).get('xFactor');
		returnValue = forDisplay ? this.getValue(returnValue):returnValue;
	//	console.log(returnValue + ' from unitsConvert');
		return returnValue;

	},
	getValue: function(valueTemp){
		valueTemp = valueTemp.toPrecision(motioncalc.app.significantDigits);
		valueTemp= motioncalc.app.decimalStyle == 1 ? valueTemp : valueTemp.replace('.',',') ;
		return valueTemp;
	}
});
