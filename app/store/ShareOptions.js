Ext.define('motioncalc.store.ShareOptions', {
    extend: 'Ext.data.Store',	
    config: {
	storeId:'_ShareOptions',
	autoLoad: true,
        fields: ['title', 'fc'],
        data: [
		{ title: '-select one-', fc: function() {return;} },
		{ title: 'EMAIL', fc: function(solutionStr,typeStr) {
				var 	subject = "Robot Maker Calculator solution coming your way",			
					mailTo,
					sendStr = '';
				solutionStr = typeStr.indexOf('about') > -1 ? (solutionStr + '%20http://' + motioncalc.app.siteURL) : solutionStr;
				sendStr = 'It occured to me that you might like to know this.%0D%0A%0D%0A'+ solutionStr;
				mailTo = 'mailto:?subject='+subject+'&body='+sendStr;
				window.location.href = mailTo;				
			} 
		},
            	{ title: 'FACEBOOK', 
			fc: function(solutionStr,typeStr) {
					var 	sendStr = "https://www.facebook.com/dialog/feed?",
						shortAnswer = Ext.getCmp('shortAnswer').getValue();
					sendStr += "app_id=138804262951767";
					sendStr += "&link=http://"+motioncalc.app.siteURL+"";
					sendStr += "&picture=http://"+motioncalc.app.siteURL+"/resources/icons/motioncalc/squareicon144.png";
					sendStr += "&name=tigerBaby\'s%20Robot%20Maker%20Calculator&caption=Robot%20Maker%20Calculator%20solution%20coming%20your%20way";
					sendStr += "&description=";
					if(typeStr.indexOf('unit') > -1){
						sendStr += "did%20you%20know%20that%20";
						sendStr += shortAnswer.replace('=','is%20equal%20to');
						sendStr +='?';
					}
					else if(typeStr.indexOf('about') > -1){
						sendStr+= solutionStr + '%20http://' + motioncalc.app.siteURL;
					}
					else sendStr += shortAnswer;

					sendStr += "&redirect_uri=http://"+motioncalc.app.siteURL+"";
					window.location.href = sendStr;
				} 
		},
		{ title: 'TWITTER', fc: function(solutionStr,typeStr) {				
				var 	url = typeStr.indexOf('about') > - 1 ? motioncalc.app.siteURL : motioncalc.app.siteTiny,
					sendStr = "https://twitter.com/share?url=http://" + url + "&text=",
					txt = typeStr.indexOf('about') > - 1 ? solutionStr : Ext.getCmp('shortAnswer').getValue(),
					tag = typeStr.indexOf('inertia') > -1 ? '' : '%23RbtMkrCalc%20';
				sendStr += txt + '%0D%0A';
				sendStr += tag; 
				window.location.href = sendStr;
			} 
		},		
        ]
    }
});
