import { BASE_URL } from '../api';

const getFullPath = (path: string) => {
  return `${BASE_URL}/${path}`;
};

export default getFullPath;
