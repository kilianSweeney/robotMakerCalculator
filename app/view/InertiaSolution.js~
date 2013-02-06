Ext.define('motioncalc.view.InertiaSolution', {
	extend: 'Ext.form.FormPanel',
	xtype: 'inertiasolutioncard',
	id:'inertiaSolutionID',
	requires: [
		'Ext.Button',
		'motioncalc.store.ShareOptions'
		],
	controllers: ['InertiaSolution'],
	config: {
		title: 'Inertia Solution',
		isEnabled: false,
		items: [
		    {
			docked: 'top',
			xtype: 'toolbar',
			title: 'INERTIA SOLUTION',
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
				{
					xtype:'button', 
					name:'buttonSendSolution', 
					id:'buttonSendSolution', 
					text:'share',
					disabled:false,
					listeners: {
						tap: function(){
							Ext.getCmp('socialShares').showPicker();
						}
					}
				},
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
					},
				]
			},
			{
				xtype: 'selectfield',
				name : 'socialShares',
				id: 'socialShares',
				store: '_ShareOptions',
				displayField: 'title',
				valueField: 'fc',
				hidden: true
			},
			{
				xtype: 'hiddenfield',
				name : 'shortAnswer',
				id: 'shortAnswer',
			},
		
		]
	},
});

