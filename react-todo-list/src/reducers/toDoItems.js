const initState = [];

const toDo = (state = initState, action) => {
    const newToDo = {
        title: action.title,
        tags: []

    }

    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, newToDo];

        default:
            return state;
    }
};

export default toDo;