import {EProductSliceStatus} from "./productSliceTypes";


export interface IProductItemSliceBlock {
  id: string;
  title: string;
  price: number;
}

export interface IProductItemSlice {
  product: IProductItemSliceBlock;
  status: EProductSliceStatus;
}

export interface IProductItemSliceArgs {
  id: string;
}