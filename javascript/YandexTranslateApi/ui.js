const langueages = document.querySelector("#language")
const outputImage = document.querySelector("#outputImage")
const outputLanguage = document.querySelector("#outputLanguage")
const outputWord = document.querySelector("#outputWord")

class UI{

    static changeImageAndText(text){
        
        outputImage.setAttribute("src",`images/${langueages.value}.png`)
        outputLanguage.textContent = langueages.options[langueages.selectedIndex].textContent
    }

    static changeTranslateText(text){
        outputWord.textContent = text
    }

}