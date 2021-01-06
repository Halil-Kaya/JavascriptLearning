class UnsplashApi{
    
    constructor(){

        this.baseUrl = "https://api.unsplash.com"
        this.clientID = "Client-ID eSWB9xNm44d9EpvF4jW2F8gsRiw4_HAZolSv35XiJdE"
        this.axiosNesne = axios.create({
            baseURL : this.baseUrl,
            headers : {
                Authorization : this.clientID
            },
            params : {
                query : 'animal',
                count : 1
            }
        })

    }

    async randomResimGetir(){
        try{
            const resimResponse = await this.axiosNesne.get("/photos/random")
            console.log(resimResponse.data[0].urls.regular)
            return resimResponse.data[0].urls.regular;
        }catch(hata){
            console.log(hata)
        }
    }

}

console.log("-")