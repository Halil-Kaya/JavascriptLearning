const button = document.querySelector("#tiklaBana")
const dataDiv = document.querySelector("#data")

//butona event verdim
//butona tikladiğimda ajax ile bir get isteğinde bulunuyorum
button.addEventListener("click",e =>{

    const xhr = new XMLHttpRequest()

    xhr.open("GET","data1")

    //istek başarılı olduğunda burası çalışıyor
    xhr.onload = function(){
        dataDiv.textContent = this.responseText
    }


    xhr.send()



})