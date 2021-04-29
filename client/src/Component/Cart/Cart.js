import React from 'react'

const Cart = (props) => {
    if (props.cartdata.length !== 0) {
        return (
            <div>
                {   
                    props.cartdata.map((value, index) =>
                    <div className='container mt-5'>
                        <div className="row">
                            <div classname="col-md-6">
                                <p className="boxname">{value.name}</p>
                                <p className="boxprice">₹{value.price}</p>
                                <p className="boxdes">{value.description}</p>
                                <button className="order" onClick={() => props.deleteItem(value)}>Remove</button>
                            </div>
                            <div className="col-md-6">
                                <img className="h-25 mt-5 " alt="food images" src={value.image} />
                            </div>
                        </div>
                        </div>
                    )
                }
                <div className="col-2 mx-auto">
                <button className="btn btn-success" onClick={props.clearCart}>Place Order</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cartempty">Cart is empty</div>
        )
    }
}

export default Cart
