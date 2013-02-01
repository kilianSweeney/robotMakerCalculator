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
				{
					xtype:'button', 
					name:'buttonInertiaReturn', 
					id:'buttonInertiaReturn', 
					text:'return',
					disabled:false,
					listeners: {
						tap: function(){
							if(motioncalc.app.answerFrom=='inertia')motioncalc.app.mainView.setActiveItem(2);
							else motioncalc.app.mainView.setActiveItem(1);
						}
					}
				},
				{xtype: 'spacer'},

			]
		    },
			{
				xtype:'container',
				name:'inertiaSolutionWrapper',
				id:'inertiaSolutionWrapper',
				items: [
					{
						xtype:'container',
						id: 'inertiaCanvas',
						html:'<canvas id="shapeCanvas" style="border: 1px solid black;background:#cccccc;" height="300" weight="300"></canvas>'
					},
					{
						xtype:'textareafield',
						name:'inertiaSolutionBox',
						id:'inertiaSolutionBox',
						readOnly: true
					},
				]
			},
			{
				xtype:'container',
				name:'unitsSolutionWrapper',
				id:'unitsSolutionWrapper',
				items: [
					{
						xtype:'textareafield',
						name:'unitsSolutionBox',
						id:'unitsSolutionBox',
						readOnly: true
					},
				]
			}

		]
	},
});

