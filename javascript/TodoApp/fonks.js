
//çereze(depoya) ekliyorum
function localStorageEkle(newTodoText){

    //tum todolari getiriyorum
    let todos = todolariGetir()

    //eğer eklenecek todo dizide varsa ekletmiyorum işlem başarılıysa true değilse false dönüyorum
    if(todos.indexOf(newTodoText) != -1 ){

        alert("bu tododan zaten var")
        return false

    }else{


        todos.push(newTodoText)
        localStorage.setItem("todos",JSON.stringify(todos))
        return true
    }
}

//çerezlerden(depodan) siliyorum
function localStoragedenSil(todoText){
    
   let todos = todolariGetir()
    todos.splice(todos.indexOf(todoText),1)

    localStorage.setItem("todos",JSON.stringify(todos))

}

//ul etiketine eklenecek elementi olusturuyorum
function todoHtmliOlustur(newTodoText){

    //ekleyeceğim format 
        /*
        <li class="list-group-item d-flex justify-content-between">
                    Todo 1
            <a href = "#" class ="delete-item">
                <i class = "fa fa-remove"></i>
            </a>

        </li>
        */

    var iElement = document.createElement("i")
        
        iElement.className = "fa fa-remove"

        var aElement = document.createElement("a")
        
        aElement.href = "#"
        aElement.className = "delete-item"

        aElement.appendChild(iElement)

        var liElement = document.createElement("li")
        
        liElement.className = "list-group-item d-flex justify-content-between"

        liElement.appendChild(document.createTextNode(newTodoText))
        liElement.appendChild(aElement)

        return liElement
}


//çerezlerdeki(depodaki) todo ları getiriyorum
function todolariGetir(){
    let todos = []   
    if(localStorage.getItem("todos") !== null){
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos
}

//ul etiketine ekliyorum
function listeyeEkle(todoText){
    //gelen todoyu html e dönüştürüp ul etiketine ekliyorum
    listGroup.appendChild(todoHtmliOlustur(todoText))
}