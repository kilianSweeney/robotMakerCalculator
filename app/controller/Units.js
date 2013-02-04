Ext.define('motioncalc.controller.Units', {
	extend : 'Ext.app.Controller',
	config: {
		views : ['motioncalc.view.Units'],
		refs : {
			buttonResult: '#buttonUnitsResult',
			buttonAdd: '#buttonAddToInertia',
			selectForInertia: '#selectForInertia',
			unitsView : '#unitsID',
			type : '#unitsType'
		},
		control: {
//			unitsView: {
//				activate: function(){console.log('d');}
//			},
			type:	{
				change: function(){
					var 	typeVal = Ext.getCmp('unitsType').getValue(),
						buttonAdd = Ext.getCmp('buttonAddToInertia'),
						isDisabled = true;
					switch(typeVal){
						case "Density":
						isDisabled = false;
						break;
						case "Mass":
						isDisabled = false;
						break;
						case "Linear distance":
						isDisabled = false;
						break;
					}
					buttonAdd.setDisabled(isDisabled);
				}				
			},
			selectForInertia:	{
				change: function(){
					var selectField,inertiaField;
					selectField = Ext.getCmp('selectForInertia');
					if(selectField.getValue() == 0)return;
					inertiaField = Ext.getCmp(selectField.getValue());
					this.setInertiaAndGo('Linear distance',inertiaField,motioncalc.app.linearDistance);
					selectField.setValue(0);
				}				
			},
			buttonResult: {
				tap: function(){
					motioncalc.app.answerFrom = 'units';
					motioncalc.app.mainView.setActiveItem(5);
				}
			},
			buttonAdd: {
				tap: function(){
					function errMsg(){
						Ext.Msg.alert(							
						   	'Inertia Calculator',
							'Cannot update the Inertia Calculator ' + typeVal + ' field because the calculator is not set for ' + typeVal + ' calculation.'
						);
					}
						var 	typeVal = Ext.getCmp('unitsType').getValue(),
							inertiaType,inertiaField;
						switch(typeVal){
							case "Density":
							inertiaType = motioncalc.app.density;	
							inertiaField = Ext.getCmp('inertiaDensity');
							if(inertiaField.getDisabled() !== false){
								errMsg();
								return;	
							}
							return this.setInertiaAndGo(typeVal,inertiaField,inertiaType);
							break;
							case "Mass":
							inertiaType = motioncalc.app.mass;	
							inertiaField = Ext.getCmp('inertiaMass');
							if(inertiaField.getDisabled() == true){
								errMsg();
								return;	
							}
							return this.setInertiaAndGo(typeVal,inertiaField,inertiaType);
							break;
							case "Linear distance":
							toType = motioncalc.app.linearDistance;
							var 	selectForInertia = Ext.getCmp('selectForInertia'),
								options = [{text:'-select inertia field-',value:0}],
								inertiaFields = [
									{text:'Height',value:'inertiaHeight'},
									{text:'Length',value:'inertiaLength'},
									{text:'Width',value:'inertiaWidth'},
									{text:'Radius',value:'radius'},
									{text:'OutsideDiameter',value:'outsideDiameter'},
									{text:'InsideDiameter',value:'insideDiameter'}
								],
								fieldCount = inertiaFields.length,
								fieldName;
							for(var i = 0;i<fieldCount;i++){
								theField = Ext.getCmp(inertiaFields[i].value);
								if(!theField.isHidden())options.push({text:inertiaFields[i].text,value:inertiaFields[i].value});
							}
							selectForInertia.setOptions(options);
							selectForInertia.showPicker();
							return;
							break;
						}
				}
			}
		},
	},
	setInertiaAndGo: function(typeVal,inertiaField,inertiaType){
		var 	fromAmount = Ext.getCmp('unitsAmount').getValue(),
			fromType = Ext.getCmp('unitsFrom').getValue(),
			toType = Ext.getCmp('unitsTo').getValue(),
			toAmount, inertiaAmount;
		console.log('before to',fromAmount,fromType,toType,typeVal);
		toAmount = motioncalc.app.conversionFunctions.unitsConvert(fromAmount,fromType,toType,typeVal,false);
		console.log('after to',fromAmount,fromType,toType,typeVal);
		inertiaAmount = motioncalc.app.conversionFunctions.unitsConvert(toAmount,toType,inertiaType,typeVal,false);					
		inertiaField.set('value',inertiaAmount);
		motioncalc.app.mainView.setActiveItem(2);
	},
});



