export interface InitialStateType {
  id: number;
  title: string;
  total: number;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
export type StateType = {
  products: InitialStateType[];
  loading: boolean;
  error: string | null;
  searchText: string;
  selectCategory: "all" | "men" | "women" | "electronics" | "jewelery";
  sortType: "all" | "cheap-and-expensive" | "expensive-and-cheap";
};
