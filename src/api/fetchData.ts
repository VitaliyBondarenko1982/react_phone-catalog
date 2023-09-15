import React, { SetStateAction } from 'react';

import { IProduct, IProductDetails } from '../types';

export const BASE_URL =
  'https://mate-academy.github.io/react_phone-catalog/_new';

const request = <T>(url: string): Promise<T> => {
  return fetch(BASE_URL + url).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
};

export const getPhones = (
  setData: React.Dispatch<SetStateAction<IProduct[]>>,
) => {
  request<IProduct[]>('/products.json').then((products) => setData(products));
};

export const getPhoneDetails = (
  slug: string,
  setData: React.Dispatch<SetStateAction<IProductDetails | null>>,
) => {
  request<IProductDetails>(`/products/${slug}.json`).then((product) =>
    setData(product),
  );
};
