function resultado() {
    let num = document.getElementById('valor')
    let tab = document.getElementById('seltab')
     
    if (num.value.length == 0) {
        alert('Por favor, Digite um número!')
    } else {
        let xnum = Number(num.value)
        let c = 0
        tab.innerHTML = ''

        while (c < 11) {
            let item = document.createElement('option')
            item.text = `${xnum} x ${c} = ${xnum*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}