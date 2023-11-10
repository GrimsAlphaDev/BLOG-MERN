import MainApp from "../MainApp";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postToApi, setForm, setImgPreview, updateToApi } from "../../config/Redux/action";
import { useEffect, useState } from "react";
import axios from "axios";
import sweetAlert from "../../config/Redux/action/alert";

export default  function CreateBlog() {
    const navigate = useNavigate();

    const { form, imgPreview } = useSelector(
        (state) => state.createBlogReducer
    );

    const { title, body } = form;
    const [isUpdate, setIsUpdate] = useState("Simpan");

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        // get params
        console.log("id Params:" ,id);  
        if (id) {
            setIsUpdate("Update");
            axios.get(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
                const data = res.data.data
                console.log('Hasil = ', data);
                dispatch(setForm("title", data.title));
                dispatch(setForm("body", data.body));
                dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
            })
            .catch(err => {
                console.log('Error = ', err);
            })
        } 
    }, [id, dispatch])

    const onSubmit = () => {

        if(isUpdate === "Update") {
            console.log("Update Data");
            updateToApi(form, id);
            
        } else {
            console.log("create Data");
            postToApi(form);
        }
        
        // clear value
        dispatch(setForm("title", ""));
        dispatch(setForm("body", ""));
        dispatch(setForm("image", ""));
        dispatch(setImgPreview(""));
        sweetAlert({ option: {isUpdate}, type: "success", text:  `${isUpdate} berhasil diupdate` });
    };

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        dispatch(setForm("image", file));
        dispatch(setImgPreview(URL.createObjectURL(file)));
    };

    return (
        <MainApp>
            <div className="blog-post">
                <Link title="kembali" onClick={() => navigate(-1)} />
                <p className="title">{isUpdate} New Blog Post</p>
                <Input
                    label="Post Title"
                    value={title}
                    onChange={(e) => dispatch(setForm("title", e.target.value))}
                />
                <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
                <Textarea
                    value={body}
                    onChange={(e) => dispatch(setForm("body", e.target.value))}
                />
                <Gap height={20} />
                <div className="button-action">
                    <Button title={isUpdate} onClick={onSubmit} />
                </div>
            </div>
        </MainApp>
    );
}
