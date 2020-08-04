import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'

class ListTable extends Component {

    removeItem = (index) => {
        this.props.removeListItem(index)
        this.forceUpdate()
    }

    render() {
        const initArray = [...Array(this.props.listItems.length).keys()]
        return (
            <div>
                {
                    initArray.map(key => <ListItem key={key} value={this.props.listItems[key]} index={key} removeItem={this.removeItem} />)
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

