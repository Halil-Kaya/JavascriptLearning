
/*
//1 saniye de bir çalışacak
let interval = setInterval(function(){
    console.log("+")
},1000)

//1 saniye sonra caliscak
setTimeout(function(){
    console.log("-")
},1000)


//artik calismasin diye boyle siliniyor
clearInterval(interval)
*/

/*
function islem1(callback){

    setTimeout(function(){
        console.log("islem 1 calisti")
        callback()
    },1000)
    
    
}

function islem2(){
    
    setTimeout(function(){
        console.log("islem 2 calisti")
    },500)
    
    
}

islem1(islem2)
*/
/*
function testCallback(callback){

    setTimeout(function(){
        console.log("test calisti")
        callback()
    },1000)
    
    
    
}

testCallback(() =>{
    console.log("HAAAAAAAAAAAAAAAAAA")
})
*/