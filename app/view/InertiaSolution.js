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
					text:'send',
					disabled:false,
					listeners: {
						tap: function(){
							var 	solutionStr = Ext.getCmp('InertiaSolutionTop').getTitle().getTitle().indexOf('INERTIA') > -1 ? 'inertia' : 'units',
								subject = "tigerBaby's Robot Maker Calculator (" + solutionStr + ") Solution",			
								mailTo;
							solutionStr += 'SolutionBox';
							solutionStr = Ext.getCmp(solutionStr).getValue().replace(/\n/g,'%0D');
							mailTo = 'mailto:?subject='+subject+'&body='+solutionStr;
//							console.log(mailTo);							
							window.location.href = mailTo;
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
			}

		]
	},
});

