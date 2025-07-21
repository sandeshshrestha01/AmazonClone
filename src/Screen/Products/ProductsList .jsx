import React, { useState, useEffect } from "react";
import "./products.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";
import { toast, ToastContainer } from "react-toastify";
import BASE_URL from "../../globleVariable";
import fetchData from "../../API/fetchdata";
import { Link, useParams } from "react-router-dom";

const ProductsList = () => {
  const params = useParams();
  const category = params.category;
  const additionalUrl = category
    ? `?populate=*&filters[Product_Category][$eqi]=${category}`
    : "?populate=*";
  const bannerUrl = category
    ? `?populate=*&filters[BannerListCategory][$eqi]=${category}`
    : "?populate=*";
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("Added in Card", { position: "bottom-right" });
    dispatch(addToCart(item));
  };
  const [Products, setProducts] = useState([]);

  const [BannerList, setBannerList] = useState([]);
  useEffect(() => {
    const getBannerList = async () => {
      const bannerApiUrl = BASE_URL + "/api/product-banners" + bannerUrl;
      const data = await fetchData(bannerApiUrl);
      setBannerList(Array.isArray(data) ? data : []);
    };
    getBannerList();
  }, [category, bannerUrl]);

  useEffect(() => {
    const getProducts = async () => {
      const productUrl = BASE_URL + "/api/productselectronics" + additionalUrl;
      const data = await fetchData(productUrl);
      setProducts(Array.isArray(data) ? data : []);
    };
    getProducts();
  }, [category, additionalUrl]);

  return (
    <div className="productPage">
      <div className="productTopBanner">
        <div className="productTopBannerItems">{category}</div>
        {BannerList.map((item, ind) => {
          return (
            <div className="productTopBannerItemSubMenu" key={ind.id}>
              {item.Banner_List}
            </div>
          );
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
              {category}
            </span>
          </div>
          <div className="itemsImageProductPage">
            {Products.map((item, index) => {
              return (
                <Link to={`/productdetail`} className="productLink">
                <div className="itemsImageProductPageOne" key={item.id}>
                  <div className="imgBlockItemsImageProductPageOne">
                    <img
                      src={BASE_URL + item?.prodictsImage?.url}
                      className="productImageProduct"
                      alt=""
                    />
                  </div>
                  <div className="productNameProduc">
                    <div>{item.productsTitle}</div>
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
                        <div className="rateHomedetailsPrice">
                          {item.productPrice}
                        </div>
                        <div
                          className="addtobasketBtn"
                          onClick={() => {
                            handleAddToCart(item);
                          }}
                        >
                          Add to Cart
                        </div>
                      </div>
                    </div>
                    <div className="offProductPage">
                      Up to {item.productDiscount}% off on select Cards
                    </div>
                    <div className="freeDeliveryHomepage">
                      Free Delivery By Amazon
                    </div>
                  </div>
                </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductsList;
