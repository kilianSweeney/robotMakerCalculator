Ext.define('motioncalc.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'motioncalc.view.HomeIcons',
        'motioncalc.view.Units',
        'motioncalc.view.Inertia',
	'motioncalc.view.GlobalSettings',
	'motioncalc.view.AddMaterial',
	'motioncalc.view.InertiaSolution'
    ],

    config: {
	title: 'Robot Maker Calculator',
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            },
        },
        items: [
            { xtype: 'homeicons' },
            { xtype: 'unitscard' },
            { xtype: 'inertiacard' },
            { xtype: 'globalsettingscard' },
            { xtype: 'addmaterialcard', hidden: true },
            { xtype: 'inertiasolutioncard', hidden: true }
        ],
    },
	
});
