const axios = require('axios')

function baskentinSicakliginiBul(ulkeAdi){

    axios.get("https://restcountries.eu/rest/v2/name/"+ulkeAdi)
        .then(res =>{
            console.log(res.data[0].capital+"'nın sıcaklığı: ");
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${res.data[0].capital}&appid=5ff5f6121eced2f3ad373070cbbb2040&lang=tr&units=metric`)
                .then(res => {
                    console.log(res.data.main.temp)
                })
        })

}

module.exports = baskentinSicakliginiBul
