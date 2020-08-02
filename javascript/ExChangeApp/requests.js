//https://api.exchangeratesapi.io/latest?base=USD

class Requests{

    static getExchange(firstCurrency,secondCurrency){

        return new Promise((resolve,reject) =>{

            fetch(`https://api.exchangeratesapi.io/latest?base=${firstCurrency}`)
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                resolve(data.rates[secondCurrency])
            })
            .catch(err =>{
                reject(err)
            })

        })


    }

}