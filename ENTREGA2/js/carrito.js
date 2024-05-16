document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Amigurumi', price: 10000 },
        { id: 2, name: 'Flor', price: 8000 },
        { id: 3, name: 'Posavasos', price: 7000 }
    ];

    const cart = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Mostrar productos
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al carrito</button>
        `;
        productList.appendChild(productItem);
    });

    // Agregar producto al carrito
    productList.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(item => item.id === productId);
            addToCart(product);
        }
    });

    // Función para agregar producto al carrito
    function addToCart(product) {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button class="remove-from-cart" data-id="${product.id}">Quitar</button>
        `;
        cart.appendChild(cartItem);

        updateTotal(product.price);
    }

    // Quitar producto del carrito
    cart.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(item => item.id === productId);
            event.target.parentElement.remove();
            updateTotal(-product.price);
        }
    });

    // Actualizar total
    function updateTotal(price) {
        const total = parseFloat(totalElement.textContent);
        const newTotal = total + price;
        totalElement.textContent = newTotal.toFixed(2);
    }
});

