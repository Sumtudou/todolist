import React from 'react'
import { Link } from 'react-router-dom'
 
class Menu extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" style={{color: 'white'}}>All List Page</Link><span> | </span>
                <Link to="/finished" style={{color: 'white'}}>Finished List Page</Link><span> | </span>
                <Link to="/axios" style={{color: 'white'}}>Axios Page</Link>
            </div>
        )
    }
 
}
export default Menu