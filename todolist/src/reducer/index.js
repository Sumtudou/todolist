

const payload = {
    listItems: []
}
export default (state = payload, action) => {
    switch (action.type) {
        case 'ADD': {
            console.log('ADD');
            const item = {
                content: action.inputValue,
                isMark: false
            }
            return {
                listItems: [...state.listItems, item]
            }
        }
        case 'REMOVE': {
            console.log('REMOVE');
            state.listItems.splice(action.index, 1)
            return {
                listItems: [...state.listItems]
            }
        }
        case 'MARK': {
            state.listItems[action.index].isMark = !state.listItems[action.index].isMark
            return {
                listItems: [...state.listItems]
            }
        }
        default:
            return state;
    }
}