export default function (state=null, action) {
    switch (action.type) {
        case 'FETCH_RESULTS':
            return action.payload
        default:
            return state
    }
}