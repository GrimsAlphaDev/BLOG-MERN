import axios from "axios";

export const getDataBlog = (id) => {
    const url = 'http://localhost:4000/v1/blog/post/' + id;
    return (dispatch) => {
        axios.get(url)
            .then((result) => {
                const responseApi = result.data;
                dispatch({
                    type: "GET_DATA_BLOG",
                    payload: responseApi.data,
                });
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

};
