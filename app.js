//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'motioncalc': 'app'
});
//</debug>

Ext.application({
    name: 'motioncalc',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main'],
    stores: ['HomeIcons','GlobalSettings'],
    models: ['GlobalSettings'],

//global vars
decimalStyle: 1,
scientificNotation: 'true',
significantDigits: 1,
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
	var decimalStyle, scientificNotation, significantDigits;
	decimalStyle = getGlobalSetting('DecimalStyle');
	scientificNotation = getGlobalSetting('ScientificNotation');
	significantDigits = getGlobalSetting('SignificantDigits');
	motioncalc.app.decimalStyle=decimalStyle===null?motioncalc.app.decimalStyle:decimalStyle;
	motioncalc.app.scientificNotation=scientificNotation===null?motioncalc.app.scientificNotation:scientificNotation;
	motioncalc.app.significantDigits=significantDigits===null?motioncalc.app.significantDigits:significantDigits;

        // Initialize the main view
        Ext.Viewport.add(Ext.create('motioncalc.view.Main'));
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
    }
});

function getGlobalSetting(id){
	var rec,val;
	rec = Ext.getStore('_GlobalSettings').getById(id);
	val = rec===null?rec:rec.get('value');
	return val;
}
function setGlobalSetting(id,newValue){	
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

