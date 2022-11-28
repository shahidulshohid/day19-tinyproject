
const fs = require("fs");

const http = require("http");

const url = require("url");

const server=http.createServer((req,res)=>{

const urlObject=url.parse(req.url,true);

const fileName=`${__dirname}/${urlObject.pathname}`;

fs.writeFile(fileName,(error,data)=>{

    if(error){

        res.writeHead(404,{"content-Type":"text/html"});

        res.end(`404 page not found`);
    }

    res.writeHead(200,{"content-Type":"text/html"});

    res.write(data);

    res.end;


})

})

server.listen(8000,()=>{

    console.log("Server is listening at port 8000");
})