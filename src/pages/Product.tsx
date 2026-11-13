import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cssFolder/Products.css";
import type { AppDispatch, RootState } from "../redux/store";
import { FaDollarSign } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { CgDetailsMore } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { searhProducts } from "../redux/productSlice";
import type { basketInitialState } from "../typed/basketType";
import { addBasket } from "../redux/basketSlice";
import type { wishListInitialState } from "../typed/wishListType";
import { addWishList, removeWishList } from "../redux/wishlist";
import { useNavigate } from "react-router-dom";
function Product() {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState<
    "all" | "men" | "women" | "electronics" | "jewelery"
  >("all");
  const [sort, SetSort] = useState<
    "all" | "cheap-and-expensive" | "expensive-and-cheap"
  >("all");
  const { products, loading, error, searchText } = useSelector(
    (state: RootState) => state.product,
  );
  const { wishList } = useSelector((state: RootState) => state.wishlist);
  const [visibleElement, setVisibleElement] = useState<number | null>(null);
  const handleSearch = (item: string) => {
    setInputValue(item);
    dispatch(searhProducts(item));
  };
  const handleCategory = (
    item: "all" | "men" | "women" | "electronics" | "jewelery",
  ) => {
    setCategory(item);
  };
  const handleSort = (
    item: "all" | "cheap-and-expensive" | "expensive-and-cheap",
  ) => {
    SetSort(item);
  };
  const filteredProducts = products
    .filter((item) => {
      const searchedProduct = item.title
        .trim()
        .toLowerCase()
        .includes(searchText.trim().toLowerCase());
      let matchesCategory = true;
      if (category === "men") {
        matchesCategory = item.category === "men's clothing";
      } else if (category === "women") {
        matchesCategory = item.category === "women's clothing";
      } else if (category === "electronics") {
        matchesCategory = item.category === "electronics";
      } else if (category === "jewelery") {
        matchesCategory = item.category === "jewelery";
      }

      return searchedProduct && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "cheap-and-expensive") {
        return a.price - b.price;
      } else if (sort === "expensive-and-cheap") {
        return b.price - a.price;
      }
      return 0;
    });
  const handleAdd = (item: any) => {
    const newProduct: basketInitialState = {
      id: item.id,
      text: item.title,
      image: item.image,
      price: item.price,
      quantity: item.quantity,
    };
    dispatch(addBasket(newProduct));
  };
  const handleAddWishList = (item: any) => {
    const newProduct: wishListInitialState = {
      id: item.id,
      text: item.title,
      image: item.image,
      price: item.price,
      category: item.category,
    };
    dispatch(addWishList(newProduct));
    const isAlreadyFav = wishList.some(
      (favItem: any) => favItem.id === item.id,
    );

    if (isAlreadyFav) {
      dispatch(removeWishList(item.id));
    } else {
      dispatch(addWishList(newProduct));
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="products">
        <div className="productsTags">
          <div className="products Logo">
            <h4>Search/Filter</h4>
          </div>
          <section>
            <div className="searchIcon">
              <p>
                <CiSearch />
              </p>
            </div>
            <input
              type="text"
              placeholder="Search Product"
              value={inputValue}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <select
              className="sectionSelect"
              value={sort}
              onChange={(e) =>
                handleSort(
                  e.target.value as
                    | "all"
                    | "cheap-and-expensive"
                    | "expensive-and-cheap",
                )
              }
            >
              <option value="all">All</option>
              <option value="cheap-and-expensive">Ucuzdan-Bahaya</option>
              <option value="expensive-and-cheap">Bahadan-Ucuza</option>
            </select>
            <select
              value={category}
              onChange={(e) =>
                handleCategory(
                  e.target.value as
                    | "all"
                    | "men"
                    | "women"
                    | "electronics"
                    | "jewelery",
                )
              }
            >
              <option value="all">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">jewelery</option>
            </select>
          </section>
        </div>
        {loading ? (
          <div className="spinner">
            <div className="loading-spinner "></div>
          </div>
        ) : error ? (
          <div className="product-error">
            <h3>Products could not be loaded</h3>
            <p>Please try again later.</p>
          </div>
        ) : (
          <div className="productsContainer">
            {filteredProducts.map((item) => {
              const isFavorite = wishList.some(
                (favItem: any) => favItem.id === item.id,
              );
              return (
                <div
                  key={item.id}
                  className="productsItem"
                  onMouseEnter={(e) => {
                    e.preventDefault;
                    setVisibleElement(item.id);
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setVisibleElement(null);
                  }}
                >
                  <div className="detailsDiV">
                    <button onClick={() => navigate(`/product/${item.id}`)}>
                      <CgDetailsMore />
                    </button>
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div className="itemP">
                    <p>{item.title}</p>
                  </div>
                  <div></div>
                  <div
                    className={visibleElement === item.id ? "menu" : "gorunme"}
                  >
                    <div className="itemPrice">
                      {" "}
                      <p>
                        {item.price} <FaDollarSign />
                      </p>
                    </div>
                    <div className="buttons">
                      <button
                        className="addWishlist"
                        onClick={() => handleAddWishList(item)}
                      >
                        {isFavorite ? <FaHeart /> : <CiHeart />}
                      </button>
                      <button
                        className="addBtns"
                        onClick={() => handleAdd(item)}
                      >
                        {" "}
                        <SlBasket />
                        Add Basket
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Product;
