import React, { useState } from 'react';
import './productDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../../redux/actions/action";
import { toast, } from "react-toastify";

const ProductDetail = ({ product }) => {
  // Example static data, replace with real product data
    const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const handleAddToCart = (item) => {
    toast.success("Added in Card", { position: "bottom-right" });
    dispatch(addToCart(item));
  };

  const handlepurchase = () => {
    if (cartItems) {
      toast.success("Purchased items successfully", { position: "bottom-right" });
    } else {
      toast.error("No items to purchase", { position: "bottom-right" });
    }
  };
  
  const [quantity, setQuantity] = useState(1);
  const data = product || {
    image: "https://m.media-amazon.com/images/I/81BGKLI+cWL._SX679_.jpg",
    title: "Bare Peel SPF 50+ Gel Sunscreen | No White Cast | Water-Based",
    rating: 3.6,
    reviews: 31,
    discount: 25,
    price: 299,
    mrp: 399,
    offers: [
      "Upto ₹8.00 cashback as Amazon Pay Balance",
      "Buy 2 or more and get 1 of them free"
    ],
    inStock: true,
    seller: "Bare Peel",
    delivery: "Monday, 21 July",
    deliveryLocation: "Kathmandu 400001",
    features: [
      "Non-Returnable",
      "Amazon Fulfilled",
      "Free Delivery",
      "Secure Transaction"
    ]
  };
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

  const today = new Date();
  const dayName = days[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];

  return (
    <div className="productDetail">
      <div className="productDetailTopBanner">
        <div className="productTopBannerItems"></div>
        <div className="productDetailTopSubBannerItems">Face Care &gt; Sunscreen & Aftercare &gt; Sunscreen</div>
      </div>
      <div className="productDetailPageMain">
        <div className="productDetailimage">
          <img src={data.image} alt={data.title} className="productDetailImg" />
          <div className="productDetailImgCaption">Click to see full view</div>
        </div>
        <div className="productDetailAll">
          <h2 className="productDetailTitle">{data.title}</h2>
          <div className="productDetailRating">
            <span>{data.rating} ★</span>
            <span>({data.reviews})</span>
          </div>
          <div className="productDetailPriceSection">
            <span className="productDetailDiscount">-{data.discount}%</span>
            <span className="productDetailPrice">₹{data.price}</span>
            <span className="productDetailMrp">M.R.P.: <s>₹{data.mrp}</s></span>
            <div className="productDetailInclusive">Inclusive of all taxes</div>
          </div>
          <div className="productDetailOffers">
            <div className="productDetailOfferTitle">Offers</div>
            {data.offers.map((offer, i) => (
              <div key={i} className="productDetailOffer">{offer}</div>
            ))}
          </div>
          <div className="productDetailDelivery">
            <span>FREE delivery <b>{ dayName } {date} {month} </b></span>
            <span>Delivering to location</span>
          </div>
          <div className="productDetailStock">
            <span className={data.inStock ? "inStock" : "outStock"}>
              {data.inStock ? "In stock" : "Out of stock"}
            </span>
            <div>Delivered by Amazon</div>
            <div>Sold by {data.seller}</div>
            <div>Payment <a href="#">Secure transaction</a></div>
          </div>
          <div className="productDetailQuantity">
            <label>Quantity: </label>
            <select value={quantity} onChange={e => setQuantity(e.target.value)}>
              {[1,2,3,4,5].map(q => <option key={q} value={q}>{q}</option>)}
            </select>
          </div>
          <div className="productDetailButtons">
            <button className="addToCartBtn"  onClick={() => {
                            handleAddToCart(data);
                          }}>Add to Cart</button>
            <button className="buyNowBtn" onClick={handlepurchase} >Buy Now</button>
          </div>
          <div className="productDetailFeatures">
            {data.features.map((f, i) => (
              <span key={i} className="productDetailFeature">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;