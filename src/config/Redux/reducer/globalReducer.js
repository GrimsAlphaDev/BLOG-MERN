
const initialState = {
    dataBlogs: [],
    name: "Alpha",
};

const globalReducer = (state = initialState, action) => {
    if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "Beta",
        };
    }
    return state;
};


export default globalReducer;