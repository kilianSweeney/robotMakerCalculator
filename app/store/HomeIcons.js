Ext.define('motioncalc.store.HomeIcons', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title', 'xtype'],
        data: [
            { title: 'Units', xtype: 'unitscard', id: 'UnitsCard' },
            { title: 'Inertia', xtype: 'inertiacard', id: 'InertiaCard' },
            { title: 'Settings',      xtype: 'settingscard', id: 'SettingsCard' }
        ]
    }
});
