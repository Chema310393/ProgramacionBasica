{
  function anade() {
    var elemento = document.createElement("li");
    var texto = document.createTextNode("Nuevo elemento");
    elemento.appendChild(texto);
   
    var lista = document.getElementById("lista");
    lista.appendChild(elemento);
   
    var nuevoElemento = "<li>Nuevo elemento</li>";
    lista.innerHTML = lista.innerHTML + nuevoElemento;
  }
}

