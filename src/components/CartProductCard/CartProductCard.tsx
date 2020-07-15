import React, { FC, useState, useCallback, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Cart, PhoneCartInfo, PhonesWithDetails } from '../../utils/interfaces';
import { MAIN_URL } from '../../utils/api';
import {
  setCartId as setCartIdAction,
  setTotalPrice as setTotalPriceAction,
  setTotalAmount as setTotalAmountAction,
  deleteCartProduct as deleteCartProductAction,
} from '../../store/actions';

import './CartProductCard.scss';

interface Props {
  product: PhonesWithDetails;
  cart: Cart;
  productAmount: number;
}

interface DispatchProps {
  deleteCartProduct: (value: Cart) => void;
  setCartId: (value: PhoneCartInfo) => void;
  setTotalPrice: (value: number) => void;
  setTotalAmount: (value: number) => void;
}

const CartProductCardTemplate: FC<Props & DispatchProps> = ({
  product,
  cart,
  productAmount,
  setTotalAmount,
  setTotalPrice,
  setCartId,
  deleteCartProduct,
}) => {
  const [
    currentProductAmount, setCurrentProductAmount,
  ] = useState(productAmount);

  const decreaseProductAmount = useCallback(() => {
    setCurrentProductAmount(currentProductAmount - 1);
    setTotalPrice(-product.priceDiscount);
    setTotalAmount(-1);
    setCartId({
      id: product.phoneId,
      amount: currentProductAmount - 1,
    });
  },
  [product, currentProductAmount, setTotalPrice, setTotalAmount, setCartId]);

  const increaseProductAmount = useCallback(() => {
    setCurrentProductAmount(currentProductAmount + 1);
    setTotalPrice(product.priceDiscount);
    setTotalAmount(1);
    setCartId({
      id: product.phoneId,
      amount: currentProductAmount + 1,
    });
  }, [product, currentProductAmount, setTotalPrice, setTotalAmount, setCartId]);

  const deleteCartProductHandler = useCallback(() => {
    const copyCart = { ...cart };

    delete copyCart[product.phoneId];
    deleteCartProduct(copyCart);
    setTotalPrice(-(currentProductAmount * product.priceDiscount));
    setTotalAmount(-currentProductAmount);
  }, [
    cart,
    currentProductAmount,
    product,
    deleteCartProduct,
    setTotalAmount,
    setTotalPrice,
  ]);

  const inputAmountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = Number(event.target.value);
    const maxValue = 19;

    if (Number.isNaN(inputValue)) {
      return;
    }

    if (Number.isNaN(inputValue)) {
      return;
    }

    if (inputValue > maxValue) {
      inputValue = maxValue;
    }

    setCurrentProductAmount(inputValue);
    setTotalPrice((-currentProductAmount + inputValue) * product.priceDiscount);
    setTotalAmount(-currentProductAmount + inputValue);
  };

  return (
    <li className="cart__content-item cart__item">
      <button
        type="button"
        className="cart__item-delete"
        onClick={deleteCartProductHandler}
      >
        <svg className="action__icon" width="16" height="16">
          <use href="../../img/sprite.svg#cross-icon" />
        </svg>
      </button>
      <div className="cart__item-image-wrap">
        <img
          src={`${MAIN_URL}${product.image}`}
          alt={product.name}
          className="cart__item-image"
        />
      </div>
      <h3 className="cart__item-title">{product.name}</h3>
      <div className="cart__item-amount">
        <button
          type="button"
          className={cx('cart__item-amount-btn cart__item-amount-decrease', {
            disabled: currentProductAmount === 1,
          })}
          onClick={decreaseProductAmount}
          disabled={currentProductAmount === 1}
        />
        <label htmlFor="product-amount" className="cart__item-amount-label">
          <input
            type="text"
            id="product-amount"
            className="cart__item-amount-input"
            value={currentProductAmount}
            onChange={inputAmountHandler}
          />
        </label>
        <button
          type="button"
          className="cart__item-amount-btn cart__item-amount-increase"
          onClick={increaseProductAmount}
        />
      </div>
      <span className="cart__item-price">
        {product.priceDiscount * currentProductAmount}
        $
      </span>
    </li>
  );
};

const mapDispatchToProps = {
  deleteCartProduct: deleteCartProductAction,
  setTotalAmount: setTotalAmountAction,
  setTotalPrice: setTotalPriceAction,
  setCartId: setCartIdAction,
};

export const CartProductCard = connect<{}, DispatchProps, {}, {}>(
  null, mapDispatchToProps,
)(CartProductCardTemplate);
