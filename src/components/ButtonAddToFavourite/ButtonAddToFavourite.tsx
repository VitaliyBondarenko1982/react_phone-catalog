import React, { FC } from 'react';
import { connect } from 'react-redux';
import {
  setFavouriteProduct as setFavouriteProductAction,
  deleteFavouriteProduct as deleteFavouriteProductAction,
} from '../../store/actions';
import './ButtonAddToFavourite.scss';
import { State } from '../../utils/interfaces';

interface Props {
  id: string;
}

interface StateProps {
  favouritesProducts: string[];
}

interface DispatchProps {
  setFavouriteProduct: (value: string) => void;
  deleteFavouriteProduct: (value: string) => void;
}
const ButtonAddToFavouriteTemplate: FC<Props & StateProps & DispatchProps> = ({
  id,
  favouritesProducts,
  setFavouriteProduct,
  deleteFavouriteProduct,
}) => {

  const buttonClickHandler = () => {
    if (favouritesProducts.includes(id)) {
      deleteFavouriteProduct(id);
    } else {
      setFavouriteProduct(id);
    }
  };

  return (
    <button
      type="button"
      className="button-to-favourite"
      onClick={buttonClickHandler}
    >
      {
        !favouritesProducts.includes(id) ? (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* eslint-disable-next-line max-len */}
            <path fillRule="evenodd" clipRule="evenodd" d="M9.62852 0.631367C10.1584 0.411794 10.7264 0.298779 11.3 0.298779C11.8737 0.298779 12.4416 0.411794 12.9716 0.631367C13.5015 0.850941 13.983 1.17277 14.3885 1.57847C14.7941 1.98393 15.1158 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66666C15.6679 5.24027 15.5549 5.80826 15.3353 6.33819C15.1158 6.86806 14.794 7.34948 14.3884 7.75497C14.3883 7.75501 14.3884 7.75493 14.3884 7.75497L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507 13.6483L1.61174 7.75497C0.792668 6.9359 0.33252 5.825 0.33252 4.66666C0.33252 3.50832 0.792668 2.39742 1.61174 1.57835C2.43081 0.759284 3.54171 0.299135 4.70005 0.299135C5.85839 0.299135 6.96928 0.759284 7.78835 1.57835L8.00005 1.79005L8.21162 1.57847C8.21166 1.57843 8.21158 1.57851 8.21162 1.57847C8.61711 1.17283 9.09865 0.85092 9.62852 0.631367ZM13.3983 2.56819C13.1228 2.29256 12.7957 2.07391 12.4357 1.92474C12.0756 1.77556 11.6898 1.69878 11.3 1.69878C10.9103 1.69878 10.5245 1.77556 10.1644 1.92474C9.80441 2.07391 9.4773 2.29256 9.2018 2.56819L8.49502 3.27497C8.22165 3.54834 7.77844 3.54834 7.50507 3.27497L6.7984 2.5683C6.24189 2.01178 5.48708 1.69914 4.70005 1.69914C3.91301 1.69914 3.15821 2.01178 2.60169 2.5683C2.04517 3.12482 1.73252 3.87962 1.73252 4.66666C1.73252 5.4537 2.04517 6.2085 2.60169 6.76502L8.00005 12.1634L13.3984 6.76502C13.674 6.48952 13.8928 6.1623 14.042 5.80228C14.1911 5.44225 14.2679 5.05637 14.2679 4.66666C14.2679 4.27696 14.1911 3.89107 14.042 3.53105C13.8928 3.17102 13.6739 2.84369 13.3983 2.56819Z" fill="#333333" />
          </svg>
        ) : (
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* eslint-disable-next-line max-len */}
            <path fillRule="evenodd" clipRule="evenodd" d="M11.3 0.298767C10.7264 0.298767 10.1584 0.411782 9.62852 0.631356C9.09865 0.850909 8.61711 1.17281 8.21162 1.57846L8.00005 1.79003L7.78835 1.57834C6.96928 0.759273 5.85839 0.299124 4.70005 0.299124C3.54171 0.299124 2.43081 0.759273 1.61174 1.57834C0.792668 2.39741 0.33252 3.50831 0.33252 4.66665C0.33252 5.82499 0.792668 6.93589 1.61174 7.75496L7.50507 13.6483C7.77844 13.9217 8.22165 13.9217 8.49502 13.6483L14.3884 7.75496C14.794 7.34947 15.1158 6.86805 15.3353 6.33817C15.5549 5.80825 15.6679 5.24026 15.6679 4.66665C15.6679 4.09304 15.5549 3.52505 15.3353 2.99513C15.1158 2.46531 14.7941 1.98392 14.3885 1.57846C13.983 1.17276 13.5015 0.85093 12.9716 0.631356C12.4416 0.411782 11.8737 0.298767 11.3 0.298767Z" fill="#EB5757"/>
          </svg>
        )
      }
    </button>
  );
};

const mapStateToProps = (state: State) => ({
  favouritesProducts: state.favouritesProducts,
});

const mapDispatchToProps = {
  setFavouriteProduct: setFavouriteProductAction,
  deleteFavouriteProduct: deleteFavouriteProductAction,
};

export const ButtonAddToFavourite = connect<StateProps, DispatchProps, Props, State>(
  mapStateToProps, mapDispatchToProps,
)(ButtonAddToFavouriteTemplate);
