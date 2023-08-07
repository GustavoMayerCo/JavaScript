function contar() {

    let ini = document.getElementById('txti')//usando metodos de arvore dom para manipular objetos no html
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {//OR BASTA UM SER FALSO PARA TODOS SEREM FALSOS. NESSE CASO SE UM DELES FOR IGUAL A ZERO, ENTÃO ELE VAI PARA A MSG DE ERRO. MAS SE AS 3 || FOREM DIFERENTES DE ZERO ELE VAI PRO ELSE E ENTÃO RODA TODO AQUELE CÓDIGO 
        //é uma estrutura de testes, se alguma caixa tiver vazia ele não roda e da msg erro
        window.alert('Faltam dados')
    } else {// SE NÃO FOR IGUAL A ZERO ele entra nesse else 
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)//transformando os valores que vamos receber em numéricos, PORQUE ELES VEEM COMO string 
        let p = Number(passo.value)

        for (let c = 1; c <= f; c += p){// inicio, teste lógico(enquanto o contador for menor ou igual ao fim) e incremento(vai receber ele mesmo mais o valor do passo(que é quantos ele vai pular para chegar no fim))
            res.innerHTML += `, ${c} ` // exemplo para entender a lógica do passo ->  inicio 1, fim 5, passo 2 -> resultado 1>3>5 ele vai de 2 em 2 até o fim 
                //esse += no inner é concatenação, pois quero o valor que ja tem no res.innerHtml + o valor de c diante A LÓGICA DO IF 
        }
    }



}