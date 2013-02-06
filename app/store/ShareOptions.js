Ext.define('motioncalc.store.ShareOptions', {
    extend: 'Ext.data.Store',	
    config: {
	storeId:'_ShareOptions',
	autoLoad: true,
        fields: ['title', 'fc'],
        data: [
		{ title: '-select one-', fc: function() {return;} },
		{ title: 'EMAIL', fc: function(solutionStr) {
				var 	subject = "Robot Maker Calculator solution coming your way",			
					mailTo,
					sendStr = '';
				sendStr = 'It occured to me that you might like to know this.%0D%0A%0D%0A'+ solutionStr;
				mailTo = 'mailto:?subject='+subject+'&body='+sendStr;
				window.location.href = mailTo;				
			} 
		},
            	{ title: 'FACEBOOK', 
			fc: function(solutionStr) {
					var sendStr = "https://www.facebook.com/dialog/feed?";
					sendStr += "app_id=138804262951767&link=http://"+motioncalc.app.siteURL+"";
					sendStr += "&picture=http://"+motioncalc.app.siteURL+"/resources/icons/motioncalc/squareicon144.png";
					sendStr += "&name=tigerBaby\'s%20Robot%20Maker%20Calculator&caption=%20";
					sendStr += "&description=Robot%20Maker%20Calculator%20solution%20coming%20your%20way";
					sendStr += "&redirect_uri=http://"+motioncalc.app.siteURL+"";
					window.location.href = sendStr;
				} 
		},
		{ title: 'TWITTER', fc: function(solutionStr) {
				var sendStr = "https://twitter.com/share?url=http://"+motioncalc.app.siteURL+"&text=I%20just%20solved%20it%20with%20";
				window.location.href = sendStr;
			} 
		},		
        ]
    }
});
