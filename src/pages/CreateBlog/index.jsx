import MainApp from "../MainApp";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postToApi, setForm, setImgPreview } from "../../config/Redux/action";

export default function CreateBlog() {
    const navigate = useNavigate();

    const { form, imgPreview } = useSelector(
        (state) => state.createBlogReducer
    );
    const { title, body } = form;
    const dispatch = useDispatch();

    const onSubmit = () => {
        postToApi(form);
        // clear value
        dispatch(setForm("title", ""));
        dispatch(setForm("body", ""));
        dispatch(setForm("image", ""));
        dispatch(setImgPreview(""));
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
                <p className="title">Create New Blog Post</p>
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
                    <Button title="Save" onClick={onSubmit} />
                </div>
            </div>
        </MainApp>
    );
}
