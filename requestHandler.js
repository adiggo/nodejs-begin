function start(){
    console.log("Reqeust handler start was called");
    
    function sleep(millisecond){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + millisecond);
    }
    sleep(10000);
    return "Hello World";
}

function upload(){
    console.log("Request handler's upload was called");
    return "Hello World";
}

exports.start = start;
exports.upload = upload;


