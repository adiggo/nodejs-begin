var exec = require("child_process").exec;

function start(){
    console.log("Reqeust handler start was called");
    var content = "empty";

    exec("ls-lah", function(error, stdout, stderr){
        content = stdout;
    });
   /* function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000); */
    return "Hello World";
}

function upload(){
    console.log("Request handler's upload was called");
    return "Hello World";
}

exports.start = start;
exports.upload = upload;


