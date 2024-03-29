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
			numberFields: '#inertiaID numberfield',
			buttonMaterials: '#buttonMaterials',
			buttonInertiaSolution : '#buttonInertiaSolution'
		},
		control: {
			materials: {
				change: function(){

					var materialDensity,density,materialName;
					materialDensity = Ext.getCmp('inertiaMaterials').getStore().findRecord("name", Ext.getCmp('inertiaMaterials').getValue()).get("density");
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
			},
			buttonInertiaSolution: {
				tap: function(){
					motioncalc.app.answerFrom = 'inertia';
					motioncalc.app.mainView.setActiveItem(5);
				}
			},
		}
	},
	launch: function(){
		var convertForItems = Ext.select('div.convert-for-it .x-form-label');
		convertForItems.each(function(el){
			Ext.get(el.dom).on('tap',function(){
				var 	activeCls = 'convert-active',
					isMassValue = 0;
				if(this.findParent('div.convert-for-it').className.indexOf(activeCls)>-1)return;
				var 	itemId = 'inertiaDensity',
					itemOtherId = 'inertiaMass';
				if(this.findParent('div.convert-for-it').id==itemId){
					itemId = 'inertiaMass';
					itemOtherId = 'inertiaDensity';
					isMassValue = 0;
				}
				else isMassValue = 1;
				Ext.getCmp(itemId).removeCls(activeCls);
				Ext.getCmp(itemOtherId).addCls(activeCls);
				motioncalc.app.getController('Inertia').changeDensityMass(isMassValue == 1);
				Ext.getCmp('isMass').setValue(isMassValue);
			});
		});
	},
	onActivate: function(){
		function setLabel(item,unit){
			var tmpLbl,tmpLblSuffix,index;		
			tmpLbl = item.get('label');
			index = tmpLbl.indexOf('<')-1;
			if(index>0)tmpLbl = tmpLbl.substring(0,index);
			if(unit == null){
				unit = motioncalc.app.linearDistance;
				
			}
			tmpLblSuffix = Ext.os.is('Phone') ? ' <br />' : ' ';
			tmpLblSuffix = tmpLblSuffix + '<span style="font-size:smaller;">(' + unit + ')</span>';
			
			item.setLabel(tmpLbl + tmpLblSuffix);
		}
		var inertiaActive,firstActive;
		firstActive = false;
		inertiaActive = Ext.getCmp('inertiaActive');
		if(inertiaActive.getValue()==0){
			var convertActive,convertOther;
			inertiaActive.setValue(1);
			firstActive = true;
			motioncalc.app.getAppState(this.getInertiaFieldList());
			if(Ext.getCmp('isMass').getValue()==0){
				convertActive = 'inertiaDensity';
				convertOther = 'inertiaMass';
			}
			else {
				convertActive = 'inertiaMass';
				convertOther = 'inertiaDensity';
			}
			Ext.getCmp(convertOther).removeCls('convert-active');
			Ext.getCmp(convertActive).addCls('convert-active');
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
		var returnString,cFunctions,itemCount,mass,inertiaAnswer;
		inertiaAnswer = Ext.getCmp('inertiaAnswer');
		inertiaAnswer.hide();
		cFunctions = motioncalc.app.conversionFunctions;
		returnString='';
		mass = null;
		itemCount = answers.length;
		returnString = '<ul>';
		window.inertiaAnswers = [];
		for(var i = 0; i < itemCount; i++){
			if(answers[i][1]!==null){
				window.inertiaAnswers.push([answers[i][0],motioncalc.app.conversionFunctions.getValue(answers[i][1])]);
				var 	isMassEntry = (answers[i][0].indexOf('Mass') > -1),
					unitType = isMassEntry  ? motioncalc.app.mass : motioncalc.app.inertia;
				returnString += '<li>' + answers[i][0] + ': ' + cFunctions.getValue(answers[i][1]) + ' <span class="unit-type">' + unitType + '</span> </li>';
				if(isMassEntry && (Ext.getCmp('isMass').getValue()==0)){
					mass = answers[i][1];
				}
			}
		}
		returnString += '</ul>';
		inertiaAnswer.set('html',returnString);
		inertiaAnswer.show({type :"slide",direction : "right", duration : 500});
		if(mass !== null){
			Ext.getCmp('inertiaMass').set('value',mass);
		}
	},
	changeDensityMass: function(isMass){
		var mass,density;
		mass = Ext.getCmp('inertiaMass');
		density = Ext.getCmp('inertiaDensity');
		if(isMass){
			mass.setDisabled(false);
			Ext.getCmp('buttonMaterials').setDisabled(true);
			density.setDisabled(true);
			density.setValue(0);
			
		}
		else {
			density.setDisabled(false);
			Ext.getCmp('buttonMaterials').setDisabled(false);
			mass.setDisabled(true);
			mass.setValue(0);
		}
		this.setInertiaAnswer(motioncalc.app.inertiaFunctions.inertiaCalc());
	},
	setInertiaScreen: function(adjustForShape,firstLaunched){
		if(adjustForShape || firstLaunched){
			Ext.getCmp('inertiaDensity').show();
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
					isMass = true;
					break;
				case 'tetrahedron':
		//			setInertiaDefaults(shape,2);
					items.push(Ext.getCmp('inertiaHeight'));
					items.push(Ext.getCmp('inertiaLength'));
					items.push(Ext.getCmp('inertiaWidth'));
					Ext.getCmp('inertiaDensity').hide();
					isMass = true;
					break;				
			}
			this.changeDensityMass(isMass);
			this.hideShowInertiaItems(items);
		}
		else{
			motioncalc.app.setAppState(this.getInertiaFieldList(),2);
			this.setInertiaAnswer(motioncalc.app.inertiaFunctions.inertiaCalc());
		}
	},
	getInertiaFieldList: function(){
		var fieldList;
		fieldList = ['isMass','inertiaShape','inertiaMass','inertiaDensity','inertiaHeight','inertiaLength','inertiaWidth','radius','insideDiameter','outsideDiameter'];
		return fieldList;		
	},
});
