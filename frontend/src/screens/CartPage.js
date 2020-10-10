import React from 'react';

export default function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split('=')[1])
    : 1;
    return (
        <div>
            <h1>Cart Page</h1>
            <p>
                ADD TO CART : productID: {productId} Qty: {qty}
            </p>
        </div>
    )
}