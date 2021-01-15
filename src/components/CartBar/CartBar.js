import React from 'react';
import './CartBar.scss';
import CartProducts from '../CartProducts/CartProducts'

function CartBar() {
    return (
        <div className="cartbar">
            <div className="cartbar-title">
                <p>YOUR BAG</p>
            </div>
            <div className="cartbar-product">
                <CartProducts/>
            </div>
            <div className="cartbar-subtotal">
                <div className="cartbar-subtotal--estimated">
                    <p>Estimated Total</p>
                    <strong>$67.45</strong>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default CartBar
