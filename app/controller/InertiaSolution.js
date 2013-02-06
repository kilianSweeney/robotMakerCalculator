Ext.define('motioncalc.controller.InertiaSolution', {
	extend : 'Ext.app.Controller',
	config: {
		views : ['motioncalc.view.InertiaSolution'],
		refs : {
			inertiaView: '#inertiaSolutionID',
			socialShares: '#socialShares',
		},
		control: {
			socialShares: {
				change: function(){
					var 	solutionStr = Ext.getCmp('InertiaSolutionTop').getTitle().getTitle().indexOf('INERTIA') > -1 ? 'inertia' : 'units';
					solutionStr += 'SolutionBox';
					solutionStr = Ext.getCmp(solutionStr).getValue().replace(/\n/g,'%0D%0A');
					Ext.getCmp('socialShares').getValue()(solutionStr);
				}
			},
			inertiaView: {
				activate: function(){
					switch(motioncalc.app.answerFrom){
						case null:
						return;
						break;
						case 'inertia':
						setInertiaSolution(this);
						break;
						case 'units':
						setUnitsSolution();
						break;
					}
					function tagSolutionString(){
						var solutionStr = '\n\n----------------------------------------------\n\n';
						solutionStr += 'tigerBaby\'s Robot Maker Calculator\n';
						solutionStr += 'http://www.tigerbaby.me/robot-maker-calculator\n';
						solutionStr += '\n----------------------------------------------\n\n';
						return solutionStr;
					}
					function setUnitsSolution(){
						Ext.getCmp('InertiaSolutionTop').setTitle('UNITS SOLUTION');
						var 	type = Ext.getCmp('unitsType').getValue(),
							unitFrom = Ext.getCmp('unitsFrom').getValue(),
							amountFrom = Ext.getCmp('unitsAmount').getValue(),
							unitTo = Ext.getCmp('unitsTo').getValue(),
							amountTo = Ext.getCmp('unitsAnswer').getHtml(),
							answer;
						answer = 'Measurement Type: ' + type + '\n\n';
						answer += amountFrom + ' ' + unitFrom + ' = ';
						answer += amountTo + ' ' + unitTo;
						answer += tagSolutionString();
						
						Ext.getCmp('inertiaSolutionWrapper').hide();
						Ext.getCmp('unitsSolutionWrapper').show();
						Ext.getCmp('unitsSolutionBox').setValue(answer);
					}
					function setInertiaSolution(controller){
						Ext.getCmp('InertiaSolutionTop').setTitle('INERTIA SOLUTION');
						Ext.getCmp('inertiaSolutionWrapper').show();
						Ext.getCmp('unitsSolutionWrapper').hide();
						var 	shape = Ext.getCmp('inertiaShape').getValue(),
							densityStr = Ext.getCmp('inertiaDensity').getDisabled() ? '' : 'Density: ' + motioncalc.app.conversionFunctions.getValue(Ext.getCmp('inertiaDensity').getValue()) +  motioncalc.app.density,
							material = Ext.getCmp('inertiaMaterials').getValue(),							
							solutionStr,
							dimensions = [
								['inertiaHeight','Height: '],
								['inertiaLength','Length: ',],
								['inertiaWidth','Width: '],
								['outsideDiameter','OD: '],
								['insideDiameter','ID: '],
								['radius','Radius: '],
							],
							inertiaAnswers = [];
						material = material.indexOf('Select One')>-1 ? '' : ' (' + material + ')';
						densityStr += material  + '\n';
						solutionStr = 'Shape: ' + shape + '\n' + densityStr;

						for(var i = 0;i<dimensions.length;i++){
							solutionStr+= Ext.getCmp(dimensions[i][0]).isHidden() ? '' :dimensions[i][1] + motioncalc.app.conversionFunctions.getValue(Ext.getCmp(dimensions[i][0]).getValue()) + motioncalc.app.linearDistance + '\n';
						}				
						solutionStr += '\n--------------------\n\n';								
						if(typeof window.inertiaAnswers != 'undefined'){
							for(var i=0;i<window.inertiaAnswers.length;i++){
								var 	text = window.inertiaAnswers[i][0];
									unitType = text.indexOf('Mass') === -1 ? motioncalc.app.inertia:motioncalc.app.mass,
									solutionStr += window.inertiaAnswers[i][0].replace('&#180;','\'').replace('&#180;','\'') + ': '  + window.inertiaAnswers[i][1] + unitType +'\n';
								
								switch(text){
									case 'Ixx':
									text = 'xx';
									break;
									case 'Ix&#180;x&#180;':
									text = 'xxPrime';
									break;
									case 'Iyy':
									text = 'yy';
									break;
									case 'Iy&#180;y&#180;':
									text = 'yyPrime';
									break;
									case 'Izz':
									text = 'zz';
									break;
									case 'Mass':
									text = 'Mass'
									default:
									text = null;
									break;

								}
								if(text != null)inertiaAnswers.push([text,window.inertiaAnswers[i][1]]);
							}
						}
						else inertiaAnswers.push(['',0,0]);
					
	//					this.animateShape(null,null,0,shape,[['yyPrime','3.783335e+101'],['yy','3.783335e+101'],['xxPrime','3.783335e+101'],['xx','3.783335e+101'],['zz','3.783335e+101']]);
						controller.animateShape(null,null,0,shape,inertiaAnswers);										
						solutionStr += tagSolutionString();
						Ext.getCmp('inertiaSolutionBox').set('value',solutionStr);
					}
				}
			},
		}
	},
	animateShape: function(oX,oY,route,shape,answers){
	function drawTitle() {
		ctx.beginPath();
		ctx.font = "1em Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = 'right';
		ctx.fillText(shape, 290, 290);
	}
	function drawLabels(){
		var labels = getLabels();
		ctx.font = "bold 1em Arial";
		ctx.textAlign = 'left';
		for(var i = 0;i<labels.length;i++){
			if(labels[i][3])ctx.fillStyle = "#f4f776"
			else ctx.fillStyle = 'black';
			ctx.beginPath();
			ctx.fillText(labels[i][0], labels[i][1], labels[i][2]);	
		}		
	}
	function drawAnswers(){
		var 	labels = getAnswerLabels();
		ctx.font = "normal .75em Arial";
		ctx.fillStyle = '#999999';
		for(var i = 0;i<labels.length;i++){
			var answerStr = '';
			for(var ii = 0;ii<answers.length;ii++){
				if(labels[i][0] == answers[ii][0])answerStr = answers[ii][1];
			}
			ctx.textAlign=labels[i][3];
			ctx.beginPath();
			ctx.fillText(answerStr, labels[i][1], labels[i][2]);	
		}		
	}
	function drawDimensions(){
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 2;
		var lines = getDimensions();
		
		for(var i = 0;i<lines.length;i++){
			drawLine(lines[i][0],lines[i][1]);
			if(lines[i][2][0]){
				var x1,y1,x2,y2,xy,angle;
				angle = 5;
				xy = lines[i][2][1]; 
				if(xy == 3){				
					x1 = angle;
					y1 = angle;
					x2 = angle;
					y2 = angle * -1;
				}
				else if(xy == 4){				
					x1 = angle*-1;
					y1 = angle;
					x2 = x1;
					y2 = angle*-1;
				}
				else {
					x1 = lines[i][2][1] == 0 ? 5 : 0;
					y1 = lines[i][2][1] == 1 ? 5 : 0;
					x2 = x1;
					y2 = y1;					
				}				
				drawLine(lines[i][1],[lines[i][1][0] + x2 ,lines[i][1][1]+y2]);
				drawLine(lines[i][1],[lines[i][1][0]+y1,lines[i][1][1]+x1]);
				drawLine(lines[i][0],[lines[i][0][0]-x2,lines[i][0][1]-y2]);
				drawLine(lines[i][0],[lines[i][0][0]-y1,lines[i][0][1]-x2]);
			}
		}
	}
	function drawInertia(){
		ctx.strokeStyle = 'grey';
		var lines = getInertiaLines();
		
		for(var i = 0;i<lines.length;i++){
			drawLine(lines[i][0],lines[i][1]);
		}		
	}
	function drawCircle(circleLocation,newPosition,radius,route){
		oldPi = 0.01;
		newPi = oldPi + (newPosition/100);
		newPi = newPi * Math.PI;
		ctx.beginPath();
		ctx.arc(circleLocation[0],circleLocation[1],radius,oldPi,newPi,false);
		ctx.stroke();
		ctx.closePath();
		if(typeof route != 'undefined'){		
			setTimeout(function(){motioncalc.app.getController("InertiaSolution").animateShape(0,newPosition,route,shape,answers);},1);
//			animateShape(0,newPosition,route,shape,answers);
		}
	}

	function drawLine(curPos,newPos,route){
		ctx.beginPath();
		ctx.moveTo(curPos[0],curPos[1]);
		ctx.lineTo(newPos[0],newPos[1]);
		ctx.stroke();
		ctx.closePath();
		if(typeof route != 'undefined'){		
			setTimeout(function(){motioncalc.app.getController("InertiaSolution").animateShape(newPos[0],newPos[1],route,shape,answers);},1);
//			animateShape(newPos[0],newPos[1],route,shape,answers);
		}
	}
	var 	canvas = document.getElementById("shapeCanvas"),
		ctx = canvas.getContext("2d"),
		allRoutes = getRoute(),
		nX = null,
		nY = null,
		curPos = [],
		newPos = [],
		isNewItem = false,
		routeType = allRoutes[route][3][0],
		endPos = [allRoutes[route][1][0],allRoutes[route][1][1]],
		isCircle = (routeType =='circle'),
		firstRun = oX == null ? true : false;
		if(oY == null)ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		nX = (oY == null && isCircle) ? 0 : null;
		oX = oX == null ? allRoutes[route][0][0] : oX;
		oY = oY == null ? allRoutes[route][0][1] : oY;
		nX = nX == null ? oX + allRoutes[route][2][0] : nX;
		nY = (isCircle) ? 0 : oY + allRoutes[route][2][1];
		curPos = [oX,oY];
		newPos = [nX,nY];
//		for building only
//		canvas.onmousemove = function(e){if(clicked)console.log(e.offsetX + ' | ' + e.offsetY);};
	if(isCircle && !firstRun){
		newPos[0]=oY;
	}
	
	switch(routeType)
		{
			case 'diag':
				isNewItem = (newPos[allRoutes[route][3][1]] == endPos[allRoutes[route][3][1]]);
			break;
			case 'circle':
				isNewItem = (newPos[0] == endPos[0] && newPos[1] == endPos[1]);
			break;
			default: 
				isNewItem = (newPos[0] == endPos[0] && newPos[1] == endPos[1]);
			break;
		}
	if(isNewItem){
		route++;
		if(typeof allRoutes[route] == 'undefined'){
			drawTitle();
			drawInertia();
			drawDimensions();
			drawLabels();
			drawAnswers();
			return;
		}
		isCircle = (allRoutes[route][3][0]=='circle');
		if(!isCircle){
			curPos[0] = allRoutes[route][0][0];
			curPos[1] = allRoutes[route][0][1];
			newPos[0] = curPos[0] + allRoutes[route][2][0];
			newPos[1] = curPos[1] + allRoutes[route][2][1];
		}
	}

	if(isCircle){
		curPos[0] = allRoutes[route][0][0];
		curPos[1] = allRoutes[route][0][1];
		newPos[0] = (isNewItem || firstRun) ? 0 : oY + 1;
		newPos[1] = allRoutes[route][1][1];
	}
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'white';
	if(isCircle)drawCircle(curPos,newPos[0],allRoutes[route][2][0],route);
	else drawLine(curPos,newPos,route);

	function getDimensions(){
		switch(shape)
		{
			case 'cylinder':
			return	[
//					start position, end position, arrow angle info
					[[165,258],[22,115],[true,1]],
					[[202,160],[269,160],[false,null]],
					[[202,243],[269,243],[false,null]],
					[[258,170],[258,236],[true,4]],
					[[202,180],[238,180],[false,null]],
					[[202,220],[238,220],[false,null]],
					[[226,186],[226,214],[true,4]],
				];
				break;
			case 'parallelepiped':
			return	[
//					start position, end position, arrow angle info
					[[92,208],[64,153],[true,1]],
					[[202,220],[122,220],[true,3]],
					[[64,87],[64,138],[true,4]],
				];
				break;
			case 'sphericalShell':
			return	[
//					start position, end position, arrow angle info
					[[150,150],[207,133],[false,null]],
				];
				break;
			case 'sphere':
			return	[
//					start position, end position, arrow angle info
					[[150,150],[256,116],[false,null]],
				];
				break;
			case 'slenderRod':
			return	[
//					start position, end position, arrow angle info
					[[209,251],[27,69],[true,1]],
				];
				break;
			case 'tetrahedron':
			return	[
//					start position, end position, arrow angle info
					[[268,200],[268,38],[false,null]],
					[[260,40],[130,40],[true,3]],
					[[93,60],[93,190],[true,4]],
					[[175,266],[117,222],[true,1]],
				];
				break;				
		}
	}
	function getAnswerLabels(){
		switch(shape)
		{
			case 'cylinder':
				return [
//					answer,x,y,align
					['yyPrime',103,13,'left'],
					['yy',157,29,'left'],
					['xxPrime',191,67,'right'],
					['xx',245,126,'right'],
					['zz',261,275,'right'],
				];
				break;
			case 'parallelepiped':
				return [
//					answer,x,y,align
					['yyPrime',101,21,'right'],
					['yy',135,19,'left'],
					['xxPrime',235,82,'right'],
					['xx',290,148,'right'],
					['zz',223,259,'right'],
				];
				break;
			case 'sphericalShell':
				return [
//					answer,x,y,align
					['yy',143,18,'right'],
					['xx',30,146,'left'],
					['zz',252,263,'right'],
				];
				break;
			case 'sphere':
				return [
//					answer,x,y,align
					['yy',143,18,'right'],
					['xx',30,146,'left'],
					['zz',252,263,'right'],
				];
				break;
			case 'slenderRod':
				return [
//					answer,x,y,align
					['yyPrime',60,18,'left'],
					['yy',162,100,'left'],
					['xxPrime',106,43,'left'],
					['xx',194,158,'left'],
					['zz',262,273,'right'],
				];
				break;
			case 'tetrahedron':
				return [
//					answer,x,y,align
					['yy',278,213,'right'],
					['xx',95,245,'right'],
					['zz',114,19,'right'],
				];
				break;				
		}
	}

	function getLabels(){
		switch(shape)
		{
			case 'cylinder':
				return [
//					text, x, y, isAnswer
					['L',80,200,false],
					['OD',265,207,false],
					['ID',235,207,false],
					['Y\'',80,20,true],
					['Y',140,28,true],
					['X\'',196,72,true],
					['X',252,133,true],
					['Z',254,262,true],
				];
				break;
			case 'parallelepiped':
				return [
//					text, x, y, isAnswer
					['L',59,197,false],
					['H',41,117,false],
					['W',154,240,false],
					['Y\'',90,43,true],
					['Y',130,39,true],
					['X\'',225,105,true],
					['X',230,130,true],
					['Z',230,260,true],


				];
				break;
			case 'sphericalShell':
				return [
//					text, x, y, isAnswer
					['R',224,139,false],
					['Y',150,20,true],
					['X',12,150,true],
					['Z',258,264,true],
				];
				break;
			case 'sphere':
				return [
//					text, x, y, isAnswer
					['R',272,119,false],
					['Y',150,20,true],
					['X',12,150,true],
					['Z',258,264,true],
				];
				break;
			case 'slenderRod':
				return [
//					text, x, y, isAnswer
					['L',93,181,false],
					['Y',145,101,true],
					['Y\'',39,18,true],
					['X',205,145,true],
					['X\'',83,43,true],
					['Z',267,273,true],
				];
				break;
			case 'tetrahedron':
				return [
//					text, x, y, isAnswer
					['L',130,263,false],
					['W',198,29,false],
					['H',72,123,false],
					['X',65,229,true],
					['Y',285,213,true],
					['Z',121,19,true],
				];
				break;				
		}
	}

	function getInertiaLines(){
		switch(shape)
		{
			case 'cylinder':
				return [
//					start position, end position
					[[70,10],[70,170]],
					[[10,70],[185,70]],
					[[130,13],[130,240]],
					[[239,130],[10,130]],
					[[250,250],[119,119]],
				];
				break;
			case 'parallelepiped':
				return [
//					start position, end position
					[[115,120],[230,244]],
					[[119,131],[222,131]],
					[[125,36],[125,147]],
					[[111,42],[111,119]],
					[[101,109],[222,109]],

				];
				break;
			case 'sphericalShell':
				return [
//					start position, end position
					[[150,150],[150,30]],
					[[150,150],[30,150]],
					[[150,150],[250,250]],

				];
				break;
			case 'sphere':
				return [
//					start position, end position
					[[150,150],[150,30]],
					[[150,150],[30,150]],
					[[150,150],[250,250]],
				];
				break;
			case 'slenderRod':
				return [
//					start position, end position
					[[40,40],[70,40]],
					[[40,40],[40,20]],
					[[250,250],[260,260]],
					[[116,143],[196,143]],
					[[143,150],[143,106]],
//					[[150,150],[250,250]],
				];
				break;
			case 'tetrahedron':
				return [
//					start position, end position
					[[121,44],[121,22]],
					[[269,199],[289,199]],
					[[120,200],[77,220]],
				];
				break;				
		}
	}
	function getRoute(){
		switch(shape)
		{
			case 'cylinder':
				return [
//					start position, end position, radius/back-forward, type
					[[200,200],[200,0],[40,null],['circle',null]],
					[[200,200],[200,0],[20,null],['circle',null]],
					[[225,169],[71,39],[-1,-1],['diag',1]],
					[[71,71],[200,0],[40,null],['circle',null]],
					[[172,230],[43,99],[-1,-1],['diag',0]],
				];
				break;
			case 'parallelepiped':
				return [
//					start position, end position, radius/back-forward, type
					[[206,136],[110,136],[-1,0],['straight',0]],
					[[110,136],[110,200],[0,1],['straight',0]],
					[[110,200],[206,200],[1,0],['straight',0]],
					[[206,200],[206,136],[0,-1],['straight',0]],
					[[206,136],[140,80],[-1,-1],['diag',1]],
					[[152,81],[76,81],[-1,0],['straight',0]],
					[[76,81],[110,140],[1,1.7],['diag',0]],
					[[77,84],[77,140],[0,1],['straight',0]],
					[[77,140],[111,201],[1,1.8],['diag',0]],
				];
				break;
			case 'sphericalShell':
				return [
//					start position, end position, radius/back-forward, type
					[[150,150],[200,0],[110,null],['circle',null]],
					[[150,150],[200,0],[60,null],['circle',null]],
				];
				break;
			case 'sphere':
				return [
//					start position, end position, radius/back-forward, type
					[[150,150],[200,0],[110,null],['circle',null]],
				];
				break;
			case 'slenderRod':
				return [
//					start position, end position, radius/back-forward, type
					[[40,40],[250,250],[1,1],['diag',0]],
				];
				break;
			case 'tetrahedron':
				return [
//					start position, end position, radius/back-forward, type
					[[121,40],[121,200],[0,1],['straight',0]],
					[[121,200],[205,248],[1,.75],['diag',0]],
					[[204,261],[262,197],[1,-1],['diag',1]],
					[[267,199],[121,40],[-.93,-1],['diag',1]],
				];
				break;				
		}		
	}

}

});
