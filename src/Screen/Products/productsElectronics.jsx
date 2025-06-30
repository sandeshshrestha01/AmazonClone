import React from "react";
import "./products.css";
import ProductDetail from "./products.json";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/action'
import { toast,ToastContainer } from "react-toastify";
const ProductsElectronics = () => {
  const options = [
    { name: "Mobiles & Accessories" },
    { name: "Laptops & Accessories" },
    { name: "TV & Home Entertainment" },
    { name: "Audio" },
    { name: "Cameras" },
    { name: "Computer Peripherals" },
    { name: "Smart Technology" },
    { name: "Musical Instruments" },
    { name: "Office & Stationery" },
  ];
 const dispatch = useDispatch();
 const cartItems = useSelector((state)=> state.cart.items)
 const handleAddToCart =(item)=>{ 
    toast.success("Added in Card",{position:"bottom-right"});
    dispatch(addToCart(item));
 }
  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">Electronics</div>
        {options.map((item, ind) => {
          return <div className="productTopBannerItemSubMenu">{item.name}</div>;
        })}
      </div>

      <div className="productsPageMain">
        <div className="productsPageMainLeftCategory">
          <div className="productsPageMainLeftCategoryTitle">Category</div>
          <div className="productsPageMainLeftCategoryContent">
            <div className="productsPageMainLeftCategoryTitleContent">
              Computers & Accessories
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Macbooks
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="ratingLeftBox">
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
              <div className="andUp"> & Up</div>
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>

            <div className="productsPageMainLeftCategoryContentSub">
              Amazon Prime
            </div>
            <div className="productsPageMainLeftCategoryContentSub">
              Average Customer Review
            </div>
          </div>
        </div>
        <div className="productsPageMainRight">
          <div className="productsPageMainRightTopBanner">
            1-5 of result for{" "}
            <span className="productsPageMainRightTopBannerSpan">
              Electronics
            </span>
          </div>
          <div className="itemsImageProductPage">
            {ProductDetail.product.map((item, index) => {
              return (
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imgBlockItemsImageProductPageOne">
                    <img
                      src={item.imageUrl}
                      className="productImageProduct"
                      alt=""
                    />
                  </div>
                  <div className="productNameProduc">
                    <div>{item.name}</div>
                    <div className="productNameProductRating">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i >= 4 ? (
                          <StarOutlineIcon
                            key={i}
                            sx={{ fontSize: "16px", color: "#febd69" }}
                          />
                        ) : (
                          <StarRateIcon
                            key={i}
                            sx={{ fontSize: "16px", color: "#febd69" }}
                          />
                        )
                      )}
                    </div>
                    <div className="priceProductDetailPage">
                      <div className="currencyText">₹</div>
                      <div className="rateHomeDetail">
                        <div className="rateHomedetailsPrice">{item.price}</div>
                        <div className="addtobasketBtn"onClick={()=>{handleAddToCart(item)}}>Add to Cart</div>
                      </div>
                    </div>
                    <div className="offProductPage">
                      Up to 10% off on select Cards
                    </div>
                    <div className="freeDeliveryHomepage">
                      Free Delivery By Amazon
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ProductsElectronics;
