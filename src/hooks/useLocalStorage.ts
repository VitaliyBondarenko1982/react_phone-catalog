import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { LocalStorageKeys } from '../constants';

const useLocalStorage = <T>(
  key: LocalStorageKeys,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      return initialValue;
    }

    try {
      return JSON.parse(item);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
