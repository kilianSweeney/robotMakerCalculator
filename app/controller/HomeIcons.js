Ext.define('motioncalc.controller.HomeIcons', {
	extend : 'Ext.app.Controller',
	config: {
		  	stores : ['HomeIcons'],
	},
control: {
	'_homeIcons': {
	activate: 'onActivate',
	itemtap: 'onSelectEmployee'
	}
}
