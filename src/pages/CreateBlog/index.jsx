import MainApp from "../MainApp";
import { Button, Gap, Input, Textarea, Upload } from "../../components";
import "./createBlog.scss";

export default function CreateBlog() {
    return (
        <MainApp>
            <div className="blog-post">
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
