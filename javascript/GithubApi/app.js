const search = document.querySelector("#github-form")
const githubname = document.querySelector("#githubname")
const clearBtn = document.querySelector("#clear-last-users")
const profile = document.querySelector("#profile")
const repos = document.querySelector("#repos")
const lastUsers = document.querySelector("#last-users")

let ui = new UI(profile,repos,lastUsers)

eventListeners()

function eventListeners(){
    
    document.addEventListener("DOMContentLoaded",(e) =>{
        const users = Storage.getStorage()
        users.forEach(element =>{
            ui.addLastSearchUsers(element)
        })
    })


    search.addEventListener("submit",(e) =>{
        
        if(githubname.value !== ""){
            getDatas(githubname.value)
        }else{
            ui.showMessage("danger","lütfen bir isim giriniz")
        }

        e.preventDefault()
    })

    clearBtn.addEventListener("click",(e) =>{
        
        if(confirm("Silmek istediğinizden emin misiniz?")){
            Storage.clearStorage()
            ui.clearLastSearchUsers()
        }

    })

    lastUsers.addEventListener("click",(e) =>{
        
        if(e.target.className === "oldUser"){
            getDatas(e.target.textContent)
        }

    })

}


function getDatas(userName){
    

    getGithubData(userName)
    .then(data =>{
        

        ui.clearUser()
        if(data.user.message === "Not Found"){
            ui.showMessage("secondary","böyle bir kişi yok")
            return
        }else{


            console.log("girdi")
            const imageURL = data.user.avatar_url
            const fullName = data.user.name
            const bio = data.user.bio
            const fallowers = data.user.followers
            const fallowing = data.user.following
            const repoCount = data.user.public_repos
            const company = data.user.company
            const location = data.user.location
            const email = data.user.email

            ui.displayUser(imageURL,fullName,bio,fallowers,fallowing,repoCount,company,location,email)
            if(Storage.addStorage(userName)){
                ui.addLastSearchUsers(userName)
            }
            
                
            ui.clearRepos()
            data.repo.forEach(element =>{
                const repoName = element.name
                const repoStar = element.stargazers_count
                const repoFork = element.forks_count

                ui.displayRepos(repoName,repoStar,repoFork)
            }) 
        }



    })

}