import axios from "axios";

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue};
}

export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload};
}

export const postToApi = (form) => {

    const data = new FormData();
        data.append("title", form.title);
        data.append("body", form.body);
        data.append("image", form.image);


    axios.post('http://localhost:4000/v1/blog/post', form, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then ((res) => {
        console.log('post success: ', res);

    })
    .catch((err) => {
        console.log('err: ', err);
    })
}