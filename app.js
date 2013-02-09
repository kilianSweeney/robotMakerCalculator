//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'motioncalc': 'app'
});
//</debug>

Ext.application({
    name: 'motioncalc',

    requires: [
        'Ext.MessageBox',
	'Ext.Anim',
	'motioncalc.util.Conversions',
	'motioncalc.util.Inertia'
    ],

    views: ['Main'],
    stores: ['ShareOptions','AppState','HomeIcons','GlobalSettings','Conversions','MaterialDensities','OriginalMaterialDensities'],
    models: ['AppState','GlobalSettings','MaterialDensities'],
    controllers: ['HomeIcons','GlobalSettings','Inertia','AddMaterial','InertiaSolution','Units'],
mainView: null,

//global vars
decimalStyle: 1,
significantDigits: 7,
density: 'g/cm³',
mass: 'carat',
linearDistance: 'angstrom',
inertia: 'gm-cm²',
LDBASEUNITS : "m",
DENSITYBASEUNITS : "kg/m³",
MASSBASEUNITS : "kg",
INERTIABASEUNITS : "kg-m²",
PI : 3.141593,

answerFrom: null,
siteURL: 'tigerbaby.me/robot-maker-calc-v1',
siteTiny: 'bit.ly/WzAPnr',
siteLanding: 'tigerbaby.me/robot-maker-calculator',

conversionFunctions: Ext.create('motioncalc.util.Conversions'),
inertiaFunctions: Ext.create('motioncalc.util.Inertia'),
    icon: {
        '57': 'resources/icons/motioncalc/squareicon57.png',
        '72': 'resources/icons/motioncalc/squareicon72.png',
        '114': 'resources/icons/motioncalc/squareicon114.png',
        '144': 'resources/icons/motioncalc/squareicon144.png'
    },
    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/motioncalc/robotstart320.png',
        '640x920': 'resources/startup/motioncalc/robotstart640.png',
        '768x1004': 'resources/startup/motioncalc/robotstart768.png',
        '748x1024': 'resources/startup/motioncalc/robotstart748.png',
        '1536x2008': 'resources/startup/motioncalc/robotstart1536.png',
        '1496x2048': 'resources/startup/motioncalc/robotstart1496.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
	Ext.DomHelper.append(document.body,{tag: 'a', id:'tigerBabyButton', href:'http://' + motioncalc.app.siteLanding,target:'_blank' });
	//set global vars
	var decimalStyle, significantDigits,density,mass,linearDistance,inertia,activeItem;
	decimalStyle = motioncalc.app.getGlobalSetting('DecimalStyle');
	significantDigits = motioncalc.app.getGlobalSetting('SignificantDigits');
	density = motioncalc.app.getGlobalSetting('Density');
	mass = motioncalc.app.getGlobalSetting('Mass');
	linearDistance = motioncalc.app.getGlobalSetting('LinearDistance');
	inertia = motioncalc.app.getGlobalSetting('Inertia');
	motioncalc.app.decimalStyle=decimalStyle===null?motioncalc.app.decimalStyle:decimalStyle;
	motioncalc.app.significantDigits=significantDigits===null?motioncalc.app.significantDigits:significantDigits;
	motioncalc.app.density=density===null?motioncalc.app.density:density;
	motioncalc.app.mass=mass===null?motioncalc.app.mass:mass;
	motioncalc.app.linearDistance=linearDistance===null?motioncalc.app.linearDistance:linearDistance;
	motioncalc.app.inertia=inertia===null?motioncalc.app.inertia:inertia;

	// Load localStorage densities if none exist.
	this.restoreMaterials(null);
	
        // Initialize the main view
	motioncalc.app.mainView = Ext.create('motioncalc.view.Main');
//	console.log('launch',this.getGlobalSetting('activeItem','_AppState'));
	activeItem = this.getGlobalSetting('activeItem','_AppState');
	if(activeItem == null)motioncalc.app.mainView.setActiveItem(6);
	else motioncalc.app.mainView.setActiveItem(this.getGlobalSetting('activeItem','_AppState'));
	Ext.Viewport.add(motioncalc.app.mainView);
	var isPhone = Ext.os.is('Phone');
//	console.log(isPhone);
	if(isPhone){
		var allFormLabels = Ext.select('div.x-form-label');
		allFormLabels.each(function(el){
			Ext.get(el.dom).on('tap',function(){
				var 	txt = this.dom.innerText,
					txtEnd = txt.indexOf('\n')-1;				
					txtEnd = txtEnd > -1 ? txtEnd : txt.length;
//				console.log(txtEnd);
				if(txtEnd<14)return;
				var anim, fromW,toW;
				fromW = '30%';
				toW = '40%';
				anim = Ext.create('Ext.Anim',{
					autoclear:false,
					from:{'min-width':fromW},
					to:{'min-width':toW},
					duration:750,
				});
	//			console.log(fromW +'|'+ toW);
				anim.run(this);						
			});
		});
	}
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
	restoreMaterials: function(doIt){
		var stor = Ext.getStore('_MaterialDensities');
		doIt = doIt == null ? (stor.getCount()==0):doIt;
		if(doIt){
			stor.removeAll();
			stor.sync();
			var	ogStor = Ext.getStore('_originalMaterialDensities'),
				rec = null,
				name = null;
			ogStor.each(function(){
				name = this.get('name');
				stor.add({name:name,density:this.get('density')});
				rec = stor.findRecord('name',name);
				rec.save();			
			});
		}
	},
	getGlobalSetting: function(id,store){
//		console.log(id,store);
		var rec,val;
		store = (typeof store == 'undefined') ? '_GlobalSettings' : store; 
		rec = Ext.getStore(store).getById(id);
		val = rec===null?rec:rec.get('value');
		return val;
	},
	setGlobalSetting: function(id,newValue,store){	
//		console.log('setglobal',id,newValue,store);
		store = (typeof store == 'undefined') ? Ext.getStore('_GlobalSettings') : Ext.getStore(store); 
		store.load();
		var rec = store.getById(id);
		if(rec===null){
			store.add({id:id,value:newValue});
			rec = store.getById(id);
		}
		else rec.set('value',newValue);
		rec.save();
	},
	getAppState: function(fieldList){
		var x = 2;
		for(record in fieldList){
//			console.log(motioncalc.app.getGlobalSetting(fieldList[record],'_AppState'));
			var fieldName,fieldValue;
			fieldName = fieldList[record];
			fieldValue = motioncalc.app.getGlobalSetting(fieldName,'_AppState');
			if(fieldValue != null)Ext.getCmp(fieldName).setValue(fieldValue);
		}
	},
	setAppState: function(fieldList,activeItem){
//		console.log('setappstate',fieldList,activeItem);
		for(record in fieldList){
			motioncalc.app.setGlobalSetting(fieldList[record],Ext.getCmp(fieldList[record]).getValue(),'_AppState');
		}
		motioncalc.app.setGlobalSetting('activeItem',activeItem,'_AppState');
	}
});


