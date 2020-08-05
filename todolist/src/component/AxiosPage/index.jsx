import React, { Component } from 'react'
import ListItem from '../ListItem'
import axiosUtil from '../../axiosUtil'

class AxiosPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            ListItems: [],
            error: ''
        }
    }

    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    onClick = () => {
        if (this.state.inputValue.trim() === '') {
            alert('Input Nothing!!')
            return
        }
        let item = {
            content: this.state.inputValue,
            status: false
        }
        axiosUtil.addNewTodoItem(
            item,
            (response) => {
                console.log(response)
                axiosUtil.getAllTodoItems((response) => {
                    this.setState({
                        ListItems: response.data
                    });
                }, (error) => { })
                this.setState({
                    inputValue: ''
                })
            },
            (error) => {
                console.log('Error happened in POST request', error);
                this.setState({
                    error: error
                })
            })
    }

    removeItem = (id) => {
        axiosUtil.deleteTodoItem(
            id,
            (response) => {
                console.log(response)
                axiosUtil.getAllTodoItems((response) => {
                    this.setState({
                        ListItems: response.data
                    });
                }, (error) => { })
            },
            (error) => {
                console.log('Error happened in DELETE request', error);
                this.setState({
                    error: error
                })
            }
        )
    }
    changeMark = (index) => {
        let item = this.state.ListItems.find((element) => element.id === index)
        item.status = !item.status
        axiosUtil.updateTodoItem(
            item,
            (response) => {
                console.log(response)

                axiosUtil.getAllTodoItems((response) => {
                    this.setState({
                        ListItems: response.data
                    });
                }, (error) => { })
            },
            (error) => {
                console.log('Error happened in PUT request', error);
                this.setState({
                    error: error
                })
            }
        )
    }



    render() {
        return (
            <div>
                <span>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                    <button onClick={this.onClick}>Add</button>
                </span>
                {
                    this.state.ListItems.map((item) =>
                        <ListItem
                            key={item.id}
                            value={item.content}
                            isMark={item.status}
                            index={item.id}
                            removeItem={this.removeItem}
                            changeMark={this.changeMark}
                        />)
                }
            </div>
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

export default AxiosPage