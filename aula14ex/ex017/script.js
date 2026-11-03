function gerar () {
    let n = document.getElementById("num")
    let res = document.getElementById("re")

    if (num.value.length == '') {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        
        re.value = ''
        for(let c = 1; c <= 10; c++) {
            re.value += `${n} x ${c} = ${n * c}\n`
        }
    }
    
}