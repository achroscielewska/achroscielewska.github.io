const initState = {
    pending: false,
    hasError: false,
    items: []
};

const toDoReducer = (state = initState, action) => {

    const newToDo = {
        title: action.title,
        tags: [
            {priority: action.priority},
            {finished: false}
            ]
    }


    switch (action.type) {
        case 'ADD_TO_DO':
            return {
                ...state,
                items: [...state.items, newToDo]
            }
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