Ext.define('motioncalc.store.HomeIcons', {
    extend: 'Ext.data.Store',

    config: {
        fields: ['title', 'xtype'],
        data: [
            { title: 'Units', xtype: 'unitscard', id: 'UnitsCard' },
            { title: 'Inertia', xtype: 'inertiacard', id: 'InertiaCard' },
            { title: 'Material Densities', xtype: 'materialscard', id: 'MaterialsCard' },
            { title: 'About tigerBaby',      xtype: 'aboutcard', id: 'AboutCard' },
            { title: 'Settings',      xtype: 'settingscard', id: 'SettingsCard' }
        ]
    }
});
