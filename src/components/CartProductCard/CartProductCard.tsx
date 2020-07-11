import React, { FC, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Cart, PhoneCartInfo, PhonesWithDetails } from '../../utils/interfaces';
import { MAIN_URL } from '../../utils/api';
import {
  setCartId as setCartIdAction,
  setTotalPrice as setTotalPriceAction,
  setTotalAmount as setTotalAmountAction,
} from '../../store/actions';

import './CartProductCard.scss';

interface Props {
  product: PhonesWithDetails;
  cart: Cart;
  productAmount: number;
}

interface DispatchProps {
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

  return (
    <li className="cart__content-item cart__item">
      <button
        type="button"
        className="cart__item-delete"
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
            id="product-amount"
            className="cart__item-amount-input"
            value={productAmount}
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
  setTotalAmount: setTotalAmountAction,
  setTotalPrice: setTotalPriceAction,
  setCartId: setCartIdAction,
};

export const CartProductCard = connect<{}, DispatchProps, {}, {}>(
  null, mapDispatchToProps,
)(CartProductCardTemplate);
