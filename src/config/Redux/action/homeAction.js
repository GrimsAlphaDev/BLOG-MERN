import axios from "axios";

export const setDataBlog = () => {
    return (dispatch) => {
        axios.get("http://localhost:4000/v1/blog/posts?page=1&perPage=5")
            .then((result) => {
                const responseApi = result.data;
                dispatch({
                    type: "UPDATE_DATA_BLOG",
                    payload: responseApi.data,
                });
            })
            .catch((error) => {
                console.log("error: ", error);
            });
    };

};
