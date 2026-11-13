import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ProductObj from "./ProductObj";
import { IoMdClose } from "react-icons/io";
import "../cssFolder/ProductsList.css";
import { toggleBasket } from "../redux/basketSlice";
function ProductList() {
  const { basket, basketState } = useSelector(
    (state: RootState) => state.basket,
  );
  const dispatch = useDispatch();

  const basketTotal = basket.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  return (
    <>
      {basketState && (
        <div className="basketBg">
          <div className="productsListContainer">
            <div className="basketHeader">
              <h4>Your Basket</h4>
              <button onClick={() => dispatch(toggleBasket())}>
                <IoMdClose />
              </button>
            </div>
            <div className="basketProps">
              {basket.length === 0 ? (
                <div className="textContainer">
                  <p className="noficationText">The basket is empty</p>
                </div>
              ) : (
                basket.map((item) => {
                  return <ProductObj key={item.id} products={item} />;
                })
              )}
            </div>
            <div className="totalCnt">
              <h4>
                Total: <strong>{basketTotal.toFixed(2)}</strong>
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
