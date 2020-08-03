class Storage{

    static clearStorage(){
        localStorage.clear()
    }

    static getStorage(){
        let users = []
        if(localStorage.getItem("users") !== null){
            users = JSON.parse(localStorage.getItem("users"))
        }
        return users
    }

    static addStorage(newUser){

        let users = this.getStorage()
        if(users.indexOf(newUser) != -1){
            return false
        }else{
            users.push(newUser)
            localStorage.setItem("users",JSON.stringify(users))  
            return true  
        }
    }


}