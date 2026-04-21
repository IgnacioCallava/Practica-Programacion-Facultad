// 1. Seleccionamos los controles del filtro
const inputBuscador = document.getElementById("buscador");
const selectCategoria = document.getElementById("categoria");

// 2. Seleccionamos TODAS las cards que ya existen en el HTML
// querySelectorAll nos devuelve una lista con todos los elementos que tengan la clase .card
const todasLasCards = document.querySelectorAll(".card");

// 3. La función maestra de filtrado
function aplicarFiltros() {
  const textoBuscado = inputBuscador.value.toLowerCase();
  const categoriaElegida = selectCategoria.value;

  // 4. Recorremos las cards del HTML una por una
  todasLasCards.forEach(card => {
    // Adentro de ESTA card, buscamos el texto del nombre y la categoría
    // textContent saca el texto limpio de adentro de la etiqueta HTML
    const nombreDeEstaZapa = card.querySelector(".zapa-nombre").textContent.toLowerCase();
    const categoriaDeEstaZapa = card.querySelector(".zapa-categoria").textContent;

    // Evaluamos las condiciones igual que antes
    const coincideTexto = nombreDeEstaZapa.includes(textoBuscado);
    const coincideCategoria = categoriaElegida === "Todas" || categoriaDeEstaZapa === categoriaElegida;

    // 5. La Magia: Mostrar u Ocultar
    if (coincideTexto && coincideCategoria) {
      // Si cumple los filtros, le devolvemos su display original de tu CSS
      card.style.display = "flex"; 
    } else {
      // Si no cumple, la ocultamos completamente de la pantalla
      card.style.display = "none"; 
    }
  });
}

// 6. Escuchadores de eventos (igual que antes)
inputBuscador.addEventListener("input", aplicarFiltros);
selectCategoria.addEventListener("change", aplicarFiltros);




