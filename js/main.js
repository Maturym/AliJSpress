
const search = document.querySelector('.search'),
  cartBtn = document.querySelector('#cart'),
  wishlistBtn = document.querySelector('#wishlist'),
  goodsWrapper = document.querySelector('.goods-wrapper'),
  cart = document.querySelector('.cart'),
  cartClose = document.querySelector('.cart-close'),
  category = document.querySelector('.category');


const getGoods = (handler, filter) => {

  fetch('db/db.json')
      .then(resp => {
        
        if (resp.ok) {
          return resp.json()
        } else {
          new Error(resp.status)
        }
      })
      .then(filter)
      .then(handler);

};


const createCardGoods = ({ id, price, title, imgMin: img }) => {


  const card = `
    <div class="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3">
      <div class="card">
        <div class="card-img-wrapper">
          <img class="card-img-top" src="${img}" alt="">
          <button class="card-add-wishlist"
            data-goods-id=${id}></button>
        </div>
        <div class="card-body justify-content-between">
          <a href="#" class="card-title">${title}</a>
          <div class="card-price">${price} ₽</div>
          <div>
            <button class="card-add-cart"
              data-goods-id=${id}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  `;

  goodsWrapper.insertAdjacentHTML('afterbegin', card);

};

const openCart = (e) => {

  e.preventDefault();
  cart.style.display = 'flex';

  document.addEventListener('keydown', closeCart);
};


const closeCart = (e) => {
  target = e.target;

  if (target === cart || 
    target === cartClose ||
    e.code === 'Escape'){

      cart.style.display = '';
      document.removeEventListener('keydown', closeCart);
  };
};


const renderCard = (item) => {
  goodsWrapper.textContent = '';

  item.forEach((item) => {
    createCardGoods(item)
  })

};

const randomSort = (item) => {  

  return item.sort(() => (Math.random() - 0.5))

};

const chooseCategory = (e) => {
  const target = e.target;
  e.preventDefault();

  if (target.classList.contains('category-item')) {

    const category = target.dataset.category;

    getGoods(renderCard,
      goods => goods.filter(item => item.category.includes(category)))

  }

};



cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cart.addEventListener('click', closeCart);
category.addEventListener('click', chooseCategory)



getGoods(renderCard, randomSort);
