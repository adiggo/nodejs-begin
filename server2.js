var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;  //deal with request
        console.log("Request for" + pathname + "received");
        route(handle, pathname);
        response.writeHead(200, {"Content-Type" : "text/plain"}); //define head
        var content = route(handle, pathname);
        response.write(content);  // response
        response.end();  //close
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
exports.start = start;

