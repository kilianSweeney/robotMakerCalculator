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
	'motioncalc.util.Conversions',
	'motioncalc.util.Inertia'
    ],

    views: ['Main'],
    stores: ['HomeIcons','GlobalSettings','Conversions','MaterialDensities','OriginalMaterialDensities'],
    models: ['GlobalSettings','MaterialDensities'],
    controllers: ['Inertia','AddMaterial'],
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

conversionFunctions: Ext.create('motioncalc.util.Conversions'),
inertiaFunctions: Ext.create('motioncalc.util.Inertia'),
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },
    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
	//set global vars
	var decimalStyle, significantDigits,density,mass,linearDistance,inertia;
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
	Ext.Viewport.add(motioncalc.app.mainView);
//	motioncalc.app.mainView.setActiveItem(4);
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
	getGlobalSetting: function(id){
		var rec,val;
		rec = Ext.getStore('_GlobalSettings').getById(id);
		val = rec===null?rec:rec.get('value');
		return val;
	},
	setGlobalSetting: function(id,newValue){	
		var stor = Ext.getStore('_GlobalSettings');
		stor.load();
		var rec = stor.getById(id);
		if(rec===null){
			stor.add({id:id,value:newValue});
			rec = stor.getById(id);
		}
		else rec.set('value',newValue);
		rec.save();
	}
});


