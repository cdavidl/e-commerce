/*Declaraciones*/
const actionDesktopMenu = document.querySelector('.navbar-email');
const actionMobileMenu = document.querySelector('.icon-menu');
const actionCartMenu = document.querySelector('.navbar-shopping-cart');
const actionProductMenu = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenu = document.querySelector('.cart');
const productMenu = document.querySelector('.product-detail');
const productDetailImage = document.querySelector('.product-detail-image');
const productDetailName = document.querySelector('.product-detail-name');
const productDetailPrice = document.querySelector('.product-detail-price');
const productDetailDescription = document.querySelector('.product-detail-description');
const cardsContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');

/*Comportamiento menus*/
const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('hide')
} 
const toggleMobileMenu = () =>{
    const isCartMenuClose = cartMenu.classList.contains('hide');
    const isProductMenuClose = productMenu.classList.contains('hide');

    if (!isCartMenuClose) {
        cartMenu.classList.add('hide');
    } else if (!isProductMenuClose) {
        productMenu.classList.add('hide');
    }
    mobileMenu.classList.toggle('hide');
    overlay.classList.toggle('hide');
}
const toggleCartMenu = () => {
    const isMobileMenuClose = mobileMenu.classList.contains('hide');
    const isProductMenuClose = productMenu.classList.contains('hide');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('hide');
    } else if (!isProductMenuClose) {
        productMenu.classList.add('hide');
    }
    cartMenu.classList.toggle('hide');
    overlay.classList.toggle('hide');
}

const openProductDetail = (articulo) => {
    const isMobileMenuClose = mobileMenu.classList.contains('hide');
    const isCartMenuClose = cartMenu.classList.contains('hide');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('hide');
    } else if (!isCartMenuClose) {
        cartMenu.classList.add('hide');
    }
    productDetailImage.setAttribute('src', articulo.image);
    productDetailImage.setAttribute('alt', articulo.name);    
    productDetailPrice.innerText =  articulo.price;
    productDetailName.innerText =  articulo.name;
    productDetailDescription.innerText =  articulo.description;
    productMenu.classList.remove('hide');
    overlay.classList.toggle('hide');
}

const closeProductDetail = () => {
    productMenu.classList.add('hide');
    overlay.classList.toggle('hide');
}

/*Clic a menus*/
actionDesktopMenu.addEventListener('click', toggleDesktopMenu);
actionMobileMenu.addEventListener('click', toggleMobileMenu);
actionCartMenu.addEventListener('click', toggleCartMenu);
actionProductMenu.addEventListener('click', closeProductDetail);

/*Lista de artículos*/
let articulos = [
    {name: "Bici", price: 4000, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "TV", price: 10000, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "Libro", price: 100, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "Celular", price: 5000, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "Computador", price: 20000, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "Teclado", price: 500, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'},
    {name: "Audifonos", price: 700, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'}
];

/*Función para mostrar los artículos*/
function renderArticles (array) {
    for(let i = 0 ; i < array.length; i++) { 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
            
        const productImg = document.createElement('img');
        productImg.setAttribute('src', array[i].image);
        productImg.addEventListener('click', () => openProductDetail(array[i]));
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');    
    
        const productDetails = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + array[i].price;
    
        const productName = document.createElement('p');
        productName.innerText = array[i].name;
    
        const productFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.appendChild(productCard);
        productCard.append(productImg, productInfo);
        productInfo.append(productDetails, productFigure);
        productDetails.append(productPrice, productName);
        productFigure.appendChild(productImgCart);
    }
}

/*Mostrar los artículos*/
renderArticles(articulos);

