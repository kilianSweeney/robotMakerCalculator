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
	'motioncalc.util.Conversions'
    ],

    views: ['Main'],
    stores: ['HomeIcons','GlobalSettings','Conversions'],
    models: ['GlobalSettings'],
	controllers: ['Inertia'],
mainView: null,

//global vars
decimalStyle: 1,
significantDigits: 1,
density: 'g/cm³',
mass: 'carat',
linearDistance: 'angstrom',
inertia: 'gm-cm²',
conversionFunctions: Ext.create('motioncalc.util.Conversions'),

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
//        Ext.fly('appLoadingIndicator').destroy();
	//set global vars
	var decimalStyle, significantDigits,density,mass,linearDistance,inertia;
//	motioncalc.app.conversionFunctions = Ext.create('motioncalc.util.Conversions');
	decimalStyle = motioncalc.app.getGlobalSetting('DecimalStyle');
	significantDigits = motioncalc.app.getGlobalSetting('SignificantDigits');
	density = motioncalc.app.getGlobalSetting('Density');
	mass = motioncalc.app.getGlobalSetting('Mass');
	linearDistance = motioncalc.app.getGlobalSetting('LinearDistance');
	inertia = motioncalc.app.getGlobalSetting('inertia');
	motioncalc.app.decimalStyle=decimalStyle===null?motioncalc.app.decimalStyle:decimalStyle;
	motioncalc.app.significantDigits=significantDigits===null?motioncalc.app.significantDigits:significantDigits;
	motioncalc.app.density=density===null?motioncalc.app.density:density;
	motioncalc.app.mass=mass===null?motioncalc.app.mass:mass;
	motioncalc.app.linearDistance=linearDistance===null?motioncalc.app.linearDistance:linearDistance;
	motioncalc.app.inertia=inertia===null?motioncalc.app.inertia:inertia;

        // Initialize the main view
	motioncalc.app.mainView = Ext.create('motioncalc.view.Main');
	Ext.Viewport.add(motioncalc.app.mainView);
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

