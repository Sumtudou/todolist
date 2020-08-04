import axios from 'axios'

export default {
    axiosGET: (__this) => {
        const _this = __this;
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
            .then(function (response) {
                _this.setState({
                    ListItems: response.data
                });
            })
            .catch(function (error) {
                console.log('Error happened in GET request', error);
                _this.setState({
                    error: error
                })
            })
    },
    axiosPOST: (postObject, successCallBack, errorCallBack) => {
        axios.post('https://5e9ec500fb467500166c4658.mockapi.io/todos', postObject)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    },
    axiosPUT: (id, postObject, successCallBack, errorCallBack) => {
        axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + id,postObject)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })
    },
    axiosDELETE: (id, successCallBack, errorCallBack) => {
        axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/' + id)
            .then(function (response) {
                successCallBack(response)
            })
            .catch(function (error) {
                errorCallBack(error)
            })

    }
}
