var exec = require("child_process").exec;

function start(){
    console.log("Reqeust handler start was called");
    var content = "empty";
    //we use exec to execute a shell command. 
    exec("find /", function(error, stdout, stderr){
        content = stdout;
    });//exec is asynchronous

   /* function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000); */
    return content;  // so the solution to avoid to return a "empty", we need to put content int he exec. pass the response into exec to avoid empty return.
}

function upload(){
    console.log("Request handler's upload was called");
    return "Hello World";
}

exports.start = start;
exports.upload = upload;


