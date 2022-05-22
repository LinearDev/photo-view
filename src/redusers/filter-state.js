export const filterState = (state = {filter: ''}, action) => {
    switch (action.type) {
      case "CHANGE_FILTER":
        return {...state, filter: action.payload}
      default:
        return state
    }
}