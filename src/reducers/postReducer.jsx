export default function (state = {}, action) {
    switch (action.type) {
        case "LOAD_POST":
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state;
    }
}