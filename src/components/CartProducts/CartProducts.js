import React, { useState } from 'react';
import './CartProducts.scss';

import ImgProduct from '../../assets/img/imgproduct.webp';

function CartProducts() {

    const [data, setData] = useState(true);

    console.log(data);

    return (
        <div className="cartproducts">
            {
                data ?
                (
                    <div className="cartproducts-details">
                        <strong>Ship</strong>
                        <div className="products-details">
                            <div className="details-img">
                                <img src={ImgProduct} alt=""/>
                            </div>
                            <div className="details-info">
                                <p className="details-info--name">501 Original Fit Men's Jeans</p>
                                <p className="details-info--material">Medium Stonewash</p>
                                <p className="details-info--price">$59.50</p>
                                <div className="details-info--quantity">
                                    <p className="measurements">33W X 36L</p>
                                    <p className="quantity">Qty: 1</p>
                                </div>
                                <p className="details-info--subtotal">Subtotal: <strong>$67.70</strong></p>
                            </div>
                        </div>
                    </div>
                )
                :
                (<p>There are no items in your bag.</p>)
            }
        </div>
    )
}

export default CartProducts
