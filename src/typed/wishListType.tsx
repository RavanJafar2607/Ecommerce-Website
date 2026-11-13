export interface wishListInitialState {
  id: number;
  text: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}
export interface wishListType {
  wishList: wishListInitialState[];
  wishListState: boolean;
}
