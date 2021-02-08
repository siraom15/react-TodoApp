export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.data])
        case 'REMOVE_TODO':
            return state
        default:
            return state

    }
}