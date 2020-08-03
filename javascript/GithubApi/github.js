//kişi hakkında bilgileri getirir
//https://api.github.com/users/halil-kaya

//kişinin repo bilgilerini getirir
//https://api.github.com/users/halil-kaya/repos


async function getGithubData(userName){

    const responseUser = await fetch(`https://api.github.com/users/${userName}`)
    const userData = await responseUser.json()


    const responseRepo = await fetch(`https://api.github.com/users/${userName}/repos`)
    const repoData = await responseRepo.json()

    return {
        user:userData,
        repo:repoData
    }

}