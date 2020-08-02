
//await sadece async fonksiyonlarda kullanılır
async function getData(){

    //awaitin amacı cevabı beklemesi demektir diyelim ki işlem 2 saniye sürüyor
    //program 2 saniye boyunca burda cevabı bekliyor
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    //json'a dönüştürme de bir vakit alacağı için onu da bekliyorum
    const jsonData = await response.json()

    //sonucu döndürüyorum async fonksiyonlar otomatik olarak promise yapısında
    //datayi döndürür
    return jsonData

    /*Not
    promise objesi istek atıldığında pending konumundadır data geldiğinde
    kendini günceller bu yüzden await'i başka yerde de kullanılabilir
    ör:


    const response = fetch("https://jsonplaceholder.typicode.com/albums")
  
    const jsonData = (await response).json()

    --------------------------------------------
    jsona dönüştürürken datayı bekliyorum veya;

    const response = fetch("https://jsonplaceholder.typicode.com/albums")

    return (await response).json()

    -------------------------------
    şeklinde de kullanabilirim

    */

}

//eğer işlem başarılı ise then bloğu, hata olursa catch bloğu çalışıyor
getData().then(response =>{
    console.log(response)
})
.catch(err => {
    console.log("Hata oldu hata sebebi: "+err)
})
