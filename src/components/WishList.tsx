import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { IoMdClose } from "react-icons/io";
import WishListObj from "./WishListObj";
import "../cssFolder/WishList.css";
import { toggleWishList } from "../redux/wishlist";
function WishList() {
  const { wishList, wishListState } = useSelector(
    (state: RootState) => state.wishlist,
  );
  const dispatch = useDispatch();
  return (
    <>
      {wishListState && (
        <div className="favoritesBg">
          <div className="favoritesContainer">
            <div className="favoritesHeader">
              <h4>Your Favorites</h4>
              <button>
                <IoMdClose onClick={() => dispatch(toggleWishList())} />
              </button>
            </div>
            <div className="favoritesContent">
              {wishList.length === 0 ? (
                <div className="favoritesText">
                  <p>No product selected</p>
                </div>
              ) : (
                <div className="favorites">
                  {wishList.map((item) => {
                    return <WishListObj key={item.id} products={item} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default WishList;
