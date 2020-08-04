import React from 'react'
import { Link } from 'react-router-dom'
 
class Menu extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" style={{color: 'white'}}>All List Page</Link><span> | </span>
                <Link to="/finish" style={{color: 'white'}}>Finished List Page</Link>
            </div>
        )
    }
 
}
export default Menu