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
            title: 'Home',
            xtype: 'list',
            itemTpl: '{title}',
            store: 'HomeIcons',

        }]
    }
});
