//isteklerde bulunmak icin olusturdugum sinif
class Request{
    
    //get isteginde bulundugum metot
    get(url,callback){
        /*
            Get isteği bir şey istemek için kullanılır 
        */


        //isteklerde bulunacagim objemi olusturuyorum
        let xhr = new XMLHttpRequest();
        //ne isteginde,nereye ve senkron olup olmadığını objeye söylüyorum
        //sondaki parametrenin anlamaı asenkron olup olmaması eğer asenkron olmazsa program burda
        //duracak ve işin bitmesini bekliyecek ama asenkron olmasını söylediğim için(true)
        //program cevabı beklemiyecek
        xhr.open("get",url,true)


        //istek işlemi bittikten sonra çalışacak yer
        xhr.onload = () =>{
            //kodu kontrol ediyorum kod 200 ün anlamı işlem başarılı
            if(xhr.status == 200){
                //fonksiyonun ilk parametresi error 2. parametresi response
                //hata almadığım için ilk parametre null ikinci parametre ise cevap
                callback(null,xhr.responseText)
            }else{
                //işlem başarızıs bu yüzden hata döndürüyorum
                //ilk parametreye hatanın sebebi, 2. paremetre ise responce olmadığı için null giriyorum
                console.log(xhr.responseText)
                console.log("hata",null)

            }

        }
        
        //isteğimi gönderiyorum
        xhr.send()
    }

    //post isteğinde bulunduğum metot
    post(url,data,callback){
        /*
            Post isteği bir şey göndermek için kullanılır
        */


        //isteklerde bulunacağım objemi oluşturuyorum
        let xhr = new XMLHttpRequest();

        //post isteğinde bulunacağımı, ... adresine istek yapacağımı ve bu işlemin asenkron olmasını
        //istediğimi söylüyourm
        xhr.open("post",url,true)

        //ben bir json objesi atıcam bu yüzden göndereceğim paketin içinde bunu belirtmem lazım
        //bunun sebebi eğer json gönderirsem gönderdiğim iste onun bir json olduğunu böylece anlamış olucak
        xhr.setRequestHeader("Content-type","application/json")


        //istek işlemim bittikten sonra çalışacak yer
        xhr.onload = () =>{
            //post işlemi başarılı olursa 201 kodunu döner
            if(xhr.status == 201){
                //callback fonksiyonumun ilk parametresi error ikinci parametresi ise response
                //işlem başarılı olduğu için hata yok o yüzden 1. parametre null
                //2. parametreye ise cevabımı dönüyorum
                callback(null,xhr.responseText)
            }else{
                //işlem başarısız olduğu için ilk parametreye hata,
                //cevap olmadığı içinde 2. parametreye null giriyorum
                callback("hata",null)  
            }
        }

        //DİKKAT!!! isteklerde bir şey gönderirken
        //string olarak gönderilir yani
        //json gönderme yapılmaz json objesi stringe dönüştürülür
        //karşı tarafa bu string gider bir json gönderdiğimizi belirtiğimiz için de
        //karşı taraf bunu json a dönüştürür
        xhr.send(JSON.stringify(data))
    }

