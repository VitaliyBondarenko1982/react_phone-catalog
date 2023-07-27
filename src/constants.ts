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
  CART = 'cart-icon',
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
