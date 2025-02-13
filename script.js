
document.addEventListener('DOMContentLoaded', () => {
    const categoriesList = document.querySelector('.categories ul');
    const productsContainer = document.querySelector('.products');
    const searchInput = document.getElementById('search-input');
    const modal = document.getElementById('product-modal');
    const closeModalButton = document.getElementById('close-modal');
    const loadMoreButton = document.getElementById('load-more-button');
    const cartCount = document.getElementById('cart-count');
    const cartContainer = document.querySelector('.cart-container');
    const cartModal = document.getElementById('cart-modal');
    const closeCartModalButton = document.getElementById('close-cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartTotalPriceForm = document.getElementById('cart-total-price-form');
    const checkoutButton = document.getElementById('checkout-button');

    // Data for the catalog (replace with your actual data)
    const productsData = [
        {
            id: 1,
            name: 'Букет из 15 красных роз',
            description: 'Перед постановкой в вазу не забудьте подрезать цветы и держать дальше от отопительных приборов. Композицию можно дополнить по вашему желанию. Опытные флористы смогут скомпоновать уникальный букет, профессионально подберут цветы, элементы декора, подарочные ленточки и упаковку, идеально дополняющие общую композицию.',
            price: 2500,
            category: 'Розы',
            images: ['images/розы1.jpg', 'images/розы2.jpg'],
        },
        {
            id: 2,
            name: 'Букет из хризантем, роз и папоротника',
            description: 'Композицию можно дополнить по вашему желанию. Опытные флористы смогут скомпоновать уникальный букет, профессионально подберут цветы, элементы декора, подарочные ленточки и упаковку, идеально дополняющие общую композицию.',
            price: 3300,
            category: 'Авторские букеты',
            images: ['images/хризантемы_розы.jpg', 'images/хризантемы_розы2.jpg'],
        },
         {
            id: 3,
            name: 'Гипсофила в коробке',
            description: 'Композицию можно дополнить по вашему желанию. Опытные флористы смогут скомпоновать уникальный букет, профессионально подберут цветы, элементы декора, подарочные ленточки и упаковку, идеально дополняющие общую композицию.',
            price: 3900,
            category: 'Гипсофилы',
            images: ['images/гипсофила в коробке1.jpg', 'images/гипсофила в коробке2.jpg'],
         },
        {
           id: 4,
           name: 'Хризантемы бигуди',
            description: 'Композицию можно дополнить по вашему желанию. Опытные флористы смогут скомпоновать уникальный букет, профессионально подберут цветы, элементы декора, подарочные ленточки и упаковку, идеально дополняющие общую композицию.',
            price: 1900,
           category: 'Хризантемы',
            images: ['images/хризантемы бигуди.jpg'],
        },
        {
            id: 5,
            name: 'Букет с георгинами',
             description: 'Букет из георгинов — это яркий и стильный подарок, который подойдёт для любого случая. В букете могут сочетаться разные цвета и оттенки георгинов, что делает его ещё более привлекательным. Георгины символизируют радость, счастье и любовь, поэтому такой букет станет прекрасным дополнением к любому празднику.',
             price: 4500,
            category: 'Георгины',
            images: ['images/букет с георгинами1.jpg'],
         },
         {
            id: 6,
            name: 'Букет в красных оттенках',
             description: 'Букет из красных, бордовых, алых, цветов. В этом букете мы также подчеркиваем великолепное сочетание фактур: нежного георгина и смелой протеи, утонченных калл и крупных антуриумов, бархатного амаранта и веселых миниатюрных орхидей.',
             price: 16400,
            category: 'Авторские букеты',
             images: ['images/красные оттенки1.jpg', 'images/красные оттенки2.jpg'],
         },
         {
            id: 7,
            name: 'Композиции из ели Нобилис',
             description: 'Украсить праздник можно при помощи ели Нобилис. У каждого есть люди, которым важны наши забота, внимание и любовь. Наши композиции помогут выразить чувства',
             price: 3300,
            category: 'Ель',
             images: ['images/ель нобилис1.jpg', 'images/ель нобилис2.jpg'],
         },
         {
            id: 8,
            name: 'Кустовые розы',
            description: 'Отлично подойдет для любого события. Наши розочки самые свежие и ароматные, каждое утро мы получаем их из теплиц для Вас. /nВот несколько советов по уходу за розами в вазе:/n1. Под струёй воды подрежьте концы стеблей примерно на один сантиметр под углом 45°, обязательно удалите листья, они не должны находиться в воде./n2. Используйте фильтрованную или кипячёную воду, следите за чистотой воды в вазе и ежедневно меняйте её./n3. Выбирайте вазу из керамики или тёмного стекла, чтобы предотвратить проникновение солнечных лучей и нагрев воды./n4. Вода в вазе должна покрывать не менее половины высоты стеблей роз, предпочтительно 2/3./n5. Размещайте вазу в прохладном месте, избегая прямых солнечных лучей, сквозняков, кондиционеров, обогревателей, а также фруктов, так как они выделяют этилен, который губителен для цветов./n6. Так же отличный способ сохранить свежесть роз, это подкормка для цветов. Ее вы можете так же добавить к заказу в дополнительных товарах, чтобы обеспечить свежесть роз без траты времени.',
            price: 4500,
            category: 'Розы',
             images: ['images/кустовые розы1.jpg', 'images/кустовые розы2.jpg'],
         },
         {
            id: 9,
            name: 'Букет с ранункулюсами',
             description: 'Отлично подойдет для любого события. Наши розочки самые свежие и ароматные, каждое утро мы получаем их из теплиц для Вас. /nВот несколько советов по уходу за розами в вазе:/n1. Под струёй воды подрежьте концы стеблей примерно на один сантиметр под углом 45°, обязательно удалите листья, они не должны находиться в воде./n2. Используйте фильтрованную или кипячёную воду, следите за чистотой воды в вазе и ежедневно меняйте её./n3. Выбирайте вазу из керамики или тёмного стекла, чтобы предотвратить проникновение солнечных лучей и нагрев воды./n4. Вода в вазе должна покрывать не менее половины высоты стеблей роз, предпочтительно 2/3./n5. Размещайте вазу в прохладном месте, избегая прямых солнечных лучей, сквозняков, кондиционеров, обогревателей, а также фруктов, так как они выделяют этилен, который губителен для цветов./n6. Так же отличный способ сохранить свежесть роз, это подкормка для цветов. Ее вы можете так же добавить к заказу в дополнительных товарах, чтобы обеспечить свежесть роз без траты времени.',
             price: 6500,
            category: 'Ранункулюс',
             images: ['images/ранункулюс1.jpg', 'images/ранункулюс2.jpg'],
         },
         {
            id: 10,
            name: 'Нежный букет с ароматными розами, ранункулюсом',
             description: 'Отлично подойдет для любого события. Наши розочки самые свежие и ароматные, каждое утро мы получаем их из теплиц для Вас. /nВот несколько советов по уходу за розами в вазе:/n1. Под струёй воды подрежьте концы стеблей примерно на один сантиметр под углом 45°, обязательно удалите листья, они не должны находиться в воде./n2. Используйте фильтрованную или кипячёную воду, следите за чистотой воды в вазе и ежедневно меняйте её./n3. Выбирайте вазу из керамики или тёмного стекла, чтобы предотвратить проникновение солнечных лучей и нагрев воды./n4. Вода в вазе должна покрывать не менее половины высоты стеблей роз, предпочтительно 2/3./n5. Размещайте вазу в прохладном месте, избегая прямых солнечных лучей, сквозняков, кондиционеров, обогревателей, а также фруктов, так как они выделяют этилен, который губителен для цветов./n6. Так же отличный способ сохранить свежесть роз, это подкормка для цветов. Ее вы можете так же добавить к заказу в дополнительных товарах, чтобы обеспечить свежесть роз без траты времени.',
             price: 6500,
            category: ['Ранункулюс', 'Розы'],
             images: ['images/букет с розами и ранункулюсом1.jpg', 'images/букет с розами и ранункулюсом1.jpg', 'images/букет с розами и ранункулюсом3.jpg'],
         }
    ];

    let visibleProducts = 6;
    let loadedProducts = 0; // Track number of currently loaded products
    let currentFilteredProducts = productsData; // Save current filtered products


    function loadProducts(products, start, limit) {
        const end = Math.min(start + limit, products.length);
        for(let i = start; i < end; i++) {
            const card = createProductCard(products[i]);
            productsContainer.appendChild(card);
        }
        loadedProducts = end; // Update loaded count

        if (end >= products.length){
           loadMoreButton.style.display = 'none'; // Hide button if all products are loaded
        } else {
           loadMoreButton.style.display = 'block';
       }
    }


    function createProductCard(product) {
        const card = document.createElement('div');
        const cardInformation = document.createElement('div');
        const cardIllust = document.createElement('div');

        card.classList.add('product-card');
        // cardIllust.classList.add('product-ill');
        cardInformation.classList.add('product-inf');

          const image = document.createElement('img');
          image.src = product.images[0];
          image.alt = product.name;
          card.appendChild(image);

         const h2 = document.createElement('h2');
        h2.textContent = product.name;
        cardInformation.appendChild(h2);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = product.price + ' р.';
        cardInformation.appendChild(price);

        // card.appendChild(cardIllust);
        card.appendChild(cardInformation);

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Добавить в корзину';
        buyButton.addEventListener('click', (event) => addToCart(product));
        buttonContainer.appendChild(buyButton);

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('details-button');
        detailsButton.textContent = 'Подробнее';
        detailsButton.addEventListener('click', () => showModal(product));
        buttonContainer.appendChild(detailsButton);

        card.appendChild(buttonContainer);
        return card;
    }

    // Filter products
    function filterProducts(category) {
        currentFilteredProducts = category === 'Все' ? productsData : productsData.filter(product => product.category === category);
        productsContainer.innerHTML = ''; // Clear the container for a fresh view
        loadedProducts = 0;
        loadProducts(currentFilteredProducts, 0, visibleProducts);
        loadMoreButton.dataset.currentCategory = category;
    }


    categoriesList.querySelectorAll('li').forEach(categoryLi => {
        categoryLi.addEventListener('click', () => {
            const category = categoryLi.getAttribute('data-category');
            filterProducts(category);
        });
    });

     searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        currentFilteredProducts = productsData.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
       productsContainer.innerHTML = '';
       loadedProducts = 0; // Reset loaded count
        loadProducts(currentFilteredProducts, 0, visibleProducts);
         loadMoreButton.dataset.currentCategory = 'all';
    });


     loadMoreButton.addEventListener('click', () => {
        loadProducts(currentFilteredProducts, loadedProducts, visibleProducts);
    });

    let currentProduct;

    function showModal(product) {
        currentProduct = product;

        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalPrice = document.getElementById('modal-price');
        const modalSlides = document.getElementById('modal-slides');
        const modalPreviews = document.getElementById('modal-previews');
        const prevSlideButton = document.getElementById('prev-slide');
        const nextSlideButton = document.getElementById('next-slide');
        const modalBuyButton = document.getElementById('buy-button');


        modalSlides.innerHTML = '';
        modalPreviews.innerHTML = '';
        let currentSlide = 0;

        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;
        modalPrice.textContent = product.price + ' р.';


        product.images.forEach((imgUrl, index) => {
          const slide = document.createElement('img');
           slide.src = imgUrl;
            slide.alt = `${product.name} - Image ${index}`;
            modalSlides.appendChild(slide);
        });
         product.images.forEach((imgUrl, index) => {
             const preview = document.createElement('img');
               preview.src = imgUrl;
               preview.alt = `${product.name} - Image ${index + 1}`;
               preview.addEventListener('click', () => {
                   currentSlide = index;
                   updateCarousel();
                    updatePreview();
               })
               modalPreviews.appendChild(preview);
         });
         updatePreview();

         function updateCarousel() {
             modalSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function updatePreview(){
             const previews = modalPreviews.querySelectorAll('img');
               previews.forEach((preview, index) => {
                   if (index === currentSlide) {
                       preview.classList.add('active');
                   } else {
                       preview.classList.remove('active')
                   }
               })
        }


       prevSlideButton.addEventListener('click', () => {
         currentSlide = Math.max(0, currentSlide - 1);
         updateCarousel();
           updatePreview();
       });

       nextSlideButton.addEventListener('click', () => {
         currentSlide = Math.min(product.images.length - 1, currentSlide + 1);
         updateCarousel();
         updatePreview();
       });

       modal.classList.add('active');
       modal.style.display = 'flex';
       modal.style.justifyContent = 'center';

       modalBuyButton.onclick = () => {
                addToCart(currentProduct);
                modal.style.display = 'none'; // Закрываем модальное окно
            }        
    }

    closeModalButton.addEventListener('click', () => {
        // modal.classList.remove('active');
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            // modal.classList.remove('active');
            modal.style.display = 'none';
        }
    });

    // Cart functionality
    function getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
        updateCartTotal();
        updateCartTotalForm();
    }

   function addToCart(product) {
      const cart = getCart();
      const existingProduct = cart.find(item => item.id === product.id);
        if(existingProduct) {
           existingProduct.quantity++;
       } else {
           cart.push({...product, quantity: 1});
       }

      saveCart(cart);
   }

   function updateCartCount() {
    const cart = getCart();
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
   cartCount.textContent = totalQuantity;
}

