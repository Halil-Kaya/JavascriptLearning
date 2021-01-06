class Ekran{

    constructor(){
        this.espiriGetirBtn = document.querySelector(".btnEspiriGetir")
        this.espiriGetirBtn.addEventListener("click",() => this.espiriGetir())
    }

    async espiriGetir(){

        const rastgeleResim = await new UnsplashApi().randomResimGetir() 
        const rastgeleEspiri = await new JokeApi().randomSakaGetir()
        const ceviri = await new TranslateApi(rastgeleEspiri).ceviriYap()

        const tumSonuclar = {
            rastgeleResim : rastgeleResim,
            rastgeleEspiri : rastgeleEspiri,
            ceviri : ceviri
        }

        this.ekranaSonuclariYazdir(tumSonuclar)
    }

    ekranaSonuclariYazdir(tumSonuclar){
        console.log("?")
        document.querySelector(".sonuc").innerHTML = `
        <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img
              src="${tumSonuclar.rastgeleResim}"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">
                ${tumSonuclar.rastgeleEspiri}
              </p>
            </div>
          </div>
        </div>

        <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4 has-text-primary pb-4">
                ${tumSonuclar.ceviri}
                </p>
              </div>
            </div>
        </div>
`
    }
    
}