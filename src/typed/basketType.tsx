export interface basketInitialState {
  id: number;
  image: string;
  text: string;
  price: number;
  quantity: number;
}
export interface basketType {
  basket: basketInitialState[];
  basketState: boolean;
}
