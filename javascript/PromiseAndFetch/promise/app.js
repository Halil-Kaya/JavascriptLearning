//promise
function bestenBuyukMu(sayi){

    return new Promise( (resolve,reject) => {

        if(sayi > 5){
            //cevap olumluysa bu dönüyor
            resolve("sayi beşten büyük")
        }else{
            //olumsuzsa bu dönüyor
            reject("sayi beşten küçük")
        }
    })
}

//fonksiyonu çağrıyorum
bestenBuyukMu(7)

//olumlu cevap gelirse burası çalışacak
.then((response) =>{
    console.log(response)
})
//olumsuz ise burası çalışacak
.catch((err) =>{
    console.log(err)
})