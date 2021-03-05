

var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`agora são exatamente ${hora}:${min} `)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('boa tarde')
} else {
    console.log('boa noite')

}


function soma (n1,n2){
    return n1+n2
}
 console.log(soma(4,2))