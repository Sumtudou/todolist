import React, {Component} from 'react'
import { connect } from 'react-redux';

class AddList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
      }

    onClick = () => {
        console.log(this.state.inputValue);
        if (this.state.inputValue.trim() === '') {
            alert('Input Nothing!!')
            return
        }
        this.props.addListItem(this.state.inputValue);
        this.setState({inputValue: ''})
    }

    render() {
        return (
            <div>
                <span>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button onClick={this.onClick}>Add</button>
                </span>
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return { 
        addListItem : (value) => dispatch({
            type: 'ADD',
            inputValue:value
        })
    }
}

export default connect(null,mapDispatchToProps)(AddList)