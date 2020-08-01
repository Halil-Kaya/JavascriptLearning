function getTextFile(url){
    fetch(url)
    .then(response =>{
        return response.text()
    })
    .then(response =>{
        console.log(response)
    })
    .catch(err =>{
        console.log(err)
    })
}

function getJsonFile(url){

    fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(response =>{
        console.log(response)
    })
    .catch(err =>{
        console.log(err)
    })

}


getTextFile("data.txt")
getJsonFile("data.json")