//Butonlar

let btnAdd = document.querySelector("#add")
let btnDelete = document.querySelector("#delete")
let btnClear = document.querySelector("#clear")

//Inputlar

let inputKey = document.querySelector("#addkey")
let inputValue = document.querySelector("#addvalue")
let inputDeleteKey = document.querySelector("#deletekey")



btnAdd.addEventListener("click",AddItem)
btnDelete.addEventListener("click",DeleteItem)
btnClear.addEventListener("click",ClearItem)


function AddItem(e){

    if(inputKey.value != "" && inputValue.value != ""){
        sessionStorage.setItem(inputKey.value,inputValue.value)
    }

}

function DeleteItem(e){

    if(inputDeleteKey.value != ""){
        sessionStorage.removeItem(inputDeleteKey.value)
    }
    
}

function ClearItem(e){

    sessionStorage.clear()
    
}