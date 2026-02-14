let minhaCalculadora = {
    operador: "",
    num: "primeiro",
    list1: [],
    list2: [],
    num1: 0,
    num2: 0
}

function Nums(n){
    let resposta = document.getElementById("resposta")

    if(typeof n === "number"){
        if(minhaCalculadora.num === "primeiro"){
            minhaCalculadora.list1.push(n)
            resposta.innerHTML = minhaCalculadora.list1.join("")
        }else{
            minhaCalculadora.list2.push(n)
            resposta.innerHTML = minhaCalculadora.list2.join("")
        }
    } else if(n === "ingual"){
        minhaCalculadora.num1 = Number( minhaCalculadora.list1.join(""))
        minhaCalculadora.num2 = Number( minhaCalculadora.list2.join(""))
        let resuntado = 0

        if(operador === "mais"){
            resuntado = minhaCalculadora.num1 + minhaCalculadora.num2
        }else if(operador === "menos"){
            resuntado = minhaCalculadora.num1 - minhaCalculadora.num2           
        }else if(operador === "vezes"){
            resuntado = minhaCalculadora.num1 * minhaCalculadora.num2           
        }else if(operador === "divisão"){
            resuntado = minhaCalculadora.num1 / minhaCalculadora.num2           
        }

        resposta.innerHTML = resuntado

        minhaCalculadora.list1 = [resuntado]
        minhaCalculadora.list2 = []
        minhaCalculadora.num = "primeiro"
    }else {
        operador = n
        minhaCalculadora.num = "proximo"
        resposta.textContent = ""
    }
}