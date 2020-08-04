import React, { Component } from 'react'

class ListItem extends Component {

    deleteItem = () => {
        this.props.removeItem(this.props.index)
    }
    changeMark = () => {
        this.props.changeMark(this.props.index)
    }

    render() {
        return (
            <div>
                <span>
                    <label
                        style={{ textDecorationLine: this.props.isMark ? 'line-through' : 'none' }}
                        onClick={this.changeMark}
                    >
                        {this.props.value}
                    </label>
                    <button onClick={this.deleteItem}> X </button>
                </span>
            </div>
        )
    }

}

export default ListItem