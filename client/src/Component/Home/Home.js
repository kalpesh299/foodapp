import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className=" col-lg-8 offset-lg-1 d-flex justify-content-between mt-5">
            {props.fetchdata.map((parentelement, index) => {
                return index === 0 ?
                    <NavLink className="pizzaa" to='/pizza'><img className="pizza" src={parentelement.image} alt='pizza'/><p className="name">{parentelement.name}</p></NavLink>
                    :
                    <NavLink className="burgerr" to='/burger'><img className="burger" src={parentelement.image} alt='burger'/><p className="name">{parentelement.name}</p></NavLink>
            }
            )}
        </div>
    )
}

export default Home
