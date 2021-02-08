export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.data])
        case 'REMOVE_TODO':
            return state
        case 'DONE_TODO':
            return state.filter((todo) => todo.id !== action.data.id).concat(doneTodo(state, action))
        case 'UNDO_TODO':
            return state.filter((todo) => todo.id !== action.data.id).concat(undoTodo(state, action))
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.data.id)
        default:
            return state

    }
}

function doneTodo(state, action) {
    let index = state.findIndex((todo) => todo.id === action.data.id);
    let temp = state[index];
    temp.success = true;
    return temp;
}
function undoTodo(state, action) {
    let index = state.findIndex((todo) => todo.id === action.data.id);
    let temp = state[index];
    temp.success = false;
    return temp;
}