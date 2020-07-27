const filmList = document.querySelector("#films")
const cardBody = document.querySelector(".card-body")
class Ui{


    //html e filmi ekliyorum
    static addFilmToUI(newFilm){
        
        //film bir obje olarak geliyor
        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" style = "width: 200px  !important;height: 200px !important;"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr> 
        `
    }

    //ui deki inputlari temizliyorum
    static clearInputs(element1,element2,element3){

        element1.value = ""
        element2.value = ""
        element3.value = ""
        
    }

    //gelen type e göre ekrana mesaj bastiriyorum
    static showMessages(type,mesaj){

        
        let alert = document.createElement("div")

        //sınıf özelliklerini giriyorum
        alert.className = `alert alert-${type}`

        //mesajıma text ekliyorum
        alert.appendChild(document.createTextNode(mesaj))

        //mesajı gösteriyorum
        cardBody.appendChild(alert)
        
        //mesajı 2 saniye gösteriyorum
        setTimeout(() => {
            alert.remove()
        },3000)

    }

    static loadAllFilms(films){
        //bütün filmleri ui ye ekliyorum
        for(let film of films){
            this .addFilmToUI(film)
        }


    }

    static deleteFilmFromUI(element){
        //filmi ui den siliyorum
        if(confirm("silmek istediğinden emin misin?")){
            let parent = element.parentElement.parentElement
            parent.remove()    
        }

    }

    //gelen elementen yola çıkarak değerlerini döndürüyorum
    static parseUiToFilm(element){
        let parent = element.parentElement.parentElement
        
        let url = parent.children[0].children[0].src
        let title = parent.children[1].textContent
        let director = parent.children[2].textContent

        return [title,director,url]
    }

    //tasarimdan bütün filmleri siliyorum
    static deleteAllFilmFromUI(){
        
        //bu yavas
        //filmList.innerHTML = ""

        //bu daha hizli siliyor
        while(filmList.firstElementChild != null){
            filmList.firstElementChild.remove()
        }

    }

}