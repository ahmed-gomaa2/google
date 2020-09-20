import {combineReducers} from "redux";
import searchTerm from "./termReducer";
import fetchSearchTermResultsReducer from "./fetchSearchTermResultsReducer";

export default combineReducers({
    searchTerm: searchTerm,
    searchResults: fetchSearchTermResultsReducer
})