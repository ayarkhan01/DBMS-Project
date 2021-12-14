import React from "react";

function PopUpInfo() {
  return (
    <div>
      <h1>Order details</h1>
      <div>items div</div>
      <div>amount to be paid and total and method of payment</div>
      <div>delivery details</div>
      <div>rate delivery</div>
      <div>
        <span>Write a review?</span>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Start writing your review"
          />
        </form>
      </div>
    </div>
  );
}

export default PopUpInfo;
