const initState = {
    pending: false,
    hasError: false,
    items: []
};

const toDoReducer = (state = initState, action) => {

    const {id, title, priority } = action;

    const newToDo = {
        id: Date(),
        title: title,
        priority: priority,
        isFinished: false

    }

    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                items: [...state.items, newToDo]
            }
        case 'FINISHED':
            const updatedState = {...state}
            const updatedStateItems = [...updatedState.items]

            const newItemIndex = updatedStateItems.findIndex(item => item.id === id);

            const newItem = {...updatedStateItems[newItemIndex]};

            newItem.isFinished = !newItem.isFinished

            updatedStateItems[newItemIndex] = newItem;

            updatedState.items = updatedStateItems

            return updatedState;


        case "PENDING":
            return {...state, pending: true};
        case "ERROR":
            return {...state, hasError: true, pending: false};
        case "SUCCESS":
            return {...state, pending: false, items: action.items};

        default:
            return state;
    }

};

export {toDoReducer};