function contar() {
    var ini = Number(window.document.getElementById('txti').value)
    var f = Number(window.document.getElementById('txtf').value)
    var p = Number(window.document.getElementById('txtp').value)
    var res = window.document.getElementById('res')

    if(txti.value.length == '' || txtf.value.length == '' || txtp.value.length == '') {
        res.innerHTML = 'Impossivel contar...'
        return
    }

    if (p == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

        if (ini < f) {
            for (ini; ini <= f; ini += p) {
            res.innerHTML += ini + '..'
            }
        } else {

            for (ini; ini >= f; ini -= p) {
            res.innerHTML += ini + '..'
            }
        }
    
}