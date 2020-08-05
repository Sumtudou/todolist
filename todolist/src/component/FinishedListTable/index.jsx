import React, { Component } from 'react'
import ListItem from '../ListItem'
import { connect } from 'react-redux'
import axiosUtil from '../../axiosUtil'
import { List } from 'antd';

class FinishedListTable extends Component {
    removeItem = (index) => {
        axiosUtil.deleteTodoItem(this.props.listItems[index].id, (response) => { }, (error) => { })
        this.props.removeListItem(index)
    }

    changeMark = (index) => {
        let item = this.props.listItems[index]
        axiosUtil.updateTodoItem({ ...item, status: !item.status }, (response) => {
            console.log("a  ", response);
            this.props.changeItemMark(index)
        }, (error) => { })
    }

    render() {
        let markedItems = []
        this.props.listItems.forEach((element, index) => {
            element.index = index
            markedItems.push(element)
        });
        markedItems = markedItems.filter(item => item.status === true)
        return (
            <List
                size="large"
                bordered
                dataSource={markedItems}
                renderItem={item => <List.Item>
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
        )
    }
    componentDidMount() {
        axiosUtil.getAllTodoItems((response) => {
            this.setState({
                ListItems: response.data
            });
        })
    }

}

const mapStateToProps = (state) => {
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


export default connect(mapStateToProps, mapDispatchToProps)(FinishedListTable)