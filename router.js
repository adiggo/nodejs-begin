// navigate to different requestHandler

function route(handle, pathname, response, postdata){
    console.log("about to route a request for" + pathname);
    if (typeof handle[pathname] === 'function'){
       handle[pathname](response, postdata);
    }else{
        console.log("No request handler found for" + pathname);
        response.writeHead(200, {"Content-Type": "text-plain"});
        response.write("404 not found");
        response.end();
    }
}
exports.route = route;
