export enum AppRoutes {
  HOME = '/',
  PHONES = 'phones',
  TABLETS = 'tablets',
  ACCESSORIES = 'accessories',
  CART = 'cart',
  FAVORITES = 'favorites',
}

export enum Icons {
  LOGO = 'logo-icon',
  HEART = 'heart-icon',
  HEART_FILL = 'heart-fill-icon',
  CART = 'cart-icon',
  ARROW_LEFT = 'arrow-left-icon',
  ARROW_RIGHT = 'arrow-right-icon',
  ARROW_BOTTOM = 'arrow-bottom-icon',
  ARROW_TOP = 'arrow-top-icon',
  HOME = 'home-icon',
  SEARCH = 'search-icon',
  MINUS = 'minus-icon',
  PLUS = 'plus-icon',
  CLOSE = 'close-icon',
}

export const NAV_MAIN_LINKS = [
  {
    to: AppRoutes.HOME,
    title: 'Home',
  },
  {
    to: AppRoutes.PHONES,
    title: 'People',
  },
  {
    to: AppRoutes.TABLETS,
    title: 'Tablets',
  },
  {
    to: AppRoutes.ACCESSORIES,
    title: 'Accessories',
  },
];

export const NAV_SIDE_LINKS = [
  {
    to: AppRoutes.FAVORITES,
    icon: Icons.HEART,
  },
  {
    to: AppRoutes.CART,
    icon: Icons.CART,
  },
];

export const MAIN_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MAIN_SLIDER_IMAGES = [
  'img/banner-1.png',
  'img/banner-2.png',
  'img/banner-3.png',
  'img/banner-4.png',
  'img/banner-5.png',
];
