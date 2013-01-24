Ext.define('motioncalc.view.HomeIcons', {
	extend: 'Ext.navigation.View',
	xtype: 'homeicons',
		requires: [
		'Ext.dataview.List',
	],
	config: {
		iconCls: 'home',
		title: 'Home',
		items: [{
				title: 'ROBOT MAKER CALCULATOR',
				xtype: 'list',
				itemTpl: '{title}',
				id: '_homeIcons',
				store: 'HomeIcons',
				listeners: {
					itemtap: function(list,index,item,e){
						motioncalc.app.mainView.setActiveItem(index+1);
					}
			}
		}]
	}
});
