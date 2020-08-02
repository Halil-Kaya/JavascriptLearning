
const inputText = document.querySelector("#word")
const translateForm = document.querySelector("#translate-form")


eventListeners()

function eventListeners(){

    langueages.addEventListener("change",(e) =>{
        UI.changeImageAndText()
    })
    
    
    translateForm.addEventListener("submit",(e) =>{
    
        
        UI.changeImageAndText(langueages.value)
    
    
        Translate.translate(inputText.value,langueages.value)
        .then(response =>{
            
            UI.changeTranslateText(response.text[0])
    
        })
        e.preventDefault()
    })
    
}
