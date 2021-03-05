function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){
       window.alert("Error dados incorretos")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //kid
               img.setAttribute('src', 'criança.jpg') 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescenteHomem.jpeg') 
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.jpeg') 
            }else {
                //idoso             
                 img.setAttribute('src', 'velho.jpeg') 
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //kid
                img.setAttribute('src', 'bebe.jpeg') 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'adolescenteMulher.jpeg') 
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto.jpeg') 
            }else {
                //idoso
                img.setAttribute('src', 'velho.jpeg') 
            }
        }

        res.innerHTML = `Você é ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}