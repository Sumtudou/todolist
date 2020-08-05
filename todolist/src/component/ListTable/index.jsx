import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'

class ListTable extends Component {

    removeItem = (index) => {
        this.props.removeListItem(index)
    }

    changeMark = (index) => {
        this.props.changeItemMark(index)
    }

    render() {
        return (
            <div>
                {
                    this.props.listItems.map((item, index) =>
                        <ListItem
                            key={index}
                            value={item.content}
                            isMark={item.status}
                            index={index}
                            removeItem={this.removeItem}
                            changeMark={this.changeMark}
                        />)
                }
            </div>
        )
    }

}

const mapStateToPorps = (state) => {
    return { listItems: state.listItems }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListItem: (index) => dispatch({
            type: 'REMOVE',
            index: index
        }),
        changeItemMark: (index) => dispatch({
            type: 'MARK',
            index: index
        })
    }
}


export default connect(mapStateToPorps, mapDispatchToProps)(ListTable)

