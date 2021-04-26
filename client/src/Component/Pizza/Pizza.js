import React from 'react'

const Pizza = (props) => {
    const data = props.fetchdata[0]
    if (data) {
        return (
            <div className="">
                <h1 className="">{data.subItemsData.name}</h1>
                {data.subItemsData.subItems.map((element, index) => <div className="">
                    <div className="">
                        <p className="">{element.name}</p>
                        <p className="">₹ {element.price}</p>
                        <p className="">{element.description}</p>
                        <button className="" onClick={() => { props.addprop(element) }}>Order Now</button>
                    </div>
                    <div className="">
                    <img src={element.image} alt=""></img>
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

export default Pizza
