import React, { Component } from 'react'
import ListItem from '../ListItem'
import axios from 'axios'

class AxiosPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ListItems: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.ListItems.map((item) =>
                        <ListItem
                            key={item.id}
                            value={item.content}
                            isMark={item.status}
                            index={item.id}
                        />)
                }
            </div>
        )
    }

    componentDidMount() {
        const _this = this;
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then(function (response) {
                _this.setState({
                    ListItems: response.data
                });
            })
            .catch(function (error) {
                console.log('Error happened in GET request', error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }

}

export default AxiosPage