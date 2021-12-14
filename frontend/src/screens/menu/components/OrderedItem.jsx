import React, { useState } from 'react'
import '../styles/ordered.css'
const OrderedItem = ({orderedItem, setOrderedItem}) => {
    const [item, setItem] = useState([])

    return (
        <div className = 'ordered'>
            <div className = 'ordered__intro'>
                <p>My orders</p>
                <button className = 'ordered__intro__button'>
                    Clear
                </button>  
            </div>
            <div className = 'ordered__items'>
                {
                    orderedItem && orderedItem.length > 0 ?
                        <div className = 'ordered__items__list'>
                            {
                                orderedItem.map(item => {
                                    return(
                                        <div key = {item.id} className = 'ordered__items__list__item'>
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className = 'ordered__items__no-order'>
                            <p>No Items Ordered</p>
                        </div>
                }
            </div>
            <div className = 'ordered__instructions'>
                <p>Cooking Instructions?</p>
                <input
                    type = 'text'
                    placeholder = 'Mention instruction here'
                />
            </div>
            <button className = 'ordered__intro__button2'>
                Proceed to checkout
            </button>
        </div>
    )
}

export default OrderedItem
