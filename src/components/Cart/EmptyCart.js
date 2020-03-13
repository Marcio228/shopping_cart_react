import React from 'react';

function EmptyCart(props) {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>your cart currently empty</h1>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;
