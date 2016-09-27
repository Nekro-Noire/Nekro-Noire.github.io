var a = 1;

function encriptar() {
    var msn = document.getElementById("mensaje").value,
        sep = msn.split(""),
        li = document.createElement("li"),
        i = 0,
        script = [],
        list = document.getElementById("encriptacion");

    for (i = 0; i < msn.length; i = i + 1) {
        sep[i] = sep[i].charCodeAt() + 1;
        script[i] = String.fromCharCode(sep[i]);
    }
    var cifrado = script.join('');
    if (a % 2 === 0) {
        li.classList.add('list-group-item');
        li.classList.add('list-group-item-info');
    } else {
        li.classList.add('list-group-item');
        li.classList.add('list-group-item-danger');
    }
    li.innerHTML = 'Tu mensaje cifrado:</br>' + cifrado;
    list.appendChild(li);
    a = a + 1;
}
