Ext.define('motioncalc.model.GlobalSettings', {
	extend: 'Ext.data.Model',
	requires: ['Ext.data.proxy.LocalStorage','Ext.data.identifier.Uuid'],
	config: {
		identifier: 'uuid',
		fields: ['id', 'value'],
		proxy: {
		    type: 'localstorage',
		    id  : '_GlobalSettings'
		}
	}
});
