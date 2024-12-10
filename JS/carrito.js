// Función para mostrar los productos en el carrito
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';  // Limpiar el contenido del carrito

  // Si el carrito está vacío
  if (cart.length === 0) {
      cartContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
      return;
  }

  let total = 0;  // Variable para acumular el total del carrito

  // Crear una lista de productos en el carrito
  cart.forEach((product, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      const itemImage = document.createElement('img');
      itemImage.src = product.img;
      itemImage.alt = product.title;
      itemImage.classList.add('cart-item-image');

      const itemTitle = document.createElement('h3');
      itemTitle.textContent = product.title;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${(product.price * product.quantity).toFixed(2)}`;  // Muestra el precio por cantidad

      // Crear contenedores para la cantidad
      const quantityContainer = document.createElement('div');
      quantityContainer.classList.add('quantity-container');

      const decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.classList.add('btn', 'btn-secondary');
      decreaseButton.addEventListener('click', () => {
          updateQuantity(index, -1);  // Disminuir la cantidad
      });

      const quantityDisplay = document.createElement('span');
      quantityDisplay.textContent = product.quantity;  // Mostrar cantidad actual
      quantityDisplay.classList.add('quantity-display');

      const increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.classList.add('btn', 'btn-secondary');
      increaseButton.addEventListener('click', () => {
          updateQuantity(index, 1);  // Aumentar la cantidad
      });

      // Añadir los botones de cantidad al contenedor
      quantityContainer.appendChild(decreaseButton);
      quantityContainer.appendChild(quantityDisplay);
      quantityContainer.appendChild(increaseButton);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.classList.add('btn', 'btn-danger');

      // Eliminar producto del carrito
      removeButton.addEventListener('click', () => {
          removeFromCart(index);  // Eliminar el producto por índice
      });

      // Añadir los elementos al carrito
      cartItem.appendChild(itemImage);
      cartItem.appendChild(itemTitle);
      cartItem.appendChild(itemPrice);
      cartItem.appendChild(quantityContainer);
      cartItem.appendChild(removeButton);

      // Añadir el producto al contenedor del carrito
      cartContainer.appendChild(cartItem);

      // Calcular el total
      total += product.price * product.quantity;
  });

  // Mostrar el total del carrito
  const totalContainer = document.getElementById('cart-total');
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;

  // Añadir los botones de Eliminar todos y Pagar
  addActionButtons();
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = cart[index];

  // Cambiar la cantidad del producto (no permitir cantidad negativa)
  product.quantity = Math.max(1, product.quantity + change);

  // Actualizar el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();  // Volver a renderizar el carrito
  updateCartCount();  // Actualizar el contador
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);  // Eliminar el producto por su índice
  localStorage.setItem('cart', JSON.stringify(cart));  // Guardar el carrito actualizado
  renderCart();  // Volver a renderizar el carrito
  updateCartCount();  // Actualizar el contador
}

// Función para eliminar todos los productos del carrito
function clearCart() {
  localStorage.removeItem('cart');  // Eliminar el carrito completo
  renderCart();  // Volver a renderizar el carrito vacío
  updateCartCount();  // Actualizar el contador
}

// Función para simular el proceso de pago
function processPayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de proceder al pago.");
  } else {
      // Simulando un proceso de pago (puedes agregar tu lógica aquí)
      alert("Proceso de pago realizado con éxito. ¡Gracias por tu compra!");
      clearCart();  // Vaciar el carrito después de la compra
  }
}

// Función para actualizar el contador del carrito
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Función para añadir los botones de "Eliminar todos" y "Pagar"
function addActionButtons() {
  const cartActions = document.getElementById('cart-actions');
  cartActions.innerHTML = '';  // Limpiar cualquier contenido anterior

  // Crear el botón "Eliminar todos"
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Eliminar todos';
  clearButton.classList.add('btn', 'btn-warning');
  clearButton.addEventListener('click', clearCart);

  // Crear el botón "Pagar"
  const payButton = document.createElement('button');
  payButton.textContent = 'Pagar';
  payButton.classList.add('btn', 'btn-success');
  payButton.addEventListener('click', processPayment);

  // Añadir los botones al contenedor de acciones
  cartActions.appendChild(clearButton);
  cartActions.appendChild(payButton);
}

// Llamada a renderCart cuando se carga la página
renderCart();
