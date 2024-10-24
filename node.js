//step1:importing server libraryy like http
const http1=require('http');
//step2:creating a Server
const webserver =http1.createServer((req,res)=>{
    res.end("Heloo rishi")
});

//step3:assign the port number for the server
//step4:listening the server
webserver.listen(3500,()=>{
    console.log("The current server running in http://localhost:3500");
});