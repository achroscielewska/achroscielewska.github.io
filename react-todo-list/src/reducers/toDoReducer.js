const initState = {
    pending: false,
    hasError: false,
    items: []
};

const toDoReducer = (state = initState, action) => {

    console.log(state)

    switch (action.type) {
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