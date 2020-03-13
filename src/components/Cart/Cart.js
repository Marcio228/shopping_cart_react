import React, {Component} from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import {ProductConsumer} from "../../Context";
import CartTotals from "./CartTotals";
class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="our" title="cart"/>
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>
                        );

                    } else {
                        return <EmptyCart/>;
                    }
                }
                }
            </ProductConsumer>
        );
    }
}

export default Cart;