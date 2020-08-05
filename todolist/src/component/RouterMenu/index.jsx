import React from 'react'
import { Link } from 'react-router-dom'
import { Menu }  from 'antd'

class RouterMenu extends React.Component {
    render() {
        return (
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/" style={{ color: 'white' }}>All List Page</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/finished" style={{ color: 'white' }}>Finished List Page</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/axios" style={{ color: 'white' }}>Axios Page</Link></Menu.Item>
            </Menu>
        )
    }

}
export default RouterMenu