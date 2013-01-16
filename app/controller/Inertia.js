Ext.define('motioncalc.controller.Inertia', {
	extend : 'Ext.app.Controller',
	config: {
		views : ['motioncalc.view.Inertia'],
		refs : {
			density: '#inertiaDensity',
			mass: '#inertiaMass',
			shape: '#inertiaShape',
			inertiaView: '#inertiaID'
		},
		control: {
			shape: {
				change: 'setInertiaScreen'
			},
			inertiaView: {
				activate: 'onActivate'
			}
		}
	},
	onActivate: function(){
		function setLabel(item,unit){
			var tmpLbl,index;		
			unit = unit == null?motioncalc.app.linearDistance:unit;
			tmpLbl = item.get('label');
			index = tmpLbl.indexOf('(')-1;
			if(index>0)tmpLbl = tmpLbl.substring(0,index);
			item.setLabel(tmpLbl + ' <span style="font-size:smaller;">(' + unit + ')</span>');
		}
		
		this.setInertiaScreen();
		setLabel(Ext.getCmp('inertiaDensity'),motioncalc.app.density);
		setLabel(Ext.getCmp('inertiaMass'),motioncalc.app.mass);
		Ext.Array.each(Ext.ComponentQuery.query('numberfield[dataType="linear-distance"]'),function(){
			setLabel(this,null);
		});
	},
	hideShowInertiaItems: function(items){
		var allItems = Ext.ComponentQuery.query('numberfield[dataType="linear-distance"]');
		Ext.Array.each(allItems,function(){
			if((items.indexOf(this) != -1))this.show();
			else this.hide();
		});				
	},
	setInertiaScreen: function(){
		var shape,items;
		items = [];
		shape = Ext.ComponentQuery.query('#inertiaShape')[0].get('value');
		switch(shape)
		{
			case 'cylinder':
	//			setInertiaDefaults(shape,1);
				items.push(Ext.getCmp('inertiaLength'));
				items.push(Ext.getCmp('outsideDiameter'));
				items.push(Ext.getCmp('insideDiameter'));
				break;
			case 'parallelepiped':
	//			setInertiaDefaults(shape,1);
				items.push(Ext.getCmp('inertiaHeight'));
				items.push(Ext.getCmp('inertiaLength'));
				items.push(Ext.getCmp('inertiaWidth'));

				break;
			case 'sphericalShell':
	//			setInertiaDefaults(shape,2);
				items.push(Ext.getCmp('radius'));
				break;
			case 'sphere':
	//			setInertiaDefaults(shape,1);
				items.push(Ext.getCmp('radius'));
				break;
			case 'slenderRod':
	//			setInertiaDefaults(shape,2);
				items.push(Ext.getCmp('inertiaLength'));
				break;
			case 'tetrahedron':
	//			setInertiaDefaults(shape,2);
				items.push(Ext.getCmp('inertiaHeight'));
				items.push(Ext.getCmp('inertiaLength'));
				items.push(Ext.getCmp('inertiaWidth'));
				break;				
		}
		this.hideShowInertiaItems(items);
	}
});