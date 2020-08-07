const https = require('https')


https.get("https://restcountries.eu/rest/v2/name/turkey" , response =>{

    //datalari aliyor
    let data = ""
    response.on('data', chunk =>{
        data += chunk
    })

    //data bittiginde girdigi yer
    response.on('end', _ =>{
        
        let jsonData = JSON.parse(data)
        console.log(jsonData[0].name)
    })

    //bir hata olursa çalışacak yer
}).on('error', err =>{
    console.log("HATA : " + err)
})