document.addEventListener('DOMContentLoaded', function() {
  const cartIcons = document.querySelectorAll('.cart-icon');
  const cartPopup = document.querySelector('.cart-popup');
  const cartItems = document.querySelector('#cartItems');
  const cartTotal = document.querySelector('#cartTotal');
  const closeBtn = document.querySelector('.close-btn');

  cartIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const card = icon.closest('.card');
      const image = card.querySelector('img');
      const title = card.querySelector('.card-title');
      const price = card.querySelector('.card-text');

      const popupImage = document.createElement('img');
      popupImage.classList.add('cart-popup-img');
      popupImage.src = image.src;

      const popupTitle = document.createElement('h3');
      popupTitle.textContent = title.textContent;

      const popupPrice = document.createElement('p');
      popupPrice.classList.add('price');
      popupPrice.textContent = price.textContent;

      const content = document.createElement('div');
      content.classList.add('cart-item');
      content.appendChild(popupImage);

      const info = document.createElement('div');
      info.classList.add('info');
      info.appendChild(popupTitle);
      info.appendChild(popupPrice);
      content.appendChild(info);

      cartItems.innerHTML = '';
      cartItems.appendChild(content);
      cartTotal.textContent = '';

      cartPopup.classList.add('open');
    });
  });

  const addToCartBtn = document.createElement('button');
  addToCartBtn.classList.add('add-to-cart-btn');
  addToCartBtn.textContent = 'Add to Cart';

  const goToCartBtn = document.createElement('button');
  goToCartBtn.classList.add('go-to-cart-btn');
  goToCartBtn.textContent = 'Go to Cart';

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  buttons.appendChild(addToCartBtn);
  buttons.appendChild(goToCartBtn);
  cartPopup.appendChild(buttons);

  closeBtn.addEventListener('click', () => {
    cartPopup.classList.remove('open');
  });
});



  
  
  