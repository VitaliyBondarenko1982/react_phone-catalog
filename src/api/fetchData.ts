import React, { SetStateAction } from 'react';

import { Product } from '../types';

const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/_new';

const request = <T>(url: string): Promise<T> => {
  return fetch(BASE_URL + url).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
};

export const getPhones = (
  setData: React.Dispatch<SetStateAction<Product[]>>,
) => {
  request<Product[]>('/products.json').then((products) => setData(products));
};

export const getPhoneDetails = (
  id: string,
  setData: React.Dispatch<SetStateAction<Product>>,
) => {
  request<Product>(`/products/${id}.json`).then((product) => setData(product));
};
