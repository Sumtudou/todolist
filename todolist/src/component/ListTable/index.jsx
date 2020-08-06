import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'
import { List } from 'antd';

class ListTable extends Component {

    removeItem = (index) => {
        this.props.removeListItem(index)
    }

    changeMark = (index) => {
        this.props.changeItemMark(index)
    }

    render() {
        this.props.listItems.map((item, index) => item.index = index)
        return (
            <div>
                <List
                    size="large"
                    bordered
                    dataSource={this.props.listItems}
                    renderItem={item => <List.Item bordered>
                        <ListItem
                            key={item.index}
                            value={item.content}
                            isMark={item.status}
                            index={item.index}
                            removeItem={this.removeItem}
                            changeMark={this.changeMark}
                        />
                    </List.Item>}
                />
            </div>

        )
    }

}

const mapStateToPorps = (state) => {
    return { listItems: state.todoList.listItems }
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

