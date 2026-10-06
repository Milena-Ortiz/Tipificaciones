// 1. Tu lista de datos/categorías personalizada
const datos = [
  { id: 1, titulo: "Parámetros", motivo: "Cliente reporta inconvenientes." },
  { id: 2, titulo: "Compras y C x P", motivo: "Cliente reporta inconvenientes." },
  { id: 3, titulo: "Inventarios", motivo: "Información comercial." }
];

// 2. Renderizar tarjetas en pantalla
function mostrarItems(items) {
  const contenedor = document.getElementById("contenedor-items");
  contenedor.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${item.titulo}</h3><small>Código: ${item.id}</small>`;
    card.onclick = () => verDetalle(item);
    contenedor.appendChild(card);
  });
}

// 3. Filtro de búsqueda en tiempo real
document.getElementById("buscador").addEventListener("input", (e) => {
  const texto = e.target.value.toLowerCase();
  const filtrados = datos.filter(item => 
    item.titulo.toLowerCase().includes(texto) || item.id.toString() === texto
  );
  mostrarItems(filtrados);
});

// 4. Mostrar detalle y copiar al portapapeles
function verDetalle(item) {
  document.getElementById("detalle").classList.remove("oculto");
  document.getElementById("detalle-titulo").innerText = item.titulo;
  document.getElementById("detalle-texto").innerText = item.motivo;
}

function copiarTexto() {
  const texto = document.getElementById("detalle-texto").innerText;
  navigator.clipboard.writeText(texto);
  alert("¡Texto copiado al portapapeles!");
}

// Cargar items iniciales
mostrarItems(datos);
