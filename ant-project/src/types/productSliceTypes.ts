export interface IProductBlock {
  id: string;
  title: string;
  price: number;
  image: string;
}


export interface IProductsSlice {
  productList: IProductBlock[];
  status: EProductSliceStatus;
}

export enum EProductSliceStatus {
  Loading = "loading",
  Success = "success",
  Error = "error"
}

export interface IProductSliceParams {
  categoryID: number;
  searchValue: string;
}