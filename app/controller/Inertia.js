Ext.define('motioncalc.controller.Inertia', {
	extend : 'Ext.app.Controller',
	config: {
		views : ['motioncalc.view.Inertia'],
		refs : {
			density: '#inertiaDensity',
			mass: '#inertiaMass',
			materials: '#inertiaMaterials',
			shape: '#inertiaShape',
			inertiaView: '#inertiaID',
			numberFields: 'numberfield',
			buttonMaterials: '#buttonMaterials'
		},
		control: {
			materials: {
				change: function(){
					var materialDensity,density;
					materialDensity = Ext.getCmp('inertiaMaterials').getValue();
					if(materialDensity == null || materialDensity == 0)return;
					materialDensity = motioncalc.app.conversionFunctions.unitsConvert(materialDensity,motioncalc.app.DENSITYBASEUNITS,motioncalc.app.density,'Density');
					density = Ext.getCmp('inertiaDensity');
					if(density.getValue() == materialDensity)return;
					density.setValue(materialDensity);
					this.setInertiaScreen(false,false);
				}
			},
			shape: {
				change: function(){this.setInertiaScreen(true,false)}
			},
			numberFields: {
				blur: function(){this.setInertiaScreen(false,false)}
			},
			inertiaView: {
				activate: 'onActivate'
			},
			buttonMaterials: {
				tap: function(){Ext.getCmp('inertiaMaterials').showPicker();}
			}
		}
	},
	onActivate: function(){
		//unit testing
//		console.log('motioncalc.app.inertiaFunctions.eqnTetraIxx: ' + motioncalc.app.inertiaFunctions.eqnTetraIxx('Ixx'));
//		console.log('motioncalc.app.inertiaFunctions.eqnRodIxx: ' + motioncalc.app.inertiaFunctions.eqnRodIxx('Ixx'));
//		console.log('motioncalc.app.inertiaFunctions.eqnParallelIxx: ' + motioncalc.app.inertiaFunctions.eqnParallelIxx('Ixx'));
//		console.log('motioncalc.app.inertiaFunctions.eqnCylinderIxx: ' + motioncalc.app.inertiaFunctions.eqnCylinderIxx('Ixx'));
//		console.log('motioncalc.app.inertiaFunctions.eqnSphereIxx: ' + motioncalc.app.inertiaFunctions.eqnSphereIxx('Ixx'));
//		console.log('motioncalc.app.inertiaFunctions.eqnSphereShellIxx: ' + motioncalc.app.inertiaFunctions.eqnSphereShellIxx('Ixx'));
//		console.log(Ext.getCmp('isMass').get('value')==1);

		function setLabel(item,unit){
			var tmpLbl,tmpLblSuffix,checkBox,checkBoxChecked,index;		
			tmpLbl = item.get('label');
			index = tmpLbl.indexOf('<')-1;
			if(index>0)tmpLbl = tmpLbl.substring(0,index);
			checkBox = '';
			if(unit == null){
				unit = motioncalc.app.linearDistance;
				
			}
			else {
				checkBoxChecked = tmpLbl.indexOf('Density')>-1?'':'checked';				
				checkBox = '<input id="'+ tmpLbl +'-checkbox" onclick="motioncalc.app.getController(\'Inertia\').switchIsMass(this,\'' + tmpLbl + '\');" type="checkbox" '+ checkBoxChecked + ' />';
			}
			tmpLblSuffix = ' <span style="font-size:smaller;">(' + unit + ')</span>' + checkBox;
			
			item.setLabel(tmpLbl + tmpLblSuffix);
		}
		var inertiaActive,firstActive;
		firstActive = false;
		inertiaActive = Ext.getCmp('inertiaActive');
		if(inertiaActive.getValue()==0){
			inertiaActive.setValue(1);
			firstActive = true;
		}
		this.setInertiaScreen(firstActive);
		setLabel(Ext.getCmp('inertiaDensity'),motioncalc.app.density);
		setLabel(Ext.getCmp('inertiaMass'),motioncalc.app.mass);
		Ext.Array.each(Ext.ComponentQuery.query('numberfield[dataType="linear-distance"]'),function(){
			setLabel(this,null);
		});
	},
	hideShowInertiaItems: function(items){
		var allItems = Ext.ComponentQuery.query('numberfield[dataType="linear-distance"]');
		Ext.Array.each(allItems,function(){
			if((items.indexOf(this) != -1))this.show();
			else this.hide();
		});				
	},
	setInertiaAnswer : function(answers){
		var returnString,cFunctions,itemCount,mass;
		cFunctions = motioncalc.app.conversionFunctions;
		returnString='';
		mass = null;
		itemCount = answers.length;
		for(var i = 0; i < itemCount; i++){
//			console.log(answers[i][0]+'|'+answers[i][1]);
			if(answers[i][1]!==null){
				returnString += answers[i][0] + ': ' + cFunctions.getValue(answers[i][1]) + ' | ' ;
				if(answers[i][0].indexOf('Mass') > -1 && (Ext.getCmp('isMass').getValue()==0))mass = answers[i][1];
			}
		}
		returnString = returnString.substring(0,(returnString.length-3));
		Ext.getCmp('inertiaAnswer').setValue(returnString);
		if(mass !== null){
			Ext.getCmp('inertiaMass').set('value',mass);
//			console.log(Ext.getCmp('inertiaMass').get('value')+'|'+mass);
		}
	},
	switchIsMass: function(item,label){
	//	console.log('orginal isMass: ' + Ext.getCmp('isMass').getValue());
		var otherLabel,otherItem,isMassValue;
		if(label == 'Density'){
			otherLabel = 'Mass';
			isMassValue = item.checked ? 0 : 1;
		}
		else{
			otherLabel = 'Density';
			isMassValue = item.checked ? 1 : 0;
		};
		this.changeDensityMass(isMassValue == 1);
		otherItem = Ext.getDom(otherLabel + '-checkbox')
		if(item.checked)otherItem.checked=false
		else otherItem.checked=true;
		Ext.getCmp('isMass').setValue(isMassValue);
	//	console.log(Ext.getCmp('isMass').getValue());
	},
	changeDensityMass: function(isMass){
		var mass,density;
		mass = Ext.getCmp('inertiaMass');
		density = Ext.getCmp('inertiaDensity');
		if(isMass){
			mass.setReadOnly(false);
			Ext.getCmp('buttonMaterials').setDisabled(true);
			density.setReadOnly(true);
			density.setValue(0);
			
		}
		else {
			density.setReadOnly(false);
			Ext.getCmp('buttonMaterials').setDisabled(false);
			mass.setReadOnly(true);
			mass.setValue(0);
		}
		this.setInertiaAnswer(motioncalc.app.inertiaFunctions.inertiaCalc());
	},
	setInertiaScreen: function(adjustForShape,firstLaunched){
		if(adjustForShape || firstLaunched){
			Ext.getCmp('inertiaDensity').show();
			if(Ext.get('Mass-checkbox') !== null)Ext.get('Mass-checkbox').show();
			var shape,items,mass,isMass;
			isMass = true;
			items = [];
			shape = Ext.ComponentQuery.query('#inertiaShape')[0].get('value');
			switch(shape)
			{
				case 'cylinder':
		//			setInertiaDefaults(shape,1);
					items.push(Ext.getCmp('inertiaLength'));
					items.push(Ext.getCmp('outsideDiameter'));
					items.push(Ext.getCmp('insideDiameter'));
					isMass = (Ext.getCmp('isMass').getValue()==1);
					break;
				case 'parallelepiped':
		//			setInertiaDefaults(shape,1);
					items.push(Ext.getCmp('inertiaHeight'));
					items.push(Ext.getCmp('inertiaLength'));
					items.push(Ext.getCmp('inertiaWidth'));
					isMass = (Ext.getCmp('isMass').getValue()==1);
					break;
				case 'sphericalShell':
		//			setInertiaDefaults(shape,2);
					items.push(Ext.getCmp('radius'));
					Ext.getCmp('inertiaDensity').hide();
					Ext.get('Mass-checkbox').hide();
					isMass = true;
					break;
				case 'sphere':
		//			setInertiaDefaults(shape,1);
					items.push(Ext.getCmp('radius'));
					isMass = (Ext.getCmp('isMass').getValue()==1);
					break;
				case 'slenderRod':
		//			setInertiaDefaults(shape,2);
					items.push(Ext.getCmp('inertiaLength'));
					Ext.getCmp('inertiaDensity').hide();
					Ext.get('Mass-checkbox').hide();
					isMass = true;
					break;
				case 'tetrahedron':
		//			setInertiaDefaults(shape,2);
					items.push(Ext.getCmp('inertiaHeight'));
					items.push(Ext.getCmp('inertiaLength'));
					items.push(Ext.getCmp('inertiaWidth'));
					Ext.getCmp('inertiaDensity').hide();
					Ext.get('Mass-checkbox').hide();
					isMass = true;
					break;				
			}
			this.changeDensityMass(isMass);
			this.hideShowInertiaItems(items);
		}
		else{ this.setInertiaAnswer(motioncalc.app.inertiaFunctions.inertiaCalc());
		}

	}
});
