import React from 'react';
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import './reducer';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket },dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* <CurrencyFormat/> */}
                <p>
                    {/* Part of the homework*/}
                    Subtotal ({basket?.length} items): <strong>${getBasketTotal(basket)}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order 
                    contains a gift 
                </small>  
            {/* decimalScale={2} */}
            {/* value={0}  Part of the homework */}
            {/* displayType={"text"}
            thousandsSeparator={true}
            prefix={"$"} */}
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal
