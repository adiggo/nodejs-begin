var exec = require("child_process").exec;

function start(response){
    console.log("Reqeust handler start was called");
    //we use exec to execute a shell command.

    


    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);// stdout is the default output stream of the command
                                // and response get the result from the "ls"
                                // so in javascript, it will executing other request until this finish
                                // then it do a call back.
       // response.write(stderr);
        response.end();
    });

}

function upload(response){
    console.log("Request handler's upload was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;


