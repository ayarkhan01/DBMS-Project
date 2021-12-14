import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./css styles/Menu.css";
import InfoFile from "./InfoFile.js";
import MyOrder from "./MyOrder";

function Menu() {
  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue.color] = result[currentValue.color] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const [data, setData] = useState(InfoFile);
  const [formattedData, setFormattedData] = useState([]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = (id) => {
      const totalToPay = propertyNames.filter((hello) => {
        const yellow = hello[1].map((item) => {
          const totalPay = item.value.reduce(
            (previousScore, currentScore, index) =>
              previousScore + currentScore * item.value,
            0,
            setTotal(totalToPay)
          );
        });
      });
    };
    console.log("total:", total);
  }, [formattedData]);

  const InfoFileGroupedByItem = groupBy(data, "color");
  const propertyNames = Object.entries(InfoFileGroupedByItem);


  return (
    <div>
      <div className="menu">
        {propertyNames.map((counter) => (
          <>
            <span className="category">
              {counter[0]} {"("}
              {counter[1].length}
              {")"}
            </span>
            {counter[1].map((item) => (
              <>
                <MenuItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  customizable={item.customizable}
                  veg={item.veg}
                  seller={item.seller}
                  dishValue={item.value}
                />
              </>
            ))}
          </>
        ))}
      </div>

      <div>
        <MyOrder
          addValue={addValue}
          data={data}
          minValue={minValue}
          delValue={delValue}
          clearValue={clearValue}
          total={total}
        />
      </div>
    </div>
  );
}

export default Menu;
