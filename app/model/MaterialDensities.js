Ext.define('motioncalc.model.MaterialDensities', {
	extend: 'Ext.data.Model',
	requires: 'Ext.data.proxy.LocalStorage',
	config: {
		fields: ['name', 'density'],
		proxy: {
		    type: 'localstorage',
		    id  : '_MaterialDensities'
		}
	}
});
