import { MdPlusOne } from "react-icons/md";
import { TbExposureMinus1 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  quantitydecrease,
  quantityincrease,
  removeItems,
} from "../redux/basketSlice";
import { IoMdClose } from "react-icons/io";
import "../cssFolder/ProductsList.css";

interface ProductsType {
  products: any;
}

function ProductObj({ products }: ProductsType) {
  const { id, text, price, quantity, image } = products;
  const dispatch = useDispatch();

  return (
    <div className="basketItemSingle">
      <div className="imgContainer">
        <img src={image} alt={text} />
        <button className="removeBtn" onClick={() => dispatch(removeItems(id))}>
          <IoMdClose />
        </button>
      </div>
      <div className="itemDetails">
        <h4>{text}</h4>
        <p className="priceTag">
          Price: <strong>${price}</strong>
        </p>
        <div className="quantityAction">
          <button onClick={() => dispatch(quantitydecrease(id))}>
            <TbExposureMinus1 />
          </button>
          <span className="qtyNum">{quantity}</span>
          <button onClick={() => dispatch(quantityincrease(id))}>
            <MdPlusOne />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductObj;
