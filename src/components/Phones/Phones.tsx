import React, { FC, useEffect, lazy, Suspense} from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import './Phones.scss';
import { PhonesWithDetails, State } from '../../utils/interfaces';
import {
  loadPhones as loadPhonesAction,
} from '../../store/actions';

interface StateProps {
  phones: PhonesWithDetails[];
}

interface DispatchProps {
  loadPhones: () => void;
}

const LazyPhoneCard = lazy(() => import('../PhoneCard/PhoneCard')
  .then(({ PhoneCard }) => ({default: PhoneCard })));

const PhonesTemplate: FC<StateProps & DispatchProps> = ({
  phones,
  loadPhones,
}) => {
  useEffect(() => {
    loadPhones();
  }, [loadPhones]);

  return (
    <div className="phones__container">
      <Suspense fallback={(
        <div className="phones__loader">
          <Loader
            type="TailSpin"
            color="#89939a"
            height={120}
            width={120}
          />
        </div>
      )}>
        <div className="phones__catalog">
          {phones.map(phone => (
            <LazyPhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  phones: state.phones,
});

const mapDispatchToProps = {
  loadPhones: loadPhonesAction,
};

export const Phones = connect<StateProps, DispatchProps, {}, State>(
  mapStateToProps, mapDispatchToProps,
)(PhonesTemplate);
