import React, { useState } from "react";
import MyOrderItems from "./MyOrderItems";

function MyOrderInfo(props) {
  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue.color] = result[currentValue.color] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const InfoFileGroupedByItem = groupBy(props.data, "color");

  const propertyNames = Object.entries(InfoFileGroupedByItem);

  return (
    <div className="menuMyOrder">
      {propertyNames.map((counter) => (
        <>
          {counter[1] &&
            counter[1].map((item) => (
              <>
                <MyOrderItems
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  customizable={item.customizable}
                  veg={item.veg}
                  seller={item.seller}
                  addValue={props.addValue}
                  minValue={props.minValue}
                  dishValue={item.value}
                  delValue={props.delValue}
                />
              </>
            ))}
        </>
      ))}
    </div>
  );
}

export default MyOrderInfo;
