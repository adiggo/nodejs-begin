var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response) {
        var postdata = "";
        var pathname = url.parse(request.url).pathname;  //deal with request

        console.log("Request for" + pathname + "received");
        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){   //data event
            postdata += postDataChunk;
            console.log("Receveid post data '"+
            postDataChunk + "'.");
        });
        request.addListener("end", function(){       //end event
            route(handle, pathname, response, postdata);
        });

        //route(handle, pathname, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}
exports.start = start;

