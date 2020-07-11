import React, { FC } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { PhoneCartInfo, State } from '../../utils/interfaces';
import {
  setCartId as setCartIdAction,
  setTotalAmount as setTotalAmountAction,
  setTotalPrice as setTotalPriceAction,
} from '../../store/actions';
import './ButtonAddToCart.scss';

interface Props {
  id: string;
  price: number;
}

interface StateProps {
  cart: {};
}

interface DispatchProps {
  setCartId: (value: PhoneCartInfo) => void;
  setTotalPrice: (value: number) => void;
  setTotalAmount: (value: number) => void;
}

const ButtonAddToCartTemplate: FC<Props & StateProps & DispatchProps> = ({
  id,
  price,
  setCartId,
  cart,
  setTotalPrice,
  setTotalAmount,
}) => {
  const buttonClickHandler = () => {
    const product = {
      id,
      amount: 1,
    };

    setCartId(product);
    setTotalPrice(price);
    setTotalAmount(1);
  };

  return (
    <button
      type="button"
      className={cx('button-to-cart',
        { 'added-to-cart': Object.keys(cart).includes(id) })}
      onClick={buttonClickHandler}
      disabled={Object.keys(cart).includes(id)}
    >
      <span className={cx({ hidden: Object.keys(cart).includes(id) })}>
        Add to cart
      </span>
      <span className={cx({ hidden: !Object.keys(cart).includes(id) })}>
        Added to cart
      </span>
    </button>
  );
};

const mapStateToProps = (state: State) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  setCartId: setCartIdAction,
  setTotalAmount: setTotalAmountAction,
  setTotalPrice: setTotalPriceAction,
};

export const ButtonAddToCart = connect<StateProps, DispatchProps, Props, State>(
  mapStateToProps, mapDispatchToProps,
)(ButtonAddToCartTemplate);
