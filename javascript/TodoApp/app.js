/*<li class="list-group-item d-flex justify-content-between">Todo 4<a href = "#" class ="delete-item"><i class = "fa fa-remove"></i></a></li>*/
var list = document.querySelector(".list-group")

var newTodo = document.createElement("li")

newTodo.className = "list-group-item d-flex justify-content-between"
newTodo.appendChild(document.createTextNode("Todo 5"))

var deleteItem = document.createElement("a")

deleteItem.href = "google.com"
deleteItem.target = "_blank"
deleteItem.className = "delete-item"

var deleteIcon = document.createElement("i")
deleteIcon.className = "fa fa-remove"

deleteItem.appendChild(deleteIcon)

newTodo.appendChild(deleteItem)



var todoList = document.querySelector("ul.list-group")

var a = todoList.removeChild(todoList.children[1])

var input = document.querySelector("input")

input.setAttribute("aa","asdad")

console.log(input.hasAttribute("name"))

input.removeAttribute(a)

console.log(input)

let body = document.querySelector("body")

console.log(body)

input.addEventListener("focus",function(e){
    console.log("poke")
    
})

let buton = document.querySelector("#clear-todos")

function tiklanma(e){
    console.log("tiktik")
    e.preventDefault()
}


buton.addEventListener("click",tiklanma)



