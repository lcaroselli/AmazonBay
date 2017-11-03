const fetchInventory = () => {
  fetch('/api/v1/inventory')
  .then(response => response.json())
  .then(response => { return response })
  .then(response => showInventory(response))
}

const fetchCartFromStorage = () => {
  const storage = JSON.parse(localStorage.getItem('cartArray'));
  if(!storage) {
    $('#cart-container').append(
      `<h5>There are no items in your cart.</h5>`
    );
  } else {
    calculateTotal(storage);
    storage.forEach(item => showSavedCart(item));
  }
}

const showSavedCart = (item) => {
  $('#cart-container').append(
    `<article class='cart-item'>
      <h5>${item.title}</h5>
      <p>${item.price}</p>
    </article>
  `);
}

const showInventory = (inventory) => {
  if (inventory !== undefined) {
    return inventory.map(key => {
      $('#card-container').append(`
        <article data-title='${key.item_title}' data-price='${key.item_price}' class='card'>
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
  // console.log('Clicked Cart')
}


const addToCart = (e) => {
  const cartArray = JSON.parse(localStorage.getItem('cartArray')) || []

  const itemCard = $(e.target).closest('article')
  const itemData = itemCard.data();

  cartArray.push(itemData)

  const targetItemName = $(e.target).closest('article').children('#new-item-title');
  const targetItemPrice = $(e.target).closest('article').children('#price');

  $('#cart-container').append(`
    <article class='cart-item'>
      <h5>${targetItemName[0].innerHTML}</h5>
      <p>${targetItemPrice[0].innerHTML}</p>
    </article>
  `)

  localStorage.setItem('cartArray', JSON.stringify(cartArray));
}


const showOrders = (order) => {
  order.forEach(item =>
    $('#order-container').append(`
      <article class='cart-item'>
      <p>Order Date: ${item.created_at}</p>
      <p>Total Price: ${item.order_total}</p>
      </article>
    `)
  )
}

const addCart = () => {
  let total = 0;
  const cartArray = JSON.parse(localStorage.getItem('cartArray'));

  cartArray.forEach(item => {
    total += item.price;
  });

  postCart(total);
}

const postCart = (total) => {
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


const calculateTotal = (cartArray) => {
  let total = 0;

  cartArray.forEach(item => {
    total += item.price;
  });

  $('#total-price-cart').text(`$${total}`);
}

const loadPageInfo = () => {
  fetchInventory();
  fetchCartFromStorage();
}

$(window).on('load', loadPageInfo);
$('#show-cart').on('click', showCart);
$('#show-orders').on('click', showOrders);
$('#card-container').on('click', '.add-cart', addToCart);
$('#cart').on('click', '#purchase-cart', addCart);
