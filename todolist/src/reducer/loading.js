const payload = {
    loading: false
}
export default (state = payload, action) => {
    switch (action.type) {
        case 'CHANGE':
            console.log('CHANGE');
            state.loading = !state.loading
            console.log(state.loading);
            return {...state}
        default:
            return state;
    }
}