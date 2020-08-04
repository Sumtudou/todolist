

const payload = { listItems: [] }
export default (state = payload, action) => {
    switch (action.type) {
        case 'ADD': {
            console.log('ADD');
            return {
                listItems: [...state.listItems, action.inputValue]
            }
        }
        case 'REMOVE': {
            console.log('REMOVE');
            state.listItems.splice(action.index, 1)
            return {
                listItems: [...state.listItems]
            }
        }
        default:
            return state;
    }
}