Ext.define('motioncalc.store.AppState', {
    extend: 'Ext.data.Store',
    config: {
	storeId:'_AppState',
	model: 'motioncalc.model.AppState',
	autoLoad: true
    }
});
