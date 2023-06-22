//   // Define the card data
//   const cardData = [
//     {
//       type: "phone",
//       brand: "Apple",
//       name: "Iphone 14 Pro Max",
//       color: 'Red',
//       ram: '8GB',
//       camera: '42MP',
//       year: '2022',
//       almacenamiento: "312GB",
//     },
//     {
//       type: "phone",
//       name: 'OnePlus 11',
//       color: 'Blue',
//       ram: '16GB',
//       camera: '48MP',
//       year: '2021',
//       almacenamiento: "516GB",
//     },
//     {
//       type: "phone",
//       name: 'Samsung S23',
//       color: 'Blue',
//       ram: '6GB',
//       camera: '32MP',
//       year: '2022',
//       almacenamiento: "258GB",
//     },
//     {
//       type: "headphone",
//       name: "Airpods Pro 2",
//       color: "White",
//       year: "2022",
//       sound: "200mpxs",
//     },
//     {
//       type: "headphone",
//       name: 'Onebuds 2',
//       color: "White",
//       year: "2022",
//       sound: "200mpxs",
//     },
//     {
//       type: "headphone",
//       name: "Airpod Pro Max",
//       color: "White",
//       year: "2022",
//       sound: "200mpxs",
//     } 
//     // Add more card data objects...
//   ];

//   function getSpecs(popupData) {
//     switch (popupData.type) {
//       case 'phone':
//         return `Color: ${popupData.color}\nRAM: ${popupData.ram}\nCamera: ${popupData.camera}\nYear: ${popupData.year}\nAlmacenamiento: ${popupData.almacenamiento}`;
//       case 'headphone':
//         return `Color: ${popupData.color}\nYear: ${popupData.year}\nSound: ${popupData.sound}`;
//       default:
//         throw new Error('You need to provide a valid type');
//     }
//   }
  
  

// document.addEventListener('DOMContentLoaded', function() {
//   const shopIcons = document.querySelectorAll('.shop-icon');
//   const cardPopup = document.querySelector('.card-popup');
//   const cardItems = document.querySelector('#cardItems');
//   const closeBtn = document.querySelector('.close-btn');

  

//   const cartNavButton = document.getElementById('show-cart-btn')
//   const cart = document.getElementById('cart')


//   function openCart(){
//     cart.classList.add('open')
//   }

//   function closeCart(){
//     cart.classList.remove('open')
//   }

//   cartNavButton.addEventListener('click', ()=>{
//     if (cart.classList.contains('open')) {
//       closeCart()
//     } else {
//       openCart()
//     }
//   })

//   let addToCartFunction;
//   let addToCartClicked = false; // Flag to track if addToCart button is clicked
//   function addTocart(popupData) {
//     if (!addToCartClicked) {
//       addToCartClicked = true;
//       alert(`Added ${popupData.name} to cart!`);
//     }
//     addToCartClicked = false

//     // apppend to list of items
//   }
  
//   shopIcons.forEach((icon, index) => {
//     icon.addEventListener('click', () => {

//       const addToCartBtn = document.getElementById('add-to-cart-btn')
//       addToCartBtn.removeEventListener('click', addToCartFunction); // Remove the previous event listener
//       addToCartFunction = () => addTocart(popupData); // Store the addTocart function reference
//       addToCartBtn.addEventListener('click', addToCartFunction); // Add the event listener using the stored function and the once option

//       const card = icon.closest('.card');
//       const image = card.querySelector('img');
//       const title = card.querySelector('.card-title');
//       const price = card.querySelector('.card-text');
      
//       const popupData = cardData[index]; // Retrieve the corresponding card data
      
//       const popupImage = document.createElement('img');
//       popupImage.classList.add('card-popup-img');
//       popupImage.src = image.src;

//       const popupTitle = document.createElement('h3');
//       popupTitle.textContent = title.textContent;

//       const popupPrice = document.createElement('p');
//       popupPrice.classList.add('price');
//       popupPrice.textContent = price.textContent;

//       const popupSpecs = document.createElement('p');
      
      
//       popupSpecs.classList.add('specs');
//       popupSpecs.textContent = getSpecs(popupData)

//       const content = document.createElement('div');
//       content.classList.add('card-item');
//       content.appendChild(popupImage);

//       const info = document.createElement('div');
//       info.classList.add('info');
//       info.appendChild(popupTitle);
//       info.appendChild(popupPrice);
//       info.appendChild(popupSpecs);
//       content.appendChild(info);

//       cardItems.innerHTML = '';
//       cardItems.appendChild(content);

//       cardPopup.classList.add('open');


//     });
//   });

//   closeBtn.addEventListener('click', () => {
//     cardPopup.classList.remove('open');
//   });
  
// });

// Define the card data

const cardData = [
  {
    type: "phone",
    brand: "Apple",
    name: "Iphone 14 Pro Max",
    color: 'Red',
    ram: '8GB',
    camera: '42MP',
    year: '2022',
    almacenamiento: "312GB",
    price: 1200.00
  },
  {
    type: "phone",
    name: 'OnePlus 11',
    color: 'Blue',
    ram: '16GB',
    camera: '48MP',
    year: '2021',
    almacenamiento: "516GB",
    price: 1050.00
  },
  {
    type: "phone",
    name: 'Samsung S23',
    color: 'Blue',
    ram: '6GB',
    camera: '32MP',
    year: '2022',
    almacenamiento: "258GB",
    price: 1150.00
  },
  {
    type: "headphone",
    name: "Airpods Pro 2",
    color: "White",
    year: "2022",
    sound: "200mpxs",
    price: 250.00
  },
  {
    type: "headphone",
    name: 'Onebuds 2',
    color: "White",
    year: "2022",
    sound: "200mpxs",
    price: 175.00
  },
  {
    type: "headphone",
    name: "Airpod Pro Max",
    color: "White",
    year: "2022",
    sound: "200mpxs",
    price: 300.00
  }
  // Add more card data objects...
];

