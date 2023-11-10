import axios from "axios";

export const setForm = (formType, formValue) => {
    return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
    return { type: "SET_IMG_PREVIEW", payload };
};

export const postToApi = (form) => {
    const data = new FormData();
    data.append("title", form.title);
    data.append("body", form.body);
    data.append("image", form.image);

    axios
        .post("http://localhost:4000/v1/blog/post", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            console.log("post success: ", res);
        })
        .catch((err) => {
            console.log("err: ", err);
            if (err.response) {
                console.log("Server responded with:", err.response.data);
            }
        });
};

export const updateToApi = (form, id) => {
    const data = new FormData();
    data.append("title", form.title);
    data.append("body", form.body);
    data.append("image", form.image);

    axios
        .put(`http://localhost:4000/v1/blog/post/${id}`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            console.log("update success: ", res);
        })
        .catch((err) => {
            console.log("err: ", err);
        });
};
