
const initState = {
    id: 'id',
    title: 'title',
    description: 'description',
    img: 'img'
};


const details = (state = initState, action) => {
    console.log(action.id)

    const {id,title, description,img} = action;

    switch (action.type) {
        case 'SELECT_ITEM':
            return {
                ...state,
                id: id,
                title: title,
                description: description,
                img: img
            };

            console.log(state)

        default:
            return state;
    }
};

export default details;