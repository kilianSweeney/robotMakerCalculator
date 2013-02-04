Ext.define('motioncalc.model.AppState', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.proxy.LocalStorage','Ext.data.identifier.Uuid'],
	config: {
		identifier: 'uuid',
		fields: ['id', 'value'],
		proxy: {
		    type: 'localstorage',
		    id  : '_AppState'
		}
	}
});
