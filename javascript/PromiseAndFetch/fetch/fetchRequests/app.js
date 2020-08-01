/*Fetchin kullanımı ajax'e kıyasla kullanımı daha kolay
burda fetch i promise ile beraber kullanıyorum*/

//isteklerimi yöneteceğim sınıfımı oluşturdum
class Requests{

    //get isteğinde bulunacağım metot
    get(url){
        //bir promise objesi döndürüyorum eğer cevap olumluysa
        //resolve içinde, cevap olumsuz ise reject içinde obje dönücek
        return new Promise((resolve,reject) =>{

            //fetch kullanarak isteğimi yapıyorum
            //NOT: default olarak fetch get isteğinde bulunur
            fetch(url)//eğer işlem başarılı ise then scorpun içine
            //eğer işlem hatalıysa catch bloğun içine girecek
            .then(response =>{


                //cevabımızı aldık ama cevapta promise yapısı(paketi) olarak geldi
                //bu yüzden burda da döndürüyoruz eğer return yaparken bir hata alırsa catch bloğuna,
                //hata almaz ise alttaki then scorpuna girecek
                return response.json()
            })
            .then(data =>{
                //datamıza ulaşmış oldum bunu artık çağrılan fonksiyona gönderebilirim
                //işlem başarılı olduğu için resolve fonksiyonunu çağrıyorum
                resolve(data)
            })
            .catch(err =>{
                //bir hata olursa buraya girecek ve işlem başarısız olduğu için
                //reject fonksiyonuyla dönücak
                reject(err)
            })




        })
    }

    //post isteğinde bulunduğum metot
    //ilk parametre adres,2.parametre ise göndereceğim json objesi
    post(url,data){
        //bir promise objesi döndürüyorum eğer cevap olumluysa
        //resolve içinde, cevap olumsuz ise reject içinde obje dönücek
        return new Promise((resolve,reject) => {

            //fetch ile isteğimde bulunuyorum.
            //ilk parametre adresimi giriyorum
            //ikinci parametreye ise bir obje giriyorum bu obje ise;
            //isteğin türü,datasi,ve ne attiği
            //bilgilerini giriyorum            
            fetch(url,{
                    //attıpım istek post o yüzden method kısmına post yazıyorum
                    method:"post",
                    //attığım datayı stringe dönüştürüp body e eşitliyorum
                    body:JSON.stringify(data),
                    //attığım datanın ne olduğunu giriyorum
                    headers: {
                        //attığım data json objesi olduğunu söyledim
                        "Content-type":"application/json; charset=UTF-8"
                    }

                })//işlem olumluysa burası çalışacak işlem başarısız olursa da catch bloğuna gidecek
                .then(response =>{
                    //response.json() fonksiyonu bize döndürdüğü değer
                    //bir Promise yapısı ve durumu pending. u yüzden bunu bir daha döndürüyorum eğer
                    //işlem başarılı olursa bir alttaki then'e, eğer hatalı olursa catch fonksiyonuna girecek
                    return response.json()
                })
                .then(data => {
                    //buraya girdiğine göre işlem başarılı o yüzden resolve fonksiyonu ile dönüyorum
                    resolve(data)
                })
                .catch(err =>{
                    //işlem başarısız o yüzden reject fonksiyonu ile dönüyorum
                    reject(err)
                })
            })
        
        }

    //put(gücelleme) isteğinde bulunduğum method
    //1. parametre adres.
    //2.parametre ise yeni güncel json objesi
    put(url,data){
        //bir promise objesi döndürüyorum eğer cevap olumluysa
        //resolve içinde, cevap olumsuz ise reject içinde obje dönücek
        return new Promise((resolve,reject) =>{
            //fetch ile isteğimde bulunuyorum.
            //ilk parametre adresimi giriyorum
            //ikinci parametreye ise bir obje giriyorum bu obje ise;
            //isteğin türü,datasi,ve ne attiği
            //bilgilerini giriyorum 
            fetch(url,{
                //isteğimiz put olduğu için put yazıyorum
                method:"put",
                //yeni güncel datamı belirtiyorum
                body:JSON.stringify(data),
                //attığım datanın ne olduğunu söylüyorum
                headers:{
                    //attığım data json objesi olduğunu söyledim
                    "Content-type":"application/json; charset=UTF-8"
                }
            })//eğer işlem olumluysa ilk .then fonksiyonu çalışacak
            .then(response =>{
                //cevabı aldık ama bunu json olarak döndürmemiz lazım
                //bu işlemi yaparken bunu promise objesi olarak döndürüyor
                //o yüzden eğer içerdeki değer json değilse catch fonksiyonu çalışacak
                //ve hata dönecek. eğer işlem başarılı olursa şaunki scorpun bir altındaki
                //then fonksiyonu çalışacak
                return response.json()
            })//işlem başarılı ise buraya girecek
            .then(data => {
                //çağrılan fonksiyona gönderiyorum
                resolve(data)
            })//hata alırsa burası çalışacak
            .catch(err => {
                //işlem başarısız olduğu için reject ile döndürüyorum
                reject(err)
            })
        })
    }

    //delete(silme) isteğinde bulunduğum metod
    //tek parametre alıyor o da nereyi sileceği
    delete(url){

        //olumlu ve olumsuz cevabımın olmasından dolayı, ayrıca fonksiyonun çağrıldığı yere
        //datayi aktarabilmek için promise objesi kullanıyorum
        return new Promise((resolve,reject) =>{

            //fetch ile isteğmde bulunuyorum
            //ilk parametre adres.
            //2. parametre ise istekte bulunduğu paketin bilgileri
            fetch(url,{
                //delete için sadece istek türünü belirtmemiz yeterli
                //isteği delete olarak belirtiyorum
                method:"delete"
            })
            //eğer işlem başarılı ise buraya girecek
            .then(response => {
                //işlem başarılı ise cevap olarak boş bir obje( {} ) dönüyor
                //işlemi daha iyi anlamak için bir mesaj dönüyorum işlem başarılı olduğu için
                //resolve fonksiyonunu kullanıyorum
                resolve("silme işlemi başarılı")            
            })//eğer bir hata olursa catch fonksiyonuna girecek
            .catch(err =>{
                //hatayı reject fonksiyonu ile dönüyorum
                reject(err)
            })
        })
    }




}

//objemi oluşturuyorum
let req = new Requests();

//get isteğinde bulunuyorum
req.get("https://jsonplaceholder.typicode.com/albums")
.then(response =>{
    console.log(response)
})
.catch(err =>{
    console.log(err)
})


//post isteğinde bulunuyorum
req.post("https://jsonplaceholder.typicode.com/albums",{"name":"halil","userId":555})
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})


//put isteğinde bulunuyorum
req.put("https://jsonplaceholder.typicode.com/albums/10",{"name":"newName","userId":111})
.then(response =>{
    console.log(response)
})
.catch(err =>{
    console.log(err)
})


//delete isteğinde bulunuyorum
req.delete("https://jsonplaceholder.typicode.com/albums/10")
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})