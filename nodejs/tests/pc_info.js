const os = require('os');
const fs = require('fs');

/*bilgisiyarın bilgilerini veren modül*/


const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
function niceBytes(x){
  let l = 0, n = parseInt(x, 10) || 0;
  while(n >= 1024 && ++l){
      n = n/1024;
  }
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


function systemInfo(){
    let result = ""
    
    result += `toplam ram: ${niceBytes(os.totalmem())}\n`
    
    result += `kullanılan ram: ${niceBytes(os.totalmem()-os.freemem())}\n`
    
    result += `kalan ram: ${niceBytes(os.freemem())}\n`

    result += `cpu sayısı: ${os.cpus().length}`
    
    fs.writeFile("pc_info.txt",result,function(err){
        if(err){
            console.log("hata oldu: "+err)
        }else{
            console.log("işlem başarılı")
        }
    })    
}



exports.systemInfo = systemInfo
