import type { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../cssFolder/Details.css";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { addBasket } from "../redux/basketSlice";
function Details() {
  const { products, loading, error } = useSelector(
    (state: RootState) => state.product,
  );
  const { id } = useParams();

  const selectedProduct = products.find((item) => item.id === Number(id));
  console.log(selectedProduct);

  if (loading || products.length === 0) {
    return (
      <div className="loadingContainer">Məhsul məlumatları yüklənir...</div>
    );
  }

  if (error) {
    return <div className="errorContainer">Xəta: {error}</div>;
  }

  if (!selectedProduct) {
    return <div className="errorContainer">Məhsul tapılmadı!</div>;
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="detailsContainer">
        <div className="details">
          <div className="detailsLogo">
            <h4>{selectedProduct.title}</h4>
          </div>
          <div className="productRatingPrice">
            <p>
              Rating:{" "}
              <strong>
                {" "}
                <FaStarHalfAlt />
                {selectedProduct.rating.rate}
              </strong>
            </p>
            <p>
              Price{" "}
              <strong>
                {" "}
                <FaDollarSign />
                {selectedProduct.price}
              </strong>
            </p>
          </div>
          <div className="imgText">
            <img src={selectedProduct.image} />
            <p>{selectedProduct.description}</p>
          </div>

          <div className="detailsBtns">
            <button onClick={() => navigate(-1)}>
              <IoIosArrowBack /> Back
            </button>
            <button onClick={() => dispatch(addBasket(selectedProduct as any))}>
              {" "}
              <SlBasket />
              Add Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Details;
