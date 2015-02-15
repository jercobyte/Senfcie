(function(){
    var oldLog = console.log;
    console.log = function (message) {
    	if($('#log').html()){
    		$('#log').html($('#log').html()+"\n"+message);
    	}else{
    		$('#log').html(message);
    	}
        oldLog.apply(console, arguments);
    };
})();