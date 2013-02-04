Ext.define('motioncalc.controller.GlobalSettings', {
 extend : 'Ext.app.Controller',
 
 config: {
	stores : ['GlobalSettings'],
	models : ['GlobalSettings'],
	views : ['motioncalc.view.Inertia'],
	refs : {
		globalSettings : '#globalSettingsID'
	},
	control: {
		globalSettings: {
			activate: function(){
				motioncalc.app.setAppState(null,3);
			}
		}
	}
}

});
