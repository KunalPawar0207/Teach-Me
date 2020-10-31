onEvent("SIGIN", "click", function(event) {
setScreen("screen4");

});
onEvent("SIGNUP", "click", function(event) {
setScreen("screen2");

});
onEvent("logoutbutton", "click", function(event) {
  setScreen("screen1");
});
onEvent("registerbutton", "click", function() {
var currentName=getText("textname");
var currentAge=getNumber("textage");
var currentUserName=getText("regisusername");
var currentPassword=getText("regispassword");
if (currentUserName.length == 0 || currentPassword.length == 0) {
  setText("registerlebel", "Please fill the details");
} else {
  readRecords("DATABASE", {USERNAME:currentUserName}, function(records) {
    if (records.length > 0) {
      setText("registerlebel", "user already exists");
    } else {
      createRecord("DATABASE", {NAME:currentName,AGE:currentAge,
      USERNAME:currentUserName,PASSWORD:currentPassword},function(record){
        setScreen("screen3");
      }
      );
    }
  });
}
  

});
onEvent("okinput", "click", function(event) {
 readRecords("DATABASE", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("loginusername") == (records[i]).USERNAME && getText("loginpassword") == records[i].PASSWORD) {
        setScreen("screen3");
      }
    }
  });
});
