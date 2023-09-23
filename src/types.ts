import { DropdownValue, ProductCategories } from './constants';

export interface IProduct {
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

export interface IProductDescription {
  title: string;
  text: string[];
}

export interface ICartProduct {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface IProductDetails {
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
  description: IProductDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface CategoryAmount {
  [ProductCategories.PHONES]: number;
  [ProductCategories.TABLETS]?: number;
  [ProductCategories.ACCESSORIES]?: number;
}

export interface DropdownOption {
  title: string;
  value: DropdownValue;
}

export type SearchParams = {
  [key: string]: DropdownValue | DropdownValue[] | string | string[] | null;
};