
import React, { useEffect, useState } from 'react'
import { axios } from '../../axios/axiosInstance'
import MenuItem from './components/MenuItem'
import OrderedItem from './components/OrderedItem'
import './styles/menu.css'
import './styles/ordered.css'
const Menu = () => {
    const [soupMenu, setSoupMenu] = useState([])
    const [apetizerMenu, setApetizerMenu] = useState([])
    const [orderedItems, setOrderedItems] = useState([])
    const [showProceed, setShowProceed] = useState(false)
    useEffect(async() => {
        try {
            console.log('reunnnnnnn');
            const soups = await axios.post('/menu/category', {category: 'soup'})
            const apetizer = await axios.post('/menu/category',{category: 'apetizer'})
            console.log(soups.data, apetizer.data);
            setSoupMenu(soups.data)
            setApetizerMenu(apetizer.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const getTotalPrice = () => {
        let total = 0;
        orderedItems.map(item => {
            total = total + item.price
        })
        return total;
    }

    const clearCheckout = () => {
        if(orderedItems.length > 0){
            setOrderedItems([])
        }
    }

    const handleCheckout = () => {
        setShowProceed(false)
        setOrderedItems([])
    }
    return (
        <div className = 'menu'>
            <div className = 'menu__container' style = {{position: 'relative'}}>
                <div className = 'menu__container__menus'>    
                    <div className = 'menu__container__soup'>
                        <p>{soupMenu && soupMenu.length > 0 && `Soup ( ${soupMenu.length} )`}</p>
                        {
                            soupMenu &&  
                            soupMenu.map(item => {
                                return(
                                    <MenuItem menu = {item} orderedItems = {orderedItems} setOrderedItem = {setOrderedItems}/>
                                )
                            })
                        }
                    </div>
                    <div className = 'menu__container__apetizer'>
                        <p>{apetizerMenu && apetizerMenu.length > 0 && `Appetizer ( ${apetizerMenu.length} )`}</p>
                        {
                            apetizerMenu &&
                            apetizerMenu.map(item => {
                                return(
                                    <MenuItem menu = {item} orderedItems = {orderedItems} setOrderedItem = {setOrderedItems}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className = 'menu__container__orders'>
                    <div className = 'ordered'>
                        <div className = 'ordered__intro'>
                            <p>My orders</p>
                            <button className = 'ordered__intro__button' onClick = {clearCheckout}>
                                Clear
                            </button>  
                        </div>
                        <div className = 'ordered__items'>
                            {
                                orderedItems && orderedItems.length > 0 ?
                                    <div className = 'ordered__items__list'>
                                        {
                                            orderedItems.map(item => {
                                                return(
                                                    <div key = {item.id} className = 'ordered__items__list__item'>
                                                        <div className = 'ordered__items__list__item__intro'>
                                                            <img className = 'ordered__items__list__item__img' src = {item.picture}/>
                                                            <p className = 'ordered__items__list__item__name'>{item.name}</p>
                                                        </div>
                                                        <p className = 'ordered__items__list__item__price'>INR {item.price}</p>
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
                            {
                                orderedItems && orderedItems.length > 0 &&
                                <p className = 'ordered__instructions__totalPrice'>Total price: {getTotalPrice()}</p>
                            }
                            <p>Cooking Instructions?</p>
                            <input
                                type = 'text'
                                placeholder = 'Mention instruction here'
                            />
                        </div>
                        <button className = 'ordered__intro__button2' onClick = {() => setShowProceed(!showProceed)}>
                            Proceed to checkout
                        </button>
            </div>
                </div>
            {
                showProceed &&
                <div className = 'checkout'>
                    <h1>Thanks Please shop with us again...</h1>
                    <button className = 'checkout__button' onClick = {() => handleCheckout()}>
                        Ok
                    </button>
                </div>
            }
            </div>
        </div>
    )
}

export default Menu
