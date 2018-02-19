const initState = {
    pending: false,
    hasError: false,
    items: []
};

const toDoReducer = (state = initState, action) => {

    const addNewTask = () => {
        const {title, priority} = action;

        const newToDo = {
            id: Date(),
            title: title,
            priority: priority,
            isFinished: false
        };

        return {
            ...state,
            items: [...state.items, newToDo]
        };
    };

    const finishTask = () => {
        const {id} = action;

        const updatedState = {...state};
        const updatedStateItems = [...updatedState.items];
        const newItemIndex = updatedStateItems.findIndex(item => item.id === id);
        const newItem = {...updatedStateItems[newItemIndex]};

        newItem.isFinished = !newItem.isFinished;

        updatedStateItems[newItemIndex] = newItem;

        updatedState.items = updatedStateItems;

        return updatedState;
    };

    const removeTask = () => {
        const {id} = action;

        const updatedStateRemove = {...state};
        const updatedStateItemsRemove = [...updatedStateRemove.items];

        const itemToRemoveIndex = updatedStateItemsRemove.findIndex(item => item.id === id);

        const itemToRemove = [
            ...updatedStateItemsRemove.slice(0, itemToRemoveIndex),
            ...updatedStateItemsRemove.slice(itemToRemoveIndex + 1)
        ];

        updatedStateRemove.items = itemToRemove;

        return updatedStateRemove;
    };

    switch (action.type) {
        case 'ADD_TO_DO':
            return addNewTask();
        case 'FINISHED':
            return finishTask();
        case 'REMOVE':
            return removeTask();
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