    //put islemini yaptigim yer burasi
    put(url,data,callback){
        /*
            put isteği var olan bir şeyi güncellemek için kullanılır 
        */

        //isteklerde bulunacağım objemi oluşturuyorum
        let xhr = new XMLHttpRequest();


        //objeme bir put isteğinde bulunacağımı söylüyorum 2. parametreye ise adresi veriyorum
        //3. parametrede ise bunu asenkron yapmasını söylüyorum yani program çalışmaya devam etsin
        //bunu arka planda yapsın
        xhr.open("put",url,true)

        //güncelleme yapacağım için yeni bir data gönderiyorum bu data json objesi
        //bu yüzden paketimin içerisine bunun bir json objesi olduğunu söylüyorum
        xhr.setRequestHeader("Content-type","application/json");

        //isteğimin işlemi bittikten sonra çalışacak yer
        xhr.onload = () => {
            
            //eğer 200 kodu döndürürse işlem başarılı anlamına geliyor
            if(xhr.status == 200){
                //bir hatam yok bu yüzden ilk parametre null
                //2. parametreye de cevabımı döndürüyorum
                callback(null,xhr.responseText)
            }else{
                //isteğim başarısız bu yüzden ilk parametreye hatamı
                //2. parametreye ise cevap olmasığı için null giriyorum
                callback("hata",null)
            }
        }

        //isteğimi gönderiyorum
        //DİKKATT!! istekler gönderirken string olarak gönderilir
        //peki o zaman neden json olarak gönderiyorum ki maden string olarak gidiyorsa?
        //diye soruyor olabilirsin hemen cevaplıyayım
        //bizim gönderdiğimiz veya aldığımız istek ve cevaplar string olarak gönderilir
        //bu süreçte karşı taraf json objesi mi alıp almadığını bilmesi lazım o yüzden
        //xhr.setRequestHeader("Content-type","application/json")
        //diye bir işlemde bulunuyoruz böylece gönderdiğimiz isteğin içerisinde bu 
        //datanın json olduğunu söylemiş oluyoruz
        //karşı tarafa isteğimiz gittiğinde paketimizi açıp belirttiğimiz gönderme şekline bakıp
        //bunun bir form mu?,string mi?file mi?json mı?
        //olduğunu öğrenmiş oluyor
        xhr.send(JSON.stringify(data))
    }

    //delete işlemini yaptığım yer
    delete(url,callback){
        /*
            delete isteği bir şeyi silmek için kullanılır 
        */

        //istekte bulunacağım objemi oluşturuyorum
        let xhr = new XMLHttpRequest();

        //objeme ne isteğinde bulunduğumu,adresin nolduğunu ve bu işlemin asenkron olmasını istediğimi söylüyorum
        //asenkron olması sayesinde programım bunun cevabını beklemeyecek ve kaldığı yerden devam edicek
        xhr.open("delete",url,true)

        //isteğimin işlemi bittikten sonra çalışacak fonksiyon
        xhr.onload = () => {
            
            //eğer işlem başarılı olursa 200 kodunu dönücek
            if(xhr.status == 200){
                //işlem başarılı olduğu için ilk parametre null, 2. parametre ise cevabım
                callback(null,xhr.responseText)
            }else{
                //işlem hatalı olduğu için ilk parametrem hatanın sebebi,
                //bir cevabım olmadığı içinde 2. parametrem null
                callback("hata",null)
            }

        }

        //isteğimi gönderiyorum
        xhr.send()
    }

}


/*          Test            */
//kendi yazdığım objemi oluşturuyorum
let req = new Request();

//ilk parametreye adresimi,2.parametreye ise işlem bittikten sonra çalışması için fonksiyon giriyorum
//bu işlemin ismi callback
req.get("https://jsonplaceholder.typicode.com/albums",function(err,response){


    //eğer err değişkenim null ise hata yok anlamına geliyor ve cevabımı bastırıyorum
    if(err === null){
        console.log(response)
    }else{
        console.log(err+" verdi")
    }

})

//ilk parametreye adresimi,2.parametreye ise işlem bittikten sonra çalışması için fonksiyon giriyorum
//bu işlemin ismi callback
req.post("https://jsonplaceholder.typicode.com/albums",{name:"Halil Kaya"},function(err,response){

    //eğer err değişkenim null ise hata yok anlamına geliyor ve cevabımı bastırıyorum
    if(err === null){
        console.log(response)
    }else{
        console.log(err+" verdi")
    }

})

//ilk parametreye adresimi,2.parametreye ise işlem bittikten sonra çalışması için fonksiyon giriyorum
//bu işlemin ismi callback
req.put("https://jsonplaceholder.typicode.com/albums/10",{userId:2,title:"asd"},function(err,response){

    //eğer err değişkenim null ise hata yok anlamına geliyor ve cevabımı bastırıyorum
    if(err === null){
        console.log(response)
    }else{
        console.log(err + " verdi")
    }
    
})

//ilk parametreye adresimi,2.parametreye ise işlem bittikten sonra çalışması için fonksiyon giriyorum
//bu işlemin ismi callback
req.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){

    //eğer err değişkenim null ise hata yok anlamına geliyor ve cevabımı bastırıyorum
    if(err === null){
        console.log("silme islemi basarili " + response)
    }else{
        console.log(err +" verdi")
    }

})
