const { request } = require("http")

var form = document.querySelector('form')

form.onsubmit =function(event){
    var name = document.querySelector('input').value
    request({
        uri: "",
        body: name,
        method: "POST"
    },function(err, res, body){
        var statusMessage = document.querySelector('.status');
        if(err) return statusMessage.value=err;
        statusMessage.value=body;
    });
}