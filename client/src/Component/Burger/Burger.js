import React from 'react';

const Burger = (props) => {
    const data = props.fetchdata[1]
    if (data) {
        return (
            <div className="container">
                <h1 className="text-center">{data.subItemsData.name}</h1>
                {data.subItemsData.subItems.map((element,index) => <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <p className="boxname">{element.name}</p>
                        <p className="boxprice">₹ {element.price}</p>
                        <p className="boxdes">{element.description}</p>
                        <button className="order" onClick={() => { props.addprop(element) }}>Order Now</button>
                    </div>
                    <div className="col-md-6">
                    <img className='h-25 mt-5' src={element.image} alt="burgerimage"></img>
                    </div>
                    </div>
                </div>
                )}
            </div>
        )
    } else {
        return (
            <div>Opps! no data is there</div>
        )
    }
}

export default Burger
