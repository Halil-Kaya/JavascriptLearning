let cardBody = document.querySelectorAll(".card-body")[1]
let headerCardBody = document.querySelector("#todo-form")
let newTodoInput = document.querySelector(".form-control")
let listGroup = document.querySelector(".list-group")
let searchInput = document.querySelectorAll(".form-control")[1]





//sayfa ilk yuklendiginde todo ları ekrana getiriyorum
document.addEventListener("DOMContentLoaded",function(){
    
    //çerezlerde(depoda) olan todo lari aliyorum
    let todos = todolariGetir()

    //diziyi donerek teker teker htmle ekliyorum
    todos.forEach(element => {
        
        //htmldeki ul etiketine ekliyor
        listeyeEkle(element)

    });

})

//todo eklendiginde calisan yer
headerCardBody.addEventListener("submit",function(e){

    //ekliyecegim todo
    let newTodoText = newTodoInput.value

    //bos mu diye kontrol ediyorum
    if(newTodoText != ""){
        
        //burda yeni bir todo ekliyecem
        //ekliyeceğim yer: list-group (ul etiketine)

        //once çerez olarak ekliyorum eğer işlem başarılıysa true değilse false dönüyor
        //eğer ekleme işlemi başarılıysa htmle de eklyorum
        if(localStorageEkle(newTodoText)){
            
            //htmldeki ul etiketine ekliyor
            listeyeEkle(newTodoText)
            

        }
    }

    newTodoInput.value = ""

    e.preventDefault()

})



//tiklanilan olaya göre işlem yapıyorum
cardBody.addEventListener("click",function(e){

    //todonun silme yerine tiklandiysa todoyu siliyorum
    if(e.target.className == "fa fa-remove"){

        //dolaylı yoldan parentini buluyorum
        var todo = e.target.parentElement.parentElement
        var todoText = todo.textContent

        
        //todo yu çerezlerden (depodan) siliyorum
        localStoragedenSil(todoText)

        //elementi html den siliyorum
        todo.remove()
        


    }//tüm todolari temizle butonuna tıklandıysa her şeyi siliyorum
    else if(e.target.id == "clear-todos"){
        
        if(confirm("Emin misin?")){

            //htmli temizliyorum
            listGroup.innerHTML = ""
            
            //çerezlerden(depodan) siliyorum
            localStorage.clear()
            
        }
        
        
    }

    e.preventDefault()
})


searchInput.addEventListener("keyup",function(e){
    
    const filterValue = e.target.value.toLowerCase();

    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(item){

        const text = item.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            item.setAttribute("style","display : none !important")
        }else{
            item.setAttribute("style","display : block ")
        }
        

    })

    
})

