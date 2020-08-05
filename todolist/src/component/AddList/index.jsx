import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col,Input, Button } from 'antd';

class AddList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    onClick = () => {
        console.log(this.state.inputValue);
        if (this.state.inputValue.trim() === '') {
            alert('Input Nothing!!')
            return
        }
        this.props.addListItem(this.state.inputValue);
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <Row>
                <Col span={7} offset={8}>
                    <Input placeholder="Basic usage" value={this.state.inputValue} onChange={this.handleChange} />
                </Col>
                <Col span={1}>
                    <Button type="primary" onClick={this.onClick} block>Add</Button>
                </Col>
            </Row>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        addListItem: (value) => dispatch({
            type: 'ADD',
            inputValue: value
        })
    }
}

export default connect(null, mapDispatchToProps)(AddList)