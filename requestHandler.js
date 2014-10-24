var exec = require("child_process").exec;

function start(response){
    console.log("Reqeust handler start was called");
    //we use exec to execute a shell command. 
<<<<<<< HEAD
    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
=======
    exec("find /", function(error, stdout, stderr){
        content = stdout;
>>>>>>> 5865ca5c331f55465bb4c8dea749a91a33d7ede5
    });//exec is asynchronous

   /* function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000); */
<<<<<<< HEAD
=======
    return content;  // so the solution to avoid to return a "empty", we need to put content int he exec. pass the response into exec to avoid empty return.
>>>>>>> 5865ca5c331f55465bb4c8dea749a91a33d7ede5
}

function upload(response){
    console.log("Request handler's upload was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;


