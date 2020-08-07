const yargs = require('yargs')
const kisi = require('./kisi')
const chalk = require("chalk")
//ekleme 
yargs.command({
    command : "ekle",
    describe : "yeni kişiler ekler",
    builder : {
        isim: {
            describe : 'eklenecek kişi adı',
            demandOption : true,
            type : "string"
        },
        tel: {
            describe : 'eklenecek kişinin teli',
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        kisi.ekle(argv.isim,argv.tel)
        
    }
    
})

//silme 
yargs.command({
    command : "sil",
    describe : "kişiyi siler",
    builder : {
        isim: {
            describe : 'silenecek kişi adı',
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        kisi.sil(argv.isim)
    }
    
})


//gosterme 
yargs.command({
    command : "goster",
    describe : "kişinin bilgilerini gösterir",
    builder : {
        isim: {
            describe : 'gösterilecek kişi adı',
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        kisi.goster(argv.isim)
    }
    
})

//listeleme 
yargs.command({
    command : "listele",
    describe : "kişileri gösteriri",
    
    handler(argv){
       kisi.listele()
    }
    
}) 

yargs.parse()

console.log(chalk.blue("asdasd"))