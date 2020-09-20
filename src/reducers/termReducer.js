export default function (state=null, action) {
    switch (action.type) {
        case 'SEARCH_TERM':
            console.log(action.term, action)
            return action.term
        default:
            return state
    }
}