import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'

class ListTable extends Component {

    removeItem = (index) => {
        this.props.removeListItem(index)
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                {
                    this.props.listItems.map((item, index) => <ListItem key={index} value={item} index={index} removeItem={this.removeItem} />)
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
        })
    }
}


export default connect(mapStateToPorps, mapDispatchToProps)(ListTable)

