import { ProductCategories, DropdownValue } from './constants';

export interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface PhoneDetails {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface CategoryAmount {
  [ProductCategories.PHONES]: number,
  [ProductCategories.TABLETS]?: number,
  [ProductCategories.ACCESSORIES]?: number,
}

export interface DropdownOption {
  title: string,
  value: DropdownValue,
}

export type SearchParams = {
  [key: string]: string | string[] | null,
};

export enum ParamsNames {
  QUERY = 'query',
  SORT = 'sort',
  PAGE = 'page',
  PER_PAGE = 'perPage',
}
