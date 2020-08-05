import axios from 'axios'
import store from './store'

const BASE_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos"
export default {
    getAllTodoItems: (successCallBack, errorCallBack) => {
        axios.get(BASE_URL)
            .then(function (response) {
                successCallBack(response)
                store.dispatch({type:'SYNC', listItems: response.data})
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    },
    addNewTodoItem: (postObject, successCallBack, errorCallBack) => {
        axios.post(BASE_URL, postObject)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    },
    updateTodoItem: (postObject, successCallBack, errorCallBack) => {
        axios.put(`${BASE_URL}/${postObject.id}`, postObject)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    },
    deleteTodoItem: (id, successCallBack, errorCallBack) => {
        axios.delete(BASE_URL + id)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    }
}
