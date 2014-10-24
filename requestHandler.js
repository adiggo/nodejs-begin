var exec = require("child_process").exec;

function start(response){
    console.log("Reqeust handler start was called");
    //we use exec to execute a shell command. 
    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });//exec is asynchronous

   /* function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000); */
}

function upload(response){
    console.log("Request handler's upload was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;


