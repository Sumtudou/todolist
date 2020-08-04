import React, { Component } from 'react'

class ListItem extends Component {

    deleteItem = () => {
        this.props.removeItem(this.props.index)
    }

    render() {
        return (
            <div>
                <span>
                    <label>{this.props.value}</label>
                    <button onClick={this.deleteItem}> X </button>
                </span>
            </div>
        )
    }

}

export default ListItem