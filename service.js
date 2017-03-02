//app.constant('Message',"sdlhfiuhf");

app.factory('display', function ($log) {
$log.log('factorySvc entered');
var mesg={};
mesg.msgBox=function(msg){
return msg;	
}
 return mesg;
}); 