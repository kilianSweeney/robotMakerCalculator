Ext.define('motioncalc.view.Main', {
    extend: 'Ext.TabPanel',
    requires: [
        'motioncalc.view.HomeIcons',
        'motioncalc.view.Units',
        'motioncalc.view.Inertia',
	'motioncalc.view.GlobalSettings'
    ],

    config: {
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        items: [
            { xtype: 'homeicons' },
            { xtype: 'unitscard' },
            { xtype: 'inertiacard' },
            { xtype: 'globalsettingscard' }
        ]
    }
});