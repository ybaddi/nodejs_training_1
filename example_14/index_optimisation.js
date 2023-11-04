const { request } = require("http")

function formSubmit(event){
    var name = document.querySelector('input').value
    var params = {
        uri: "",
        body: name,
        method: "POST"
    }
    return  request(params,handlreResponse);
}

function handlreResponse(err, res, body){
    var statusMessage = document.querySelector('.status');
    if(err) return statusMessage.value=err;
    statusMessage.value=body;
}

document.querySelector('form').onsubmit = formSubmit;