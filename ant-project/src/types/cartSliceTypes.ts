export interface ICartItem {
  id: string;
  title: string;
  price: number;
  count: number;
  image: string;
}

export interface ICartSlice {
  items: ICartItem[];
  totalCount: number;
  totalPrice: number;
}