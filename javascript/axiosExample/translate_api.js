class TranslateApi{

    constructor(ingilizceCumle){
        this.baseUrl = "gsdfsdf"

        this.aranacakCumle = ingilizceCumle
        this.axionNesnesi = axios.create({
            baseURL : this.baseUrl,
            params: {
                target : "tr",
                key : "FASDFSAFSFASDdf",
                q : this.aranacakCumle
            }
        })

    }

    async ceviriYap(){
        try{
            const resimResponse = await this.axiosNesne.get("/asdf/rffom")
            return resimResponse;
        }catch(hata){
            console.log(hata)
        }
    }


}