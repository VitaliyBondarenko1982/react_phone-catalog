export interface Phone {
  id: string;
  name: string;
  phoneId: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface Details {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface Description {
  title: string;
  text: string[];
}

export interface PhonesWithDetails extends Phone {
  details: Details;
}

export interface State {
  phones: PhonesWithDetails[] | [];
  phoneDetails: Details | null;
  phoneError: boolean;
  // phonesFavorite: string[];
  // phonesCart: Cart | {};
  // sortBy: string;
  // totalPrice: number;
  // totalQuantity: number;
}

// export interface Cart {
//   [key: string]: number;
// }

export interface PhoneCartInfo {
  id: string;
  quantity: number;
}
