class UI{

    constructor(userElementParent,reposElememtParent,lastUsers){
        this.userElementParent = userElementParent
        this.reposElememtParent = reposElememtParent
        this.lastUsers = lastUsers
        this.messagePlace = document.querySelector(".search")
    }

    displayUser(imageURL,fullName,bio,fallowers,fallowing,repoCount,company,location,email){
        
        const htmlElement = `
        /*
                        <div class="card card-body mb-3">
                            <div class="row">
                              <div class="col-md-4">
                                <a href="" target = "_blank">
                                 <img class="img-fluid mb-2" src="${imageURL}"> </a>
                                 <hr>
                                 <div id="fullName"><strong>${fullName}</strong></div>
                                 <hr>
                                 <div id="bio">${bio}</div>
                                </div>
                              <div class="col-md-8">
                                    <button class="btn btn-secondary">
                                          Takipçi  <span class="badge badge-light">${fallowers}</span>
                                    </button>
                                    <button class="btn btn-info">
                                         Takip Edilen  <span class="badge badge-light">${fallowing}</span>
                                      </button>
                                    <button class="btn btn-danger">
                                        Repolar  <span class="badge badge-light">${repoCount}</span>
                                    </button>
                                    <hr>
                                    <li class="list-group">
                                        <li class="list-group-item borderzero">
                                            <img src="images/company.png" width="30px"> <span id="company">${company}</span>
                                            
                                        </li>
                                        <li class="list-group-item borderzero">
                                            <img src="images/location.png" width="30px"> <span id = "location">${location}</a>
                                            
                                        </li>
                                        <li class="list-group-item borderzero">
                                            <img src="images/mail.png" width="30px"> <span id="email">${email}</span>
                                            
                                        </li>
                                        
                                    </div>
                                    
                              </div>
                        </div> 
        */`
        this.userElementParent.innerHTML = htmlElement

    }
    
    clearUser(){
        
        
        //yavaş
        //this.userElementParent.innerHTML = ""
                
        //bu daha hızlı çalışıyor silmek için
        while(this.userElementParent.firstChild != null){
            this.userElementParent.firstChild.remove()
        }

    }

    displayRepos(repoName,repoStar,repoFork){

        const htmlElement = ` <div class="mb-2 card-body">
        <div class="row">
            <div class="col-md-2">
            <span></span> 
            <a href="#" target = "_blank" id = "repoName">${repoName}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-secondary">
                    Starlar  <span class="badge badge-light" id="repoStar">${repoStar}</span>
                </button>
                <button class="btn btn-info">
                    Forklar  <span class="badge badge-light" id ="repoFork">${repoFork}</span>
                </button>
            </div>
    </div>
    </div> `

        this.reposElememtParent.innerHTML += htmlElement
    }

    clearRepos(){
            
        //yavaş
        //this.reposElememtParent.innerHTML = ""
                
        //bu daha hızlı çalışıyor silmek için
        while(this.reposElememtParent.firstChild != null){
            this.reposElememtParent.firstChild.remove()
        }

    }



    addLastSearchUsers(usersName){
        
        const htmlElement = `<li class="list-group-item"><a href="#" class="oldUser">${usersName}</a></li>`
        this.lastUsers.innerHTML += htmlElement
    }

    clearLastSearchUsers(){
        //yavaş
        //this.lastUsers.innerHTML = ""
        
        //bu daha hızlı çalışıyor silmek için
        while(lastUsers.firstChild != null){
            lastUsers.firstChild.remove()
        }
    }

    showMessage(type,message){
        	
        const alert = document.createElement("div")
        alert.className = `alert alert-${type}`
        alert.appendChild(document.createTextNode(message))
        
        this.messagePlace.appendChild(alert)
        setTimeout(()=>{
            alert.remove()
        },2500)

    }
}
