const capitalWeather = require("./axiosModule")
const yargs = require('yargs')


yargs.command({
    command : "bul",
    describe : "ulkenin baskentinin sicakligini getirir",
    builder : {
        ulkeAdi: {
            describe : 'ulke adı',
            demandOption : true,
            type : "string"
        }
    },
    handler(argv){
        capitalWeather(argv.ulkeAdi)
    }
    
})

yargs.parse()