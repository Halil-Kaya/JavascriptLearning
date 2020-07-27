class Storage{

    //localstorage film ekliyorum
    static addFilmToStorage(newFilm){

        //eklenecek film zaten var mı diye kontrol ediyorum
        if(this.isThereInStorage(newFilm) === false){
            
            //depodan bütün filmleri getiriyorum
            let films = this.getFilmsFromStorage()
            //filmi ekliyorum
            films.push(newFilm)

            //depoyu güncelliyorum
            localStorage.setItem("films",JSON.stringify(films))
            
            //ekrana mesaj bastiriyorum
            Ui.showMessages("success","film eklendi")

        }else{

            //ekrana hata bastiriyorum
            Ui.showMessages("secondary","bu filmden zaten var!!")

        }

    }

    //depodan filmi siliyorum
    static deleteFilmFromStorage(movieToBeDeleted){

        let films = this.getFilmsFromStorage()


        for(let i = films.length-1; i>=0 ; i--){
            
            //eğer title ile director aynı ise filmi siliyorum    
            if(films[i].title === movieToBeDeleted.title &&
                films[i].director === movieToBeDeleted.director){

                //o indexteki filmi siliyorum
                films.splice(i,1);  

                //depoyu güncelliyorum
                localStorage.setItem("films",JSON.stringify(films))

                
                return
            }

        }


    }


    //depodan bütün filmleri getiriyorum
    static getFilmsFromStorage(){

        let films = [];

        if(localStorage.getItem("films") !== null){
            films = JSON.parse(localStorage.getItem("films"))
        }


        return films

    }

    //depoda bu film zaten var mı diye kontrol ediyorum
    static isThereInStorage(newFilm){

        let films = this.getFilmsFromStorage()

        for(let film of films){
            
            if(film.title === newFilm.title &&
                film.director === newFilm.director &&
                film.url === newFilm.url){

                    return true

                }

        }

        return false

    }

    //bütün depoyu temizliyorum
    static deleteAllFilmFromStorage(){
        localStorage.clear()
    }


}
