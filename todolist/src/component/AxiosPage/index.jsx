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
        let item = {
            content: this.state.inputValue,
            status : true
        }
        axiosUtil.axiosPOST(this,
            item,
            (response) => {
                console.log(response)
                axiosUtil.axiosGET(this)
                this.state.inputValue = ''
            },
            (error) => {
                console.log('Error happened in POST request', error);
                this.setState({
                    error: error
                })
            })
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
                            index={parseInt(item.id)}
                        />)
                }
            </div>
        )
    }

    componentDidMount() {
        axiosUtil.axiosGET(this)
    }

}

export default AxiosPage