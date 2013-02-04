Ext.define('motioncalc.controller.HomeIcons', {
	extend : 'Ext.app.Controller',
	config: {
		  	stores : ['HomeIcons'],
			views : ['motioncalc.view.HomeIcons'],
			refs : {
				homeIcons: '#homeIconsID',
			},
			control: {
				homeIcons: {
					activate: function(){
						var item;
						item = Ext.getCmp('homeIconsID');
						if(!item.isActivated)item.isActivated=true;
						else motioncalc.app.setAppState(null,0);
					}
				}
			},			
	}
});
