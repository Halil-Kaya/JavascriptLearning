const amount = document.querySelector("#amount")

eventListeners()

function eventListeners(){

    amount.addEventListener("input",calculateAmount)

    firstCurrency.addEventListener("change",changeOutputs)
    secondCurrency.addEventListener("change",changeOutputs)


}

function changeOutputs(){
    UI.changeOutputs()
    calculateAmount()
}


function calculateAmount(){

    Requests.getExchange(outputFirst.textContent,outputSecond.textContent)
    .then(response =>{
        let value = response * amount.value
 
        UI.setAmount(value)
    }) 
     
}