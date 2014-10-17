var server = require("./server2");
var router = require("./router");
var requestHandlers = require("./requestHandler");
//use handle to store the information of handler's state
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);
