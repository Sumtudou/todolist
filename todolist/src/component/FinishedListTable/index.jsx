import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'

class FinishedListTable extends Component {
    removeItem = (index) => {
        this.props.removeListItem(index)
    }

    changeMark = (index) => {
        this.props.changeItemMark(index)
    }

    render() {
        let markedItems =[]
        this.props.listItems.forEach((element, index) => {
            element.index = index
            markedItems.push(element) 
        });
        markedItems = markedItems.filter(item => item.isMark === true)
        return (
            <div>
                {
                    markedItems.map((item) =>
                        <ListItem
                            key={item.index}
                            value={item.content}
                            isMark={item.isMark}
                            index={item.index}
                            removeItem={this.removeItem}
                            changeMark={this.changeMark}
                        />)
                }
            </div>
        )
    }

}

const mapStateToPorps = (state) => {
    return {
        listItems: state.listItems
    }
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


export default connect(mapStateToPorps, mapDispatchToProps)(FinishedListTable)