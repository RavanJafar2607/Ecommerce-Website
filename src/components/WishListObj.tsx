import type { wishListInitialState } from "../typed/wishListType";
import { IoMdClose } from "react-icons/io";
import "../cssFolder/WishList.css";
import { useDispatch } from "react-redux";
import { removeWishList } from "../redux/wishlist";
import { SlBasket } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { addBasket } from "../redux/basketSlice";
import { useNavigate } from "react-router-dom";

interface ProductsPropsType {
  products: wishListInitialState;
}
function WishListObj({ products }: ProductsPropsType) {
  const { id, text, image, price, category, quantity } = products;
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newTodo = {
      id: id,
      text: text,
      image: image,
      price: price,
      quantity: quantity,
    };
    dispatch(addBasket(newTodo));
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="singleProduct">
        <div className="imgBtn">
          <img src={image} alt={text} />
          <button
            className="removeWishlistPro"
            onClick={() => dispatch(removeWishList(id))}
          >
            <IoMdClose />
          </button>
        </div>
        <div className="productText">
          <h4>{text}</h4>
          <p>
            Price: <strong>{price}</strong>
          </p>
          <p>
            Category: <strong>{category}</strong>
          </p>
        </div>
        <div className="wishListBtns">
          <button onClick={() => handleAdd()}>
            {" "}
            <SlBasket /> Add Basket
          </button>
          <button onClick={() => navigate(`/product/${id}`)}>
            Get Details <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
}
export default WishListObj;
