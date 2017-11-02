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
          <h5>${key.item_title}</h5>
          <span class='item-description'>
            <p>${key.item_description}</p>
          </span>
          <img src="${key.item_image}" alt="image item to purchase">
          <h5>Price:</h5>
          <p id='price'>$${key.item_price}</p>
          <button type="button" name="button">Add to Cart</button>
        </article>
        `)
      })
  }
}

const loadPageInfo = () => {
  fetchInventory();
}

$(window).on('load', loadPageInfo);
