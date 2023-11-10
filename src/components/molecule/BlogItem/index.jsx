import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../../atoms";
import "./blogItem.scss";

export default function BlogItem({ image, title, name, date, body, id, onDelete }) {
    const navigation = useNavigate();

    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <div className="title-wrapper">
                    <p className="title">{title}</p>
                    <div className="edit-wrapper">
                        <p
                            className="edit"
                            onClick={() => navigation(`/create-blog/${id}`)}
                        >
                            Edit
                        </p>
                        | <p className="delete" onClick={() => onDelete(id)}>Delete</p>
                    </div>
                </div>
                <p className="author">
                    {name} - {date}
                </p>
                <p className="body">{body}</p>
            </div>
            <Gap height={20} />
            <Button
                title="View Detail"
                className="buttonCustom"
                to={`/detail-blog/${id}`}
                customStyle={{ width: "75%"}}
                style={{ marginLeft: "12%", marginRight: "12%", marginTop: "25px"}}
            />
            <Gap height={20} />
        </div>
    );
}
