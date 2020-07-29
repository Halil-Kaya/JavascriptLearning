//url: https://api.exchangeratesapi.io/latest
//1 euro ne kadar onu gösteriyor
//input be butonlarımı alıyorum
const euroInput = document.querySelector("#amount")
const changeButton = document.querySelector("#change")
const tlInput = document.querySelector("#tl")


//çevir butonunuma event ekliyorum
changeButton.addEventListener("click",(e) =>{
    
    //euro inputunun değerini alıyorum
    const euroValue = euroInput.value

    //değeri kontrol ediyorum
    if(euroValue != "" && euroValue > 0){

        //xhr objesi oluşturuyorum böylece ajax işlemi başlatabilecem
        const xhr = new XMLHttpRequest()

        //isteğimi belirtiyorum
        xhr.open("GET","https://api.exchangeratesapi.io/latest","true")

        //isteğime cevap geldiğinde burası çalışıyor
        xhr.onload = function(){

            //eğer cevabım gelmişse buraya girecek
            if(this.status == 200){

                //datayı json a dönüştürüyorum
                let jsonData = JSON.parse(this.responseText)

                //parayı alıyorum ve girdiğim değerle çarpıyorum
                let tlValue = jsonData.rates.TRY * euroValue

                //tl fiyatını ekrana basıyorum
                tlInput.value = tlValue

            }
        }
        
        //isteğimi yapıyorum
        xhr.send()

      //değeri düzgün girmezse kullanıcıya bilgi veriyorum  
    }else{
        alert("duzgun deger giriniz")
    }

})
