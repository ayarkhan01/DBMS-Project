import MyOrderInfo from "./MyOrderInfo";
import "./css styles/MyOrdersTab.css";
import React, { useState } from "react";
import PopUp from "./PopUp";

function MyOrder(props) {
  const accordionData = {
    title: "To Pay",
    content: `Items Total:} \nfee charges\n Discount`,
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const { title, content } = accordionData;

  const [isActive, setIsActive] = useState(false);

  const clearCart = () => {
    props.clearValue(props.id);
  };

  return (
    <div className="MyOrdersTab">
      <div className="headingMyOrder">
        <span className="title">My Order</span>
        <button className="clearCart" onClick={clearCart}>
          Clear cart
        </button>
      </div>

      <MyOrderInfo
        key={props.id}
        id={props.id}
        name={props.name}
        price={props.price}
        description={props.description}
        image={props.image}
        customizable={props.customizable}
        veg={props.veg}
        seller={props.seller}
        addValue={props.addValue}
        minValue={props.minValue}
        dishValue={props.dishValue}
        data={props.data}
        delValue={props.delValue}
      />
      <div className="toPay">
        <div className="accordion">
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => setIsActive(!isActive)}
            >
              <div>{title}</div>
              <div>{isActive ? "∨" : "∧"}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
          </div>
        </div>
      </div>

      <div className="instruction">
        <span>Cooking instructions?</span>
        <form>
          <input type="text" name="search" placeholder="Mention it here.." />
        </form>
      </div>

      <div>
        <button className="checkout" onClick={togglePopup}>
          Proceed to Chekckout
        </button>
        {isOpen && (
          <PopUp
            content={
              <>
                <button className="submit">Submit</button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}
export default MyOrder;