// Function to get the specifications of the popup
function getSpecs(popupData) {
  switch (popupData.type) {
    case 'phone':
      return `Color: ${popupData.color}\nRAM: ${popupData.ram}\nCamera: ${popupData.camera}\nYear: ${popupData.year}\nAlmacenamiento: ${popupData.almacenamiento}`;
    case 'headphone':
      return `Color: ${popupData.color}\nYear: ${popupData.year}\nSound: ${popupData.sound}`;
    default:
      throw new Error('You need to provide a valid type');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const shopIcons = document.querySelectorAll('.shop-icon');
  const cardPopup = document.querySelector('.card-popup');
  const cardItems = document.querySelector('#cardItems');
  const closeBtn = document.querySelector('.close-btn');
  const cartNavButton = document.getElementById('show-cart-btn');
  const close_cart= document.getElementById('close-btn-cart')
  const cart = document.getElementById('cart');
  const cartContent = document.querySelector('#cart-content');
  const emptyCartMessage = document.getElementById('emptyCartMessage');
  const cartTotal = document.querySelector('.cart-total');
  const buyNowBtn = document.getElementById('buyNowBtn');

  let cartItems = [];
  let total = 0;

  function openCart() {
    cart.classList.add('open');
  }

  function closeCart() {
    cart.classList.remove('open');
  }

  cartNavButton.addEventListener('click', () => {
    openCart();
    })
  
  close_cart.addEventListener('click', () => {
    closeCart()
  })

  let addToCartFunction;
  let addToCartClicked = false; // Flag to track if addToCart button is clicked

  function addTocart(popupData, quantity) {
    if (!addToCartClicked) {
      addToCartClicked = true;

      const itemIndex = cartItems.findIndex(item => item.name === popupData.name);
      if (itemIndex === -1) {
        const newItem = {
          name: popupData.name,
          price: popupData.price * quantity,
          quantity: quantity
        };
        cartItems.push(newItem);
        total += newItem.price * newItem.quantity;
        updateCartTotal();

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
          <div class="item-info">
            <span class="item-name">${popupData.name}</span>
            <span class="item-price">$${(popupData.price * quantity).toFixed(2)}</span>
            <input type="number" class="item-quantity" value="${quantity}" min="1">
            <button class="remove-item">Remove</button>
          </div>
        `;

        const removeBtn = cartItem.querySelector('.remove-item');
        removeBtn.addEventListener('click', () => {
          cartItems.splice(itemIndex, 1);
          total -= newItem.price * newItem.quantity;
          updateCartTotal();
          cartItem.remove();
          if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'block';
          }
        });

        const quantityInput = cartItem.querySelector('.item-quantity');
        quantityInput.addEventListener('input', () => {
          let newQuantity = parseInt(quantityInput.value);
          if (isNaN(newQuantity) || newQuantity < 1) {
            newQuantity = 1;
          }
          const priceElement = cartItem.querySelector('.item-price');
          total -= newItem.price * newItem.quantity;
          newItem.quantity = newQuantity;
          priceElement.textContent = `$${(newItem.price * newQuantity).toFixed(2)}`;
          total += newItem.price * newQuantity;
          updateCartTotal();
        });

        cartContent.appendChild(cartItem);
        emptyCartMessage.style.display = 'none';

        alert(`Added ${popupData.name} to cart!`);
      } else {
        alert('This item is already in the cart.');
      }
    }
    addToCartClicked = false;
  }

  shopIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const addToCartBtn = document.getElementById('add-to-cart-btn');
      addToCartBtn.removeEventListener('click', addToCartFunction); // Remove the previous event listener
      addToCartFunction = () => addTocart(cardData[index], 1); // Store the addTocart function reference
      addToCartBtn.addEventListener('click', addToCartFunction, { once: true }); // Add the event listener using the stored function and the once option

      const card = icon.closest('.card');
      const image = card.querySelector('img');
      const title = card.querySelector('.card-title');
      const price = card.querySelector('.card-text');

      const popupData = cardData[index]; // Retrieve the corresponding card data

      const popupImage = document.createElement('img');
      popupImage.classList.add('card-popup-img');
      popupImage.src = image.src;

      const popupTitle = document.createElement('h3');
      popupTitle.textContent = title.textContent;

      const popupPrice = document.createElement('p');
      popupPrice.classList.add('price');
      popupPrice.textContent = price.textContent;

      const popupSpecs = document.createElement('p');
      popupSpecs.classList.add('specs');
      popupSpecs.textContent = getSpecs(popupData);

      const content = document.createElement('div');
      content.classList.add('card-item');
      content.appendChild(popupImage);

      const info = document.createElement('div');
      info.classList.add('info');
      info.appendChild(popupTitle);
      info.appendChild(popupPrice);
      info.appendChild(popupSpecs);
      content.appendChild(info);

      cardItems.innerHTML = '';
      cardItems.appendChild(content);

      cardPopup.classList.add('open');
    });
  });

  closeBtn.addEventListener('click', () => {
    cardPopup.classList.remove('open');
  });

  buyNowBtn.addEventListener('click', () => {
    if (total==0){
      alert('No items in your cart')
    }
    else{
      alert ("Thanks for your purchase");
      const addedItems = document.querySelectorAll('.cart-item');
      addedItems.forEach((item) => {
        item.remove();
      });

      cartItems = [];
      total = 0;
      updateCartTotal();
      emptyCartMessage.style.display = 'block';
    }
  });


  function updateCartTotal() {
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
  }
});


