cartContainer.addEventListener('click', () => {
  cartModal.classList.add('active');
   renderCartItems();
     updateCartTotal();
    updateCartTotalForm();
});


closeCartModalButton.addEventListener('click', () => {
   cartModal.classList.remove('active');
});


window.addEventListener('click', (event) => {
   if (event.target === cartModal) {
       cartModal.classList.remove('active');
   }
});

function renderCartItems() {
 const cart = getCart();
  cartItemsContainer.innerHTML = '';

    if (cart.length === 0){
        cartItemsContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }

   cart.forEach(item => {
       const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item');
        const image = document.createElement('img');
       image.src = item.images[0];
        image.alt = item.name;
       cartItem.appendChild(image);

       const cartItemDetails = document.createElement('div');
       cartItemDetails.classList.add('cart-item-details');

       const itemName = document.createElement('h3');
       itemName.textContent = item.name;
        cartItemDetails.appendChild(itemName);

       const cartItemQuantity = document.createElement('div');
       cartItemQuantity.classList.add('cart-item-quantity');
       const minusButton = document.createElement('button');
       minusButton.textContent = '-';
        minusButton.addEventListener('click', () => changeQuantity(item.id, -1));

        const quantity = document.createElement('span');
        quantity.textContent = item.quantity;
         const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.addEventListener('click', () => changeQuantity(item.id, 1));

        cartItemQuantity.appendChild(minusButton);
        cartItemQuantity.appendChild(quantity);
       cartItemQuantity.appendChild(plusButton);
        cartItemDetails.appendChild(cartItemQuantity);
        const itemPrice = document.createElement('span');
       itemPrice.classList.add('cart-item-price');
       itemPrice.textContent = item.price + ' р.';
        cartItemDetails.appendChild(itemPrice);

        cartItem.appendChild(cartItemDetails);


       const removeButton = document.createElement('span');
        removeButton.classList.add('cart-item-remove');
        removeButton.innerHTML = '&times;';
        removeButton.addEventListener('click', () => removeItem(item.id));
       cartItem.appendChild(removeButton);


        cartItemsContainer.appendChild(cartItem);
   });

}

 function updateCartTotal() {
  const cart = getCart();
   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   cartTotalPrice.textContent = `Сумма: ${total} р.`;
}
 function updateCartTotalForm() {
  const cart = getCart();
   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
   cartTotalPriceForm.textContent = `Сумма: ${total} р.`;
}


