const ajaxButon = document.querySelector("#ajax")
const employeesTable = document.querySelector("#employees")


//Çalışanları getir butonuna tıklandığında burası tetikleniyor
ajaxButon.addEventListener("click",() => {


    const xhr = new XMLHttpRequest()
    //data.json dosyasını istiyorum
    xhr.open("GET","data.json")

    //isteğin cevabı geldiğinde burası tetikleniyor
    xhr.onload = function(){

        //eğer işlem başarılıysa buraya giriyor
        if(this.status == 200){

            //datayı alıp json formatına dönüştürüyoru
            let jsonData = JSON.parse(this.responseText)

            //jsonun içinde bir dizi var diziyi dönüyorum
            for(let employee of jsonData){
                
                /*
                <!-- <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> -->
                */
               //tabloya ekliyorum
                employeesTable.innerHTML += `<tr>
                <td>${employee.name}</td>
                <td>${employee.departman}</td>
                <td>${employee.salary}</td>
            </tr>`
                
             
            }

        }

    }

    //isteği başlatıyorum
    xhr.send()


})