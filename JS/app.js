// Productos
const products = [
    {
        img: "./img/rocky.JPG",
        title: "Reproducción en 3D de estatua de Rocky Balboa",
        price: 25000
    },
    {
        img: "./img/funk-cerati.JPG",
        title: "Reproducción 3D de muñeco Funko de Gustavo Cerati",
        price: 23000
    },
    {
        img: "./img/funk-chavo.JPG",
        title: "Reproducción 3D de muñeco Funko de El Chavo",
        price: 23000
    },
    {
        img: "./img/funk-colapinto.JPG",
        title: "Reproducción 3D de muñeco Funko Franco Colapinto",
        price: 23000
    },
    {
        img: "./img/funk-gallardo.JPG",
        title: "Reproducción 3D de muñeco Funko de Marcelo Gallardo",
        price: 23000
    },
    {
        img: "./img/funk-indio.JPG",
        title: "Reproducción 3D de muñeco Funko de El Indio",
        price: 23000
    },
    {
        img: "./img/funk-maradona94.JPG",
        title: "Reproducción 3D de muñeco Funko de Maradona Mundial '94",
        price: 23000
    },
    {
        img: "./img/funk-messi.JPG",
        title: "Reproducción 3D de muñeco Funko de Lionel Messi",
        price: 23000
    },
    {
        img: "./img/funk-ortega.JPG",
        title: "Reproducción 3D de muñeco Funko de Burrito Ortega",
        price: 23000
    },
    {
        img: "./img/bast-autos.JPG",
        title: "Bastidor Autos del Cine",
        price: 9000
    },
    {
        img: "./img/bast-barberia.JPG",
        title: "Bastidores Barbería",
        price: 9000
    },
    {
        img: "./img/bast-dogs.JPG",
        title: "Bastidores Dogs",
        price: 9000
    },
    {
        img: "./img/bast-gamer.JPG",
        title: "Bastidor Gamer",
        price: 9000
    },
    {
        img: "./img/bast-maradona.JPG",
        title: "Bastidor Maradona",
        price: 9000
    },
    {
        img: "./img/bast-nord-1.JPG",
        title: "Bastidores Nórdicos",
        price: 9000
    },
    {
        img: "./img/bast-nord-3.JPG",
        title: "Bastidores Nórdicos",
        price: 9000
    },
    {
        img: "./img/bast-nord-4.JPG",
        title: "Bastidores Nórdicos",
        price: 9000
    },
    {
        img: "./img/bast-padre.JPG",
        title: "Bastidor Personalizado",
        price: 9000
    },
    {
        img: "./img/bast-queen.JPG",
        title: "Bastidor Bohemian Rhapsody",
        price: 9000
    },
    {
        img: "./img/chap-ampm.JPG",
        title: "Chapa AM PM",
        price: 17500
    },
    {
        img: "./img/chap-argentina.JPG",
        title: "Chapa Conmemorativa Argentina",
        price: 17500
    },
    {
        img: "./img/chap-asador.JPG",
        title: "Chapa Un aplauso para el asador",
        price: 17500
    },
    {
        img: "./img/chap-basquet.JPG",
        title: "Chapas Equipos Básquet",
        price: 23000
    },
    {
        img: "./img/chap-harry.JPG",
        title: "Chapas Harry Potter",
        price: 23000
    },
    {
        img: "./img/chap-pers-1.JPG",
        title: "Chapas Patente Personalizadas",
        price: 6000
    },
    {
        img: "./img/chap-pulp.JPG",
        title: "Chapa Baño Pulp Fiction",
        price: 17500
    },
    {
        img: "./img/chap-toretto.JPG",
        title: "Chapa Patente Toretto",
        price: 23000
    },
    {
        img: "./img/chap-tragos.JPG",
        title: "Chapas Personalizadas Tragos",
        price: 15000
    },
    {
        img: "./img/marco-argentina.JPG",
        title: "Cuadro Enmarcado Argentina",
        price: 35000
    },
    {
        img: "./img/marco-basquet.JPG",
        title: "Cuadros Enmarcados Básquet",
        price: 35000
    },
    {
        img: "./img/marco-fotos.JPG",
        title: "Cuadro Enmarcado Personalizado",
        price: 35000
    },
    {
        img: "./img/marco-kiss.JPG",
        title: "Cuadro Enmarcado Kiss",
        price: 35000
    },
    {
        img: "./img/marco-mano.JPG",
        title: "Cuadro Enmarcado Puño en alto",
        price: 35000
    },
    {
        img: "./img/marco-newyork.JPG",
        title: "Cuadro Enmarcado New York",
        price: 35000
    },
    {
        img: "./img/marco-senna.JPG",
        title: "Cuadro Enmarcado Ayrton Senna",
        price: 35000
    },
    {
        img: "./img/marco-spotify.JPG",
        title: "Cuadro Enmarcado Personalizado Spotify",
        price: 35000
    },
    {
        img: "./img/marco-youtube.JPG",
        title: "Cuadro Enmarcado Personalizado Youtube",
        price: 35000
    },
];


// Actualizar contador carrito
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;  // Actualiza el número de productos
}

// Agregar producto
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const productWithQuantity = { ...product, quantity: 1 };
    
    cart.push(productWithQuantity); 
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();  // Actualizar el contador
}

// Obtener el contenedor de productos en el HTML
const container = document.getElementById('product-container');

// Crear cards de productos
products.forEach((product) => {
    // Crear el contenedor de la tarjeta
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Crear la imagen del producto
    const imageElement = document.createElement('img');
    imageElement.src = product.img;
    imageElement.alt = product.title;

    // Crear el título del producto
    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;

    // Crear el precio del producto
    const priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = `$${product.price.toFixed(2)}`;

    // Crear el botón de compra
    const button = document.createElement('button');
    button.textContent = "Comprar";
    button.classList.add('btn', 'btn-primary');

    // Evento para agregar al carrito
    button.addEventListener('click', () => {
        addToCart(product);
    });

    // Agregar elementos a card
    card.appendChild(imageElement);
    card.appendChild(titleElement);
    card.appendChild(priceElement);
    card.appendChild(button);

    // Agregar card a contenedor de productos
    container.appendChild(card);
});

// Actualizar contador del carrito
updateCartCount();