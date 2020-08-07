const fs = require('fs')

function kisiEkle(isim,tel){
    const kisiler = dosyadanKisileriOku()
    const ayniAdaSahipOlanKisiler = kisiler.filter(function(kisi){
        return kisi.isim == isim
    })

    if(ayniAdaSahipOlanKisiler.length === 0){
        kisiler.push({
            isim:isim,
            tel:tel
        })
    
        dosyalaraKisileriYaz(kisiler)    
    }else{
        console.log(`${isim} kisisinden zaten var!`)
    }
}

function kisiSil(silinecekIsim){
    let kisiler = dosyadanKisileriOku()

    let dosyayaYazilacakKisiler = kisiler.filter(function(kisi){
        return kisi.isim !== silinecekIsim
    })

    if(kisiler.length > dosyayaYazilacakKisiler.length){
       
        dosyalaraKisileriYaz(dosyayaYazilacakKisiler)
        console.log("kişi silindi")

    }else{
        console.log(`${isim} kisisi bulunmuyor!`)
    }


}

function kisiGoster(isim){
    
    const kisiler = dosyadanKisileriOku()
    const kisi = kisiler.find(function(kisi){
        return kisi.isim === isim
    })

    if(kisi){
        console.log(`isim: ${kisi.isim} tel: ${kisi.tel}`)
    }else{
        console.log("böyle bir kişi yok")
    }
 
    
}

function kisileriListele(){
    
    const kisiler = dosyadanKisileriOku()

    for(kisi of kisiler){
        console.log(`isim: ${kisi.isim} telNo: ${kisi.tel}`)
    }

}


function dosyadanKisileriOku(){
    try{
        const dataBuffer = fs.readFileSync("kisiler.json")
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return []
    }
}

function dosyalaraKisileriYaz(kisiler){
    const jsonData = JSON.stringify(kisiler)
    fs.writeFileSync("kisiler.json",jsonData)
}

module.exports = {
    ekle : kisiEkle,
    sil : kisiSil,
    goster : kisiGoster,
    listele : kisileriListele
}



/* bu şekilde de yapılabiliyor 
exports.kisiEkle = kisiEkle
exports.kisiSil = kisiSil
exports.kisiGoster = kisiGoster
exports.kisileriListele = kisileriListele */