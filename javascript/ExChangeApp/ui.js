const firstCurrency = document.querySelector("#firstCurrency")
const secondCurrency = document.querySelector("#secondCurrency")
const outputFirst = document.querySelector("#outputFirst")
const outputSecond = document.querySelector("#outputSecond")
const outputResult = document.querySelector("#outputResult")

console.log(firstCurrency.value)


class UI{
    
    static changeOutputs(){
        outputFirst.textContent = firstCurrency.options[firstCurrency.selectedIndex].textContent
        outputSecond.textContent = secondCurrency.options[secondCurrency.selectedIndex].textContent
    }

    static setAmount(amount){
        outputResult.placeholder = amount
    }


}


