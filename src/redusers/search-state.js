export const searchState = (state = {word: ''}, action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH':
            return {...state, word: action.payload}
        default:
            return state
    }
}