import { Phone, Details } from './interfaces';

const HOST = 'https://alexandershpilka.github.io';

export const MAIN_URL = `${HOST}/phones_api/`;

const detailsURL = (id: string) => `${MAIN_URL}api/phones/${id}.json`;

export const PHONES_URL = `${MAIN_URL}api/phones.json`;

export const getPhones = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const getDetails = async <T>(phones: Phone[]): Promise<Details[]> => {
  return Promise.all(
    phones.map(({ phoneId }) => fetch(detailsURL(phoneId)).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })),
  );
};

export const getPhone = async <T>(id: string): Promise<T> => {
  const response = await fetch(detailsURL(id));

  return response.json();
};
