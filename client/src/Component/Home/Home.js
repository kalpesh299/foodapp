import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="">
            {props.fetchdata.map((parentelement, index) => {
                return index === 0 ?
                    <NavLink className="" to='/pizza'><img className="" src={parentelement.image} alt=''/><p>{parentelement.name}</p></NavLink>
                    :
                    <NavLink className="" to='/burger'><img className="" src={parentelement.image} alt=''/><p>{parentelement.name}</p></NavLink>
            }
            )}
        </div>
    )
}

export default Home
