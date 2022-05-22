import { combineReducers, createStore } from "redux"
import { dataReduser } from "./data-reduser"
import { filterState } from "./filter-state"
import { searchState } from "./search-state"

const rootReduser = combineReducers({
    db: dataReduser,
    filter: filterState,
    search: searchState
})

export const store = createStore(rootReduser)