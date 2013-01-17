Ext.define('motioncalc.util.Inertia', {
	config: {
		name: 'Inertia'
	},
eqnTetraIxx: function(field){
	var sngL;
	var sngW;
	var sngH;
	var sngMass;
	var Ixx;
	sngL = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaLength').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngW = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaWidth').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngH = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaHeight').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	switch(field)
	{
		case 'Ixx':
			//sngI = sngMass / 10# * (sngH ^ 2 + sngL ^ 2)
			Ixx=(sngMass/10) * (Math.pow(sngH,2)+Math.pow(sngL,2));
			break;
		case 'Iyy':
			//sngI = sngMass / 10# * (sngW ^ 2 + sngL ^ 2)
			Ixx=(sngMass/10) * (Math.pow(sngW,2)+Math.pow(sngL,2));
			break;
		case 'Izz':
			//sngI = sngMass / 10# * (sngH ^ 2 + sngW ^ 2)
			Ixx=(sngMass/10) * (Math.pow(sngH,2)+Math.pow(sngW,2));
			break;
		default:
			Ixx=0;
			break;

	}
	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');
},

eqnRodIxx: function(field){
	var sngL;
	var sngMass;
	var Ixx;
	sngL = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaLength').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	switch(field)
	{
		case 'Ixx':
			//sngI = sngMass * sngL ^ 2 / 3#
			Ixx=sngMass * (Math.pow(sngL,2)/12);
			break;
		case 'Iyy':
			//sngI = sngMass * sngL ^ 2 / 3#
			Ixx=sngMass * (Math.pow(sngL,2)/12);
			break;
		case 'IxxPrime':
			//sngI = sngMass * sngL ^ 2 / 3#
			Ixx=sngMass * (Math.pow(sngL,2)/3);
			break;
		case 'IyyPrime':
			//sngI = sngMass * sngL ^ 2 / 3#
			Ixx=sngMass * (Math.pow(sngL,2)/3);
			break;
		default:
			Ixx=0;
			break;

	}
	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');
},

eqnParallelIxx: function(field){
	var sngL;
	var sngW;
	var sngH;
	var sngDensity;
	var sngMass;
	var Ixx;	
	sngL = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaLength').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngW = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaWidth').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngH = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaHeight').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');

	if (Ext.getCmp('isMass').value==1){
		sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	}
	else{
		sngDensity = motioncalc.app.conversionFunctions.unitsConvert(motioncalc.app.density, motioncalc.app.density, motioncalc.app.DENSITYBASEUNITS,'Density');
		sngMass = sngDensity * sngW * sngH * sngL;
	}
	
	switch(field)
	{
		case 'Ixx':
			//sngI = sngMass * ((sngH ^ 2 + sngL ^ 2) / 12#)
			Ixx=sngMass * ((Math.pow(sngH,2)+Math.pow(sngL,2))/12);
			Ext.getCmp('inertiaMass').set('value',motioncalc.app.conversionFunctions.unitsConvert(sngMass, motioncalc.app.MASSBASEUNITS, motioncalc.app.mass, 'Mass'));
			break;
		case 'Iyy':
			//sngI = sngMass * ((sngW ^ 2 + sngL ^ 2) / 12#)
			Ixx=sngMass * ((Math.pow(sngW,2)+Math.pow(sngL,2))/12);
			break;
		case 'Izz':
			//sngI = sngMass * ((sngH ^ 2 + sngW ^ 2) / 12#)
			Ixx=sngMass * ((Math.pow(sngH,2)+Math.pow(sngW,2))/12);
			break;
		case 'IxxPrime':
			//sngI = sngMass / 12# * sngW ^ 2 + sngMass / 3# * sngL ^ 2
			Ixx=(sngMass/12) * (Math.pow(sngW,2)) +((sngMass/3)*Math.pow(sngL,2));
			break;
		case 'IyyPrime':
			//sngI = sngMass / 12# * sngH ^ 2 + sngMass / 3# * sngL ^ 2
			Ixx=(sngMass/12) * (Math.pow(sngH,2)) +((sngMass/3)*Math.pow(sngL,2));
			break;

	}
	
	
	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');

},

