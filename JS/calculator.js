
class Cuadro {
    constructor(tamaño, dimensiones, precio) {
        this.tamaño = tamaño;
        this.dimensiones = dimensiones;
        this.precio = precio;
    }
}

const cuadros = [
    new Cuadro("XS", "15x20 cms", 7000),
    new Cuadro("S", "20x20 cms", 7500),
    new Cuadro("M", "19x25 cms", 90000),
    new Cuadro("L", "25x25 cms", 9500),
    new Cuadro("XL", "27x42 cms", 10000)
];

// Calcular precio de reventa
function calcularReventa(precio) {
    return precio * 1.25;
}

// Mostrar cuadros en botones
function mostrarCuadros() {
    const contenedor = document.getElementById('cuadrosDisponibles');
    cuadros.forEach(cuadro => {
        const btn = document.createElement('button');
        btn.textContent = `${cuadro.tamaño} - ${cuadro.dimensiones}`;
        btn.classList.add('cuadro-btn');
        btn.addEventListener('click', () => mostrarPrecioReventa(cuadro));
        contenedor.appendChild(btn);
    });
}

// Mostrar precio de reventa
function mostrarPrecioReventa(cuadro) {
    const precioReventa = calcularReventa(cuadro.precio);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
    resultadoDiv.innerHTML = `
        <strong>Cuadro Seleccionado:</strong> ${cuadro.tamaño} - ${cuadro.dimensiones}<br>
        <strong>Precio Base:</strong> $${cuadro.precio}<br>
        <strong>Precio con Reventa:</strong> $${precioReventa.toFixed(2)}
    `;
}

mostrarCuadros();