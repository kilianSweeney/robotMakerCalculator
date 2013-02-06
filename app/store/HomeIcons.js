Ext.define('motioncalc.store.HomeIcons', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title', 'xtype'],
        data: [
            { title: 'Unit Converter', xtype: 'unitscard', id: 'UnitsCard' },
            { title: 'Inertia Calculator', xtype: 'inertiacard', id: 'InertiaCard' },
            { title: 'Global Settings',      xtype: 'settingscard', id: 'SettingsCard' },
            { title: 'About RMC',      xtype: 'aboutcard', id: 'AboutCard' }
        ]
    }
});
