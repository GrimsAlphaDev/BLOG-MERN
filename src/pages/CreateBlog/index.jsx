import MainApp from "../MainApp";
import { Button, Gap, Input, Link, Textarea, Upload } from "../../components";
import "./createBlog.scss";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
    const navigate = useNavigate();
    return (
        <MainApp>
            <div className="blog-post">
                <Link title="kembali" onClick={
                    () => navigate(-1)
                } />
                <p className="title">Create New Blog Post</p>
                <Input label="Post Title" />
                <Upload />
                <Textarea />
                <Gap height={20} />
                <div className="button-action">
                    <Button title="Save" />
                </div>
            </div>
        </MainApp>
    );
}
