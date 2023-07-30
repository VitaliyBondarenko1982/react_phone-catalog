export enum AppRoutes {
  HOME = '/',
  PHONES = '/phones',
  TABLETS = '/tablets',
  ACCESSORIES = '/accessories',
  CART = '/cart',
  FAVORITES = '/favorites',
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
    title: 'Phones',
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

export enum ProductCategories {
  PHONES = 'phones',
  TABLETS = 'tablets',
  ACCESSORIES = 'accessories',
}

export const BY_CATEGORY_ITEMS = [
  {
    id: ProductCategories.PHONES,
    to: AppRoutes.PHONES,
    image: 'img/category-phones.png',
    category: 'Mobile phones',
  },
  {
    id: ProductCategories.TABLETS,
    to: AppRoutes.TABLETS,
    image: 'img/category-tablets.png',
    category: 'Tablets',
  },
  {
    id: ProductCategories.ACCESSORIES,
    to: AppRoutes.ACCESSORIES,
    image: 'img/category-accessories.png',
    category: 'Accessories',
  },
];

export const EXCLUDE_BREADCRUMBS_ROUTES = [AppRoutes.CART, AppRoutes.HOME];

export const MAIN_SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const PRODUCTS_SLIDER_SETTINGS = {
  dots: false,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 9999,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const MAIN_SLIDER_IMAGES = [
  'img/banner-1.png',
  'img/banner-2.png',
  'img/banner-3.png',
  'img/banner-4.png',
  'img/banner-5.png',
];

export enum DropdownValue {
  SORT_BY_AGE = 'age',
  SORT_BY_NAME = 'name',
  SORT_BY_PRICE = 'price',
  PER_ALL = 'all',
  PER_4 = 4,
  PER_8 = 8,
  PER_16 = 16,
}

export const SORT_BY_OPTIONS = [
  {
    title: 'Newest',
    value: DropdownValue.SORT_BY_AGE,
  },
  {
    title: 'Alphabetically',
    value: DropdownValue.SORT_BY_NAME,
  },
  {
    title: 'Cheapest',
    value: DropdownValue.SORT_BY_PRICE,
  },
];

export const PAGINATION_OPTIONS = [
  {
    title: 'All',
    value: DropdownValue.PER_ALL,
  },
  {
    title: '4',
    value: DropdownValue.PER_4,
  },
  {
    title: '8',
    value: DropdownValue.PER_8,
  },
  {
    title: '16',
    value: DropdownValue.PER_16,
  },
];
