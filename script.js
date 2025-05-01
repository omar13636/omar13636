const cartItems = [];
const cartList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

document.querySelectorAll('.product button').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cartItems.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  totalElement.textContent = total.toFixed(2);
}
