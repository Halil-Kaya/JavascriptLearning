const form = document.querySelector("#film-form")
const titleInput = document.querySelector("#title")
const directorInput = document.querySelector("#director")
const urlInput = document.querySelector("#url")
const clearBtn = document.querySelector("#clear-films")

eventListeners()


function eventListeners(){


    //sayfa yüklendiğinde bütün filmleri getiriyorum
    document.addEventListener("DOMContentLoaded", e => {
        
        let films = Storage.getFilmsFromStorage();

        Ui.loadAllFilms(films)


        e.preventDefault()
    })

    //table tıklanırsa burası tetiklenior
    filmList.addEventListener("click", e => {

        //filmi sil butona tıklanırsa buraya giriyor
        if(e.target.className === "btn btn-danger"){

            //ui den filmi siliyorum
            Ui.deleteFilmFromUI(e.target)

            //silinecek olan filmi alıyorum
            let movieToBeDeleted = new Film(...Ui.parseUiToFilm(e.target))
            //filmi depodan siliyorum
            Storage.deleteFilmFromStorage(movieToBeDeleted)
            
            //bilgi veriyorum
            Ui.showMessages("info","film silindi")

        }

        e.preventDefault()
    })

    //tüm filmleri temizleyine tıklanırsa burası çalışıyor
    clearBtn.addEventListener("click", e => {
        

        if(confirm("bütün filmler silinsin mi")){

            //bütün filmleri ui den temizliyorum
            Ui.deleteAllFilmFromUI()
            //depodan filmi temizliyorum
            Storage.deleteAllFilmFromStorage()
            
            //filmlerin temizlindiğine dair bilgi veriyorum
            Ui.showMessages("warning","bütün filmler silindi")

        }


        e.preventDefault()
    })

    //film ekliyorum
    form.addEventListener("submit", e => {

        const title = titleInput.value
        const director = directorInput.value
        const url = urlInput.value

        if(title === "" || director === "" || url === ""){
            
            //burda hata veriyorum
            Ui.showMessages("danger","boş alan bırakmayınız!")

        }else{
            
            const film = new Film(title,director,url)

            //ui ye ekliyorum
            Ui.addFilmToUI(film)

            //depodan siliyorum
            Storage.addFilmToStorage(film)


        }

        //bütün inputları temizliyorum        
        Ui.clearInputs(titleInput,directorInput,urlInput);

        e.preventDefault()
    })






}