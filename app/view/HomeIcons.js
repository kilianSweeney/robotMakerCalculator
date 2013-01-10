Ext.define('motioncalc.view.HomeIcons', {
    extend: 'Ext.navigation.View',
    xtype: 'homeicons',
    requires: [
        'Ext.dataview.List',
//        'motioncalc.view.About',
//        'motioncalc.view.Bookmarks'
    ],

    config: {
        iconCls: 'home',
        title: 'Home',
        items: [{
            title: 'Home',
            xtype: 'list',
            itemTpl: '{title}',
            store: 'HomeIcons',
//            listeners: {
//                itemtap: function(list, index, item, record) {
//                    this.up('morecard').push({
//                        xtype: record.data.xtype
//                    });
//                }
//            }
        }]
    }
});
