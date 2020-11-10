
const search = document.querySelector('.search'),
  cartBtn = document.querySelector('#cart'),
  wishlistBtn = document.querySelector('#wishlist'),
  goodsWrapper = document.querySelector('.goods-wrapper'),
  cart = document.querySelector('.cart'),
  cartClose = document.querySelector('.cart-close');

const createCardGoods = (id, price, title, img) => {


  const card = `
    <div class="card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3">
      <div class="card">
        <div class="card-img-wrapper">
          <img class="card-img-top" src="img/temp/${img}" alt="">
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

const openCart = () => {

  cart.style.display = 'flex';

};


const closeCart = (e) => {
  target = e.target;
  e.preventDefault();

  if (target === cart || target === cartClose){

    cart.style.display = '';
  };

};



cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cart.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    cart.style.display = '';
  }
});



createCardGoods(1, 2000, 'Дартс', 'archer.jpg');
createCardGoods(2, 1500, 'Фламинго', 'flamingo.jpg');
createCardGoods(3, 200, 'Носки', 'socks.jpg');
