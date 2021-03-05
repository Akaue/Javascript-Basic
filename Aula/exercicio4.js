
// Estruturas de repetição


function contagem_carro() {
    var carro = 1

    while (carro < 6) {

        console.log(`voce tem ${carro} carros`)
        carro++
    }
}


function contagem_casa() {
    var casa = 1
    do {
        console.log(`você possui ${casa} casa`)
        casa ++
    } while (casa <= 6)
}


function cadastro() {
    for (var carro = 0; carro <= 10; carro++) {
        console.log(`voce possui ${carro} carros`)
    }
}


cadastro()
contagem_casa()
contagem_carro()


// for (var carro = 0; carro <= 10; carro++) {
//     console.log(`voce possui ${carro} carros` )
// }
