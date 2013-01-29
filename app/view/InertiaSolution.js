Ext.define('motioncalc.view.InertiaSolution', {
	extend: 'Ext.form.FormPanel',
	xtype: 'inertiasolutioncard',
	id:'inertiaSolutionID',
	requires: [
		'Ext.Button'
		],
	controllers: ['InertiaSolution'],
	config: {
		title: 'Inertia Solution',
		isEnabled: false,
		items: [
		    {
			docked: 'top',
			xtype: 'toolbar',
			title: 'Inertia Solution',
			id: 'InertiaSolutionTop',
			items: [
				{xtype: 'spacer'},
				{
					xtype:'button', 
					name:'buttonInertiaReturn', 
					id:'buttonInertiaReturn', 
					text:'return',
					disabled:false,
					listeners: {
						tap: function(){motioncalc.app.mainView.setActiveItem(2);}
					}
				},
			]
		    },
			{
				xtype:'container',
				html:'<canvas id="shapeCanvas" style="border: 1px solid black;background:#cccccc;" height="300" weight="300"></canvas>'
			}
		]
	},
});
