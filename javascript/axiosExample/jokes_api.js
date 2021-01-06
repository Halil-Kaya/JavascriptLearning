class JokeApi{
    
    constructor(){

        this.baseUrl = "https://api.chucknorris.io"
        this.axiosNesne = axios.create({
            baseURL : this.baseUrl
        })

    }

    async randomSakaGetir(){
        try{
            const espiriResponse = await this.axiosNesne.get("/jokes/random")
            console.log(espiriResponse.data.value)
            return espiriResponse.data.value;
        }catch(hata){
            console.log(hata)
        }

    }

}

console.log("-")