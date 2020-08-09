const express = require('express')
const app = express()

//json verilerle çalıştığımı söylüyorum
app.use(express.json())

/*örnek datam*/
let kullanıcılar = [
    {id:1,isim:"Halil"},
    {id:2,isim:"Semih"},
    {id:3,isim:"Ahmet"},
    {id:4,isim:"Emre"},
]

//localhost:3000/ e istek atıldığında çalışan fonksiyon
app.get("/", (req,res) =>{
    res.send("<h1>Merhaba</h1>")
})


//localhost:3000/user e istek atıldığında çalışan fonksiyon
//burda kullanıcıları döndürüyorum
app.get("/user", (req,res) =>{

    //localhost:3000/user?tersCevir={}
    //yanına girdiği parametreye göre ters çevirebiliyorum
    //gönderdiği parametreleri ekrana basıyorum
    console.log(req.query);

    //eğer bir parametre girdiyse ve değeri true ise datayı tersten gösteriyorum
    if(req.query.tersCevir === "true"){
        res.send(kullanıcılar.reverse())
    }else{
        res.send(kullanıcılar)
    }
})

//yeni kullanıcı ekliyorum
app.post("/user",(req,res) => {

    const yeniKullanici = {
        //post yapan kisi id bilgilerini girmiyor id bilgilerini ben giriyorum
        id : kullanıcılar.length+1,
        //gonderilen datanin icerisinden ismi aliyorum 
        isim:req.body.isim
    }

    kullanıcılar.push(yeniKullanici)
    res.send(yeniKullanici)

})



//localhost:3000/user/{id} e istek atıldığında çalışan fonksiyon
//burda kullanıcının id sine göre döndürüyorum
app.get("/user/:id", (req,res) =>{
    //parametre olarak gönderilen id yi alıyorum
    const id = req.params.id

    //o id ye sahip kullanıcıyı buluyorum
    const user = kullanıcılar.find( (user) =>{
        return user.id == id
    } )

    if(user){
        res.send(user)
    }else{
        res.status(404).send(`<h1>${id} id li bir kullanıcı yok </h1>`)
    }

})



app.listen(3000, () =>{
    console.log("3000. porttu dinliyor")
})