function changeQuantity(productId, quantityChange) {
    const cart = getCart();
   const item = cart.find(item => item.id === productId);

    if (item) {
       item.quantity = Math.max(1, item.quantity + quantityChange);
      saveCart(cart);
     }
}
function removeItem(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
   saveCart(updatedCart);
}

checkoutButton.addEventListener('click', () => {
    const cart = getCart();
    if (cart.length === 0) {
       alert("Корзина пуста. Пожалуйста, добавьте товар.");
      return;
   }
   const customerName = document.getElementById('customer-name').value.trim();
    const customerPhone = document.getElementById('customer-phone').value.trim();

    if (!customerName || !customerPhone) {
        alert('Пожалуйста, заполните имя и номер телефона.');
        return;
   }
  alert('Заказ оформлен'); // Это сообщение показывает, что заказ "оформлен"
   saveCart([]);
   cartModal.classList.remove('active');
   // Формируем данные для отправки на сервер
   const orderData = {
    items: cart,
    customerName: customerName,
    customerPhone: customerPhone
 };

//  Отправляем данные

// fetch('/api/send-telegram-order', {
//      method: 'POST', // Указываем метод запроса
//     headers: {
//       'Content-Type': 'application/json' // Указываем тип контента
//    },
//     body: JSON.stringify(orderData)
//  })
//     .then(response => {
//          if (response.ok){
//                return response.text()
//            } else {
//               throw new Error('Ошибка при отправке заказа');
//          }
//      })
//       .then(data => {
//            // Обрабатываем успешный ответ
//            alert('Заказ успешно ооформлен');
//            saveCart([]);
//            cartModal.classList.remove('active');
//       })
//       .catch(error => {
//           // Обрабатываем ошибку
//            console.error('Ошибка при отправке заказа', error);
//            alert('Произошла ошибка при отправке заказа');
//       })
//   alert('Заказ оформлен');
//    saveCart([]);
//    cartModal.classList.remove('active');
})

    updateCartCount();
    loadProducts(productsData, 0, visibleProducts);
});
