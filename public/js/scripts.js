const fetchInventory = () => {
  fetch('/api/v1/inventory')
  .then(response => response.json())
  .then(response => { return response })
  .then(response => showInventory(response))
}

const showInventory = (inventory) => {
  if (inventory !== undefined) {
    return inventory.map(key => {
      $('#card-container').append(`
        <article class='card'>
          <h5 id='new-item-title'>${key.item_title}</h5>
          <span class='item-description'>
            <p>${key.item_description}</p>
          </span>
          <img src="${key.item_image}" alt="image item to purchase">
          <h5>Price:</h5>
          <p id='price'>${key.item_price}</p>
          <button class="add-cart" type="button" name="button">Add to Cart</button>
        </article>
        `)
      })
  }
}

const showCart = () => {
  //Unhide cart
  console.log('Clicked Cart')
}


const addToCart = () => {
  console.log('Add Item')
}


const showOrders = (order) => {
  const { order_total, created_at } = order;

  $('#order-container').append(`
    <article class='cart-item'>
    <p>Order Date: ${order.created_at}</p>
    <p>Total Price: ${order.order_total}</p>
    </article>
    `)
  }

const postCart = (order) => {
  const total = $('#total-price-cart').text()

  fetch('/api/v1/order_history', {
    method: 'POST',
    body: JSON.stringify({ order_total: total }),
    headers: {
      'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(response => showOrders(response))
  .catch(error => console.log({ error }));
}

const loadPageInfo = () => {
  fetchInventory();
}

$(window).on('load', loadPageInfo);

$('#show-cart').on('click', showCart);
$('#show-orders').on('click', showOrders);
$('#card-container').on('click', '.add-cart', addToCart);
$('#cart').on('click', '#purchase-cart', postCart);
