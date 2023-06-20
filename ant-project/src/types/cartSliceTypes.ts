export interface ICartItem {
  id: string;
  title: string;
  price: number;
  count: number;
}

export interface ICartSlice {
  items: ICartItem[];
  totalCount: number;
  totalPrice: number;
}