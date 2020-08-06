import React, { Component } from 'react'
import { CloseCircleTwoTone } from '@ant-design/icons'
import { Row, Col, Button } from 'antd';

class ListItem extends Component {

    deleteItem = () => {
        this.props.removeItem(this.props.index)
    }
    changeMark = () => {
        this.props.changeMark(this.props.index)
    }

    render() {
        return (
            <Row>
                <Col span={14} offset={5}>
                    <label
                        style={{ textDecorationLine: this.props.isMark ? 'line-through' : 'none' }}
                        onClick={this.changeMark}
                    >
                        {this.props.value}
                    </label>
                </Col>
                <Col span={1}>
                    <Button shape="circle" onClick={this.deleteItem}><CloseCircleTwoTone /></Button>
                </Col>
            </Row>
        )
    }

}

export default ListItem