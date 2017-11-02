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
          <p id='price'>$${key.item_price}</p>
          <button class="add-cart" type="button" name="button">Add to Cart</button>
        </article>
        `)
      })
  }
}

const showCart = () => {
  //Unhide/Show the cart
  console.log('Clicked Cart')
}

const showOrders = () => {
  //Unhide/Show orders posted in DB
  $('#order-container').append(`
    <article class='cart-item'>
      <h5>Order #...</h5>
      <p>Order Date: ...</p>
      <p>Total Price: ...</p>
    </article>
  `)
}

const addToCart = (e) => {
  const targetItemName = $(e.target).closest('article').children('#new-item-title');
  const targetItemPrice = $(e.target).closest('article').children('#price');

  $('#cart-container').append(`
    <article class='cart-item'>
      <h5>${targetItemName[0].innerHTML}</h5>
      <p>${targetItemPrice[0].innerHTML}</p>
    </article>
  `)
}

const postCart = () => {
  console.log('Add Cart to order_history DB');
}

const loadPageInfo = () => {
  fetchInventory();
}

$(window).on('load', loadPageInfo);

$('#show-cart').on('click', showCart);
$('#show-orders').on('click', showOrders);
$('#card-container').on('click', '.add-cart', addToCart);
$('#purchase-cart').on('click', postCart);
