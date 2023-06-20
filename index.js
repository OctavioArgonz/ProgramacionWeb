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
    },
    {
      type: "phone",
      name: 'OnePlus 11',
      color: 'Blue',
      ram: '16GB',
      camera: '48MP',
      year: '2021',
      almacenamiento: "516GB",
    },
    {
      type: "phone",
      name: 'Samsung S23',
      color: 'Blue',
      ram: '6GB',
      camera: '32MP',
      year: '2022',
      almacenamiento: "258GB",
    },
    {
      type: "headphone",
      name: "Airpods Pro 2",
      color: "White",
      year: "2022",
      sound: "200mpxs",
    },
    {
      type: "headphone",
      name: 'Onebuds 2',
      color: "White",
      year: "2022",
      sound: "200mpxs",
    },
    {
      type: "headphone",
      name: "Airpod Pro Max",
      color: "White",
      year: "2022",
      sound: "200mpxs",
    } 
    // Add more card data objects...
  ];

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
  const cartIcons = document.querySelectorAll('.cart-icon');
  const cartPopup = document.querySelector('.cart-popup');
  const cartItems = document.querySelector('#cartItems');
  const closeBtn = document.querySelector('.close-btn');

  const cartNavButton = document.getElementById('show-cart-btn')
  const cart = document.getElementById('bag')

  function openCart(){
    cart.classList.add('open')
  }

  function closeCart(){
    cart.classList.remove('open')
  }

  cartNavButton.addEventListener('click', ()=>{
    if (cart.classList.contains('open')) {
      closeCart()
    } else {
      openCart()
    }
  })
  
  let addToCartFunction;
  let addToCartClicked = false; // Flag to track if addToCart button is clicked

  function addToBag(popupData) {
    if (!addToCartClicked) {
      addToCartClicked = true;
      alert(`Added ${popupData.name} to cart!`);
    }
    addToCartClicked = false  

    // apppend to list of items
  }
  
  cartIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {

      const addToCartBtn = document.getElementById('add-to-cart-btn')
      addToCartBtn.removeEventListener('click', addToCartFunction); // Remove the previous event listener
      addToCartFunction = () => addToBag(popupData); // Store the addToCart function reference
      addToCartBtn.addEventListener('click', addToCartFunction); // Add the event listener using the stored function and the once option

      const card = icon.closest('.card');
      const image = card.querySelector('img');
      const title = card.querySelector('.card-title');
      const price = card.querySelector('.card-text');
      
      const popupData = cardData[index]; // Retrieve the corresponding card data
      
      const popupImage = document.createElement('img');
      popupImage.classList.add('cart-popup-img');
      popupImage.src = image.src;

      const popupTitle = document.createElement('h3');
      popupTitle.textContent = title.textContent;

      const popupPrice = document.createElement('p');
      popupPrice.classList.add('price');
      popupPrice.textContent = price.textContent;

      const popupSpecs = document.createElement('p');
      
      
      popupSpecs.classList.add('specs');
      popupSpecs.textContent = getSpecs(popupData)

      const content = document.createElement('div');
      content.classList.add('cart-item');
      content.appendChild(popupImage);

      const info = document.createElement('div');
      info.classList.add('info');
      info.appendChild(popupTitle);
      info.appendChild(popupPrice);
      info.appendChild(popupSpecs);
      content.appendChild(info);

      cartItems.innerHTML = '';
      cartItems.appendChild(content);

      cartPopup.classList.add('open');


    });
  });

  closeBtn.addEventListener('click', () => {
    cartPopup.classList.remove('open');
  });
  
});





















  
  
  