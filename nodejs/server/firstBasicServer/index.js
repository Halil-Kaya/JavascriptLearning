const http = require('http')


const server = http.createServer((req,res) => {

    if(req.url === "/"){
        res.write("<h1>Merhaba?</h1>")
        res.end()    
    }else if(req.url === "/profile"){
        res.write("<h1>profile?</h1>")
        res.end()    
    }else{
        res.write("<h1>??</h1>")
        res.end()    
    }


})


server.listen(3000)