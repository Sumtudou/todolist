

const payload = {
    listItems: []
}
export default (state = payload, action) => {
    switch (action.type) {
        case 'ADD': {
            console.log('ADD');
            const item = {
                content: action.inputValue,
                status: false
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
            console.log('MARK ' + action.index);
            console.log('MARK ' + state.listItems[action.index].status);
            state.listItems[action.index].status = !state.listItems[action.index].status
            console.log('MARK ' + state.listItems[action.index].status);
            return {
                listItems: [...state.listItems]
            }
        }
        case 'SYNC': {
            console.log('action.listItems', action.listItems);
            return {
                listItems: [...action.listItems]
            }
        }

        default:
            return state;
    }
}