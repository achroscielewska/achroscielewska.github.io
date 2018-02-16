const initState = {
    pending: false,
    hasError: false,
    items: []
};

const toDoReducer = (state = initState, action) => {

    const newToDo = {
        id: Date(),
        title: action.title,
        priority: action.priority,
        finised: false

    }

    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                items: [...state.items, newToDo]
            }
        case 'FINISHED':
            const updatedState = {...state}
            const updatedStateItems = [...state.items]
            console.log(updatedStateItems)

            // const newItemIndex = updatedStateItems.findIndex(item => item.id === id);
            //
            // const newItem = {...updatedStateItems[newItemIndex]};
            //
            // newItem.finised = !newItem.finised
            //
            // updatedStateItems[newItemIndex] = newItem;
            //
            // return updatedState;

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