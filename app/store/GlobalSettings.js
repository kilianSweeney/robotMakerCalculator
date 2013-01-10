Ext.define('motioncalc.store.GlobalSettings', {
    extend: 'Ext.data.Store',
    config: {
	storeId:'_GlobalSettings',
	model: 'motioncalc.model.GlobalSettings',
	autoLoad: true
    }
});
