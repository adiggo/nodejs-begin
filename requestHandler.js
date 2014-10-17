function start(){
    console.log("Reqeust handler start was called");
    return "Hello World";
}

function upload(){
    console.log("Request handler's upload was called");
    return "Hello World";
}

exports.start = start;
exports.upload = upload;


