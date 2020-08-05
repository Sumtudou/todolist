const payload = {
    loading: false
}
export default (state = payload, action) => {
    switch (action.type) {
        case 'CHANGE':
            state.loading = !state.loading
            return [...state]
        default:
            return state;
    }
}