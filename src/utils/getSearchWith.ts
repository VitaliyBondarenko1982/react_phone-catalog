import { SearchParams } from '../types';

function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(
    currentParams.toString(),
  );

  Object.entries(paramsToUpdate)
    .forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else if (Array.isArray(value)) {
        newParams.delete(key);

        value.forEach(part => {
          newParams.append(key, part as string);
        });
      } else {
        newParams.set(key, value as string);
      }
    });

  return newParams.toString();
}

export default getSearchWith;
