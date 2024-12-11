// Agregar producto al carrito
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Verificar si el producto ya existe en el carrito
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    // Si el producto ya existe, solo incrementamos la cantidad
    cart[existingProductIndex].quantity += 1;
  } else {
    // Si el producto no existe, lo agregamos con cantidad 1
    product.quantity = 1;
    cart.push(product);
  }

  // Guardar carrito
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();  // Actualizar el contador del carrito
  renderCart();  // Renderizar el carrito actualizado
}

// Mostrar los productos en carrito
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';  // Borrar contenido del carrito

  // Si el carrito está vacío
  if (cart.length === 0) {
      cartContainer.innerHTML = '<p> No tenés productos seleccionados.</p>';
      return;
  }

  let total = 0;  // Acumular el total

  // Lista de productos en carrito
  cart.forEach((product, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      const itemTitle = document.createElement('h3');
      itemTitle.textContent = product.title;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `$${product.price.toFixed(2)} c/u`;  // Precio unitario

      // Contenedor para cantidad
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

      // Agregar botones de cantidad al contenedor
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

      // Agregar elementos al carrito
      cartItem.appendChild(itemTitle);
      cartItem.appendChild(itemPrice); 
      cartItem.appendChild(quantityContainer);
      cartItem.appendChild(removeButton);

      // Agregar el producto al contenedor del carrito
      cartContainer.appendChild(cartItem);

      // Calcular el total
      total += product.price * product.quantity;
  });

  // Precio total del carrito
  const totalContainer = document.getElementById('cart-total');
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;

  // Agregar los botones de Eliminar todos y Pagar
  addActionButtons();
}

// Actualizar la cantidad de un producto en carrito
function updateQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = cart[index];

  // Cambiar la cantidad del producto
  product.quantity = Math.max(1, product.quantity + change);

  // Actualizar el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();  // Volver a renderizar el carrito
  updateCartCount();  // Actualizar el contador
}

// Eliminar un producto del carrito
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);  // Eliminar el producto por su índice
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();  // Volver a renderizar el carrito
  updateCartCount();  // Actualizar el contador
}

// Eliminar todos los productos del carrito
function clearCart() {
  localStorage.removeItem('cart');
  renderCart();  // Volver a renderizar el carrito vacío
  updateCartCount();  // Actualizar el contador
}

// Simular el proceso de pago
function processPayment() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de proceder al pago.");
  } else {
      // Agregar lógica o integrar MP
      alert("Proceso de pago realizado con éxito. ¡Gracias por tu compra!");
      clearCart();  // Vaciar el carrito después de la compra
  }
}

// Actualizar el contador del carrito
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Agregar botones de "Eliminar todos" y "Pagar"
function addActionButtons() {
  const cartActions = document.getElementById('cart-actions');
  cartActions.innerHTML = '';  // Limpiar cualquier contenido anterior

  // Botón "Eliminar todos"
  const clearButton = document.createElement('button');
  clearButton.textContent = 'Eliminar todos';
  clearButton.classList.add('btn', 'btn-warning');
  clearButton.addEventListener('click', clearCart);

  // Botón "Pagar"
  const payButton = document.createElement('button');
  payButton.textContent = 'Pagar';
  payButton.classList.add('btn', 'btn-success');
  payButton.addEventListener('click', processPayment);

  // Agregar botones al contenedor de acciones
  cartActions.appendChild(clearButton);
  cartActions.appendChild(payButton);
}

renderCart();
