import { useState, useEffect } from "react";
import "../cssFolder/Home.css";
import type { AppDispatch, RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const fullText: string =
    "Discover a curated collection designed to elevate your everyday style.";
  const photos: string[] = [
    "e1.jpg",
    "e2.jpg",
    "e3.jpg",
    "e4.jpg",
    "e5.jpg",
    "e6.jpg",
  ];

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        return (prev + 1) % photos.length;
      });
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35);
    return () => clearInterval(typingInterval);
  }, []);

  const { products, loading, error } = useSelector(
    (state: RootState) => state.product,
  );

  const selectedProduct = products.filter((item) => item.price <= 20);

  return (
    <>
      <main>
        <div className="imageSlider">
          <img src={photos[activeIndex]} alt="" />
        </div>
        <div className="contentDiv">
          <section className="contentItem">
            <p className="contentP">{displayedText}</p>
            <section className="contentButton">
              <button onClick={() => navigate("/product")}>
                View all products
              </button>
            </section>
          </section>
        </div>
      </main>

      <div className="selectedProduct">
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
          <div className="ticker-wrapper">
            {selectedProduct &&
              selectedProduct.map((item) => {
                return (
                  <div className="sProducts" key={`orig-${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>
                      {item.price} <FaDollarSign />
                    </h4>
                  </div>
                );
              })}

            {selectedProduct &&
              selectedProduct.map((item) => {
                return (
                  <div className="sProducts" key={`clone-${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>
                      {item.price} <FaDollarSign />
                    </h4>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <div className="getProduct">
        <button onClick={() => navigate("/product")}>Get All Product</button>
      </div>
    </>
  );
}
export default Home;
