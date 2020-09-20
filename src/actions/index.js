import axios from 'axios'
import {GoogleAPIKey} from "./keys";

export const searchTermPub = (term) => dispatch => {
    dispatch({
        type:'SEARCH_TERM',
        term
    })
}


export const fetchSearchResults = searchTerm => async dispatch => {
    const searchId = 'ae57b0dc93b1f1822';

    const results = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${GoogleAPIKey}&cx=${searchId}&q=${searchTerm}`)
    // await results.json()
    dispatch({
        type:'FETCH_RESULTS',
        payload: results
    })
}

