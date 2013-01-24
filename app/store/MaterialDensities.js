Ext.define('motioncalc.store.MaterialDensities', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage','Ext.data.identifier.Uuid'],

	config: {
		storeId:'_MaterialDensities',
		model: 'motioncalc.model.MaterialDensities',
		autoLoad: true,
		fields: ['name','density'],
		sorters: [{
			property: 'name',
			direction: 'ASC'
		}]
	}
});