eqnCylinderIxx: function(field){
	var sngL;
	var sngOR;
	var sngIR;
	var sngDensity;
	var sngMass;
	var Ixx;	
	sngL = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaLength').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngOR = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('outsideDiameter').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance') / 2;
	sngIR = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('insideDiameter').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance') / 2;

	if (Ext.getCmp('isMass').get('value')==1){
		sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	}
	else{
		sngDensity = motioncalc.app.conversionFunctions.unitsConvert(motioncalc.app.density, motioncalc.app.density, motioncalc.app.DENSITYBASEUNITS,'Density');
		sngMass=sngDensity * PI * (Math.pow(sngOR,2)-Math.pow(sngIR,2)) * sngL;
	}	
	switch(field)
	{
		case 'Ixx':
			//sngI = sngMass * ((sngOR ^ 2 + sngIR ^ 2) / 4# + sngL ^ 2 / 12#)
			Ixx=sngMass * ((Math.pow(sngOR,2)+Math.pow(sngIR,2))/4+Math.pow(sngL,2)/12);
			Ext.getCmp('inertiaMass').set('value',motioncalc.app.conversionFunctions.unitsConvert(sngMass, motioncalc.app.MASSBASEUNITS, motioncalc.app.mass, 'Mass'));
			break;
		case 'Iyy':
			//sngI = sngMass * ((sngOR ^ 2 + sngIR ^ 2) / 4# + sngL ^ 2 / 12#)
			Ixx=sngMass * ((Math.pow(sngOR,2)+Math.pow(sngIR,2))/4+Math.pow(sngL,2)/12);
			break;
		case 'Izz':
			Ixx=(sngMass / 2) * (Math.pow(sngOR,2)+Math.pow(sngIR,2));
			break;
		case 'IxxPrime':
			//sngI = sngMass / 3# * sngL ^ 2 + sngMass / 4# * (sngOR ^ 2 + sngIR ^ 2)
			Ixx=(sngMass / 3 * Math.pow(sngL,2))+sngMass/4 * (Math.pow(sngOR,2) + Math.pow(sngIR,2));
			break;
		case 'IyyPrime':
			//sngI = sngMass / 3# * sngL ^ 2 + sngMass / 4# * (sngOR ^ 2 + sngIR ^ 2)
			Ixx=(sngMass / 3 * Math.pow(sngL,2))+sngMass/4 * (Math.pow(sngOR,2) + Math.pow(sngIR,2));
			break;

	}
	
	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');

},

eqnSphereIxx: function(field){
	// returns inertia about xx axis for a spherical solid in inertia base units
	var sngI;
	var sngR;
	var sngMass;
	var sngDensity;
	sngR = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('radius').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');

	if (Ext.getCmp('isMass').get('value')==1){
		sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	}
	else{
		sngDensity = motioncalc.app.conversionFunctions.unitsConvert(motioncalc.app.density, motioncalc.app.density, motioncalc.app.DENSITYBASEUNITS,'Density');
		sngMass=sngDensity * PI * Math.pow(sngR,3) * 4 / 3;
		Ext.getCmp('inertiaMass').get('value') = motioncalc.app.conversionFunctions.unitsConvert(sngMass, motioncalc.app.MASSBASEUNITS, motioncalc.app.mass, 'Mass');
	}
	var Ixx=sngMass * 2 / 5 * Math.pow(sngR,2);

	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');

},

eqnSphereShellIxx: function(field){
	//returns inertia about xx axis for a spherical shell in inertia base units
	var sngI;
	var sngR;
	var sngMass;
	var singDensity;
	sngR = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('radius').get('value'), motioncalc.app.linearDistance, motioncalc.app.LDBASEUNITS,'Linear distance');
	sngMass = motioncalc.app.conversionFunctions.unitsConvert(Ext.getCmp('inertiaMass').get('value'), motioncalc.app.mass,motioncalc.app.MASSBASEUNITS, 'Mass');
	var Ixx = sngMass * 2 / 3 * Math.pow(sngR, 2);
	return motioncalc.app.conversionFunctions.unitsConvert(Ixx, motioncalc.app.INERTIABASEUNITS, motioncalc.app.inertia, 'Inertia');
}
});