import React,{ useState, useEffect } from 'react'
import'./cart.css'
import { useSelector, useDispatch } from "react-redux";
import BASE_URL from '../../globleVariable';
import { removeFromCart } from '../../redux/actions/action';
import { toast,ToastContainer } from "react-toastify";

const Cart = () => {
const [cartItem, setCartItem]= useState([]);
 const dispatch = useDispatch();
 const cartItems = useSelector((state)=> state.cart.items);
 
 let Total = 0; 
 let cost = cartItems.map((item)=>{return Total= Total + item.productPrice})
 useEffect(()=>{
    setCartItem(cartItems);
 },[cartItems])

 const handleRemoveFromCart=(id)=>{
    toast.error("Item Remove From Cart",{position:'bottom-right'})
    dispatch(removeFromCart(id));

 }
const handlepurchase = () => {
  if (cartItems.length > 0) {
    toast.success("Purchased items successfully", { position: "bottom-right" });
  } else {
    toast.error("No items to purchase", { position: "bottom-right" });
  }
};
  return (
    <div className='cart'>
        <div className="topLeftCart">
            <div className="topLeftCartTitle">Shopping Cart</div>
            <div className="desellectAllCart">Deselect all items</div>
            <div className="cartPriceTextDivider">Price</div>

            <div className="cartItemsDiv">
                {
                    cartItems.map((item,ind)=>{
                        return(
                              <div className="cartItemBlock">
                    <div className="cartItemLeftBlock">
                        <div className="cartItemLeftBlockImage">
                            <img className="cartItemLeftBlockImg"src={BASE_URL + item?.prodictsImage?.url} alt="" />
                        </div>

                        <div className="cartItemLeftBlockDetails">
                            <div className="cartItemProductName">{item.productsTitle}</div>
                            <div className="inStockCart">In stock</div>
                            <div className="elgFreeShp">Elligible for FREE Shiping</div>
                            <div className="amazonFullFilledImage"><img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
                            <div className="removeFromCart" onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                        </div>

                    </div>
                    <div className="cartItemRightBlock">Rs. {item.productPrice}</div>
                </div>

                        )
                    })
                }
            </div>
        </div>
       

        <div className="topRightCart">

            <div className="subTotalTitle">Subtotal ({cartItem.length} items): <span className='subTotalTitleSpan'>Rs. {Total}</span></div>
            <div className="giftAddto">
                <input type="checkbox" />
                <div>This order contains a gift</div>
            </div>
            <div className="proceedToBuy" onClick={handlepurchase}>Proceed To Buy</div>

        </div>
        <ToastContainer/>
      
    </div>
  )
}

export default Cart
