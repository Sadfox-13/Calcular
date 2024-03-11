function Somando(){
    var sm = document.getElementById('sm')
    var sms = document.getElementById('sms')
    var mm = document.getElementById('mm')
    var res = document.getElementById('res')
    
    if(sm.value.length ==0 || sms.value.length == 0 || mm.value.length==0){
        window.alert('[ERRO] Verifique os dados')
    }else{
        res.innerHTML = 'Contando.. '
        let n1 = Number(sm.value)
        let n2  = Number(sms.value)
        let n3  = Number(mm.value)

        for(let c = n1 ;c<=n2 ; c+= n3){
            res.innerHTML += `${c} `
       }
    }
    
    
}

/*var n = 1
var v =20
var i = 2
for(var c=n;c<=v;n+=i){
    console.log+=`${c}`
}*/