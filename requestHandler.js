function start(){
    console.log("Reqeust handler start was called");
}

function upload(){
    console.log("Request handler's upload was called");
}

exports.start = start;
exports.upload = upload;


