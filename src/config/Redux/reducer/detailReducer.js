const initialStateHome = {
    dataBlog: [],
};

const detailReducer = (state = initialStateHome, action) => {
    if (action.type === "GET_DATA_BLOG") {
        return {
            ...state,
            dataBlog: action.payload,
        };
    }

    return state;
};

export default detailReducer;
