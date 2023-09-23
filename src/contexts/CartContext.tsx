import React, { createContext, FC, useMemo } from 'react';
import { noop } from 'lodash';

import { LocalStorageKeys } from '../constants';
import { useLocalStorage } from '../hooks';
import { ICartProduct } from '../types';

interface ICartItem {
  count: number;
  product: ICartProduct;
}

type CartItems = {
  [key: string]: ICartItem;
};

interface ICartContext {
  cartItems: CartItems;
  addItem: (product: ICartProduct) => VoidFunction;
  removeItem: (productId: string) => VoidFunction;
  isItemInCart: (productId: string) => boolean;
  totalCartCount: number;
  totalCartPrice: number;
}

export const CartContext = createContext<ICartContext>({
  cartItems: {},
  addItem: () => noop,
  removeItem: () => noop,
  isItemInCart: () => false,
  totalCartCount: 0,
  totalCartPrice: 0,
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItems>(
    LocalStorageKeys.CART,
    {},
  );

  const addItem = (product: ICartProduct) => () => {
    setCartItems((prevCartItems) => {
      const prevProduct = prevCartItems[product.id];

      return {
        ...prevCartItems,
        [product.id]: prevProduct
          ? { ...prevProduct, count: prevProduct.count + 1 }
          : { product, count: 1 },
      };
    });
  };

  const removeItem = (id: string) => () => {
    setCartItems((prevCartItems) => {
      const copyPrevCartItems = { ...prevCartItems };

      delete copyPrevCartItems[id];

      return copyPrevCartItems;
    });
  };

  const isItemInCart = (id: string) => !!cartItems[id];

  const { totalCartCount, totalCartPrice } = useMemo(
    () =>
      Object.values(cartItems).reduce<{
        totalCartCount: number;
        totalCartPrice: number;
      }>(
        (acc, { count, product }) => ({
          totalCartCount: acc.totalCartCount + count,
          totalCartPrice: acc.totalCartPrice + count * product.price,
        }),
        { totalCartCount: 0, totalCartPrice: 0 },
      ),
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        isItemInCart,
        totalCartCount,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
