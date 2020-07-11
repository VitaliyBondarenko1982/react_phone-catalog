import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { PhonesWithDetails, State, Cart } from '../../utils/interfaces';
import {
  setTotalAmount as setTotalAmountAction,
  setTotalPrice as setTotalPriceAction,
} from '../../store/actions';
import { CartProductCard } from '../CartProductCard';
import './CartPage.scss';

interface StateProps {
  phones: PhonesWithDetails[];
  cart: Cart;
  totalPrice: number;
  totalAmount: number;
}

interface DispatchProps {
  setTotalPrice: (value: number) => void;
  setTotalAmount: (value: number) => void;
}

const CartPageTemplate: FC<StateProps & DispatchProps> = ({
  phones,
  cart,
  totalPrice,
  totalAmount,
  setTotalAmount,
  setTotalPrice,
}) => {
  const cartProductsList = useMemo(() => {
    return phones
      .filter(phone => Object.keys(cart).includes(phone.phoneId));
  }, [phones, cart]);

  return (
    <div className="cart cart__container">
      <div className="breadcrumbs">
        <NavLink
          to="/"
          className="breadcrumbs__home"
          exact
        >
          <svg className="breadcrumbs__icon" width="16" height="16">
            <use href="../../img/sprite.svg#home-icon" />
          </svg>
        </NavLink>
        <span
          className="breadcrumbs__page breadcrumbs__page--current"
        >
          Cart
          <svg className="breadcrumbs__arrow" width="16" height="16">
            <use href="../../img/sprite.svg#chevron-icon" />
          </svg>
        </span>
      </div>
      <h2 className="cart__title title">Cart</h2>
      <div className="cart__content">
        <ul className="cart__content-list">
          {cartProductsList.map(product => (
            <CartProductCard
              key={product.id}
              product={product}
              productAmount={cart[product.phoneId]}
              cart={cart}
            />
          ))}
        </ul>
        <div className="cart__content-buy">Buy</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
  cart: state.cart,
  totalPrice: state.totalPrice,
  totalAmount: state.totalAmount,
});

const mapDispatchToProps = {
  setTotalAmount: setTotalAmountAction,
  setTotalPrice: setTotalPriceAction,
};

export const CartPage = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(CartPageTemplate);
