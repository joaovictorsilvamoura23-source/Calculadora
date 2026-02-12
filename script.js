function Calcular(){
    let num = document.getElementById("dig1")
    let num1 = Number(num.value)

    let nums = document.getElementById("dig2")
    let num2 = Number(nums.value) 

    let operador = document.getElementById("op")

    let resuntado = document.getElementById("Resuntado")

    if (operador.value === "soma"){
        resuntado.textContent = num1 + num2
    }
    if (operador.value === "subtração"){
        resuntado.textContent = num1 - num2
    }
    if (operador.value === "multiplicação"){
        resuntado.textContent = num1 * num2
    }
    if (operador.value === "divizão"){
        resuntado.textContent = num1 / num2
    }
}