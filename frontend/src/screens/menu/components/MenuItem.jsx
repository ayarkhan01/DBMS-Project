import React from 'react'
import '../styles/menuItem.css'
const MenuItem = ({menu, setOrderedItem, orderedItems}) => {

    const order = (menu) => {
        setOrderedItem([...orderedItems, menu])
    }

    return (
        <div className = 'menu-item'>
            <div className = 'menu-item__intro'>
                <img src = {menu.picture} alt = 'menu item'/>
                <p className = 'menu-item__intro__name'>{menu.name}</p>
                <p className = 'menu-item__intro__best'>best seller</p>
            </div>
            <p className = 'menu-item__price'>INR {menu.price}</p>
            <p className = 'menu-item__customizable'>customizable</p>
            <div className = 'menu-item__details'>
                <p>
                    {menu.description}
                </p>
                <div>
                    {
                        orderedItems.includes(menu) ?
                            <p className = 'added__item'>Added</p>
                            :
                            <button onClick = {() => order(menu)}>
                                    <p>Add</p>
                            </button>
                        }
                </div>
            </div>
        </div>
    )
}

export default MenuItem
