import { RegisterBg } from "../../../assets";
import { Button, Gap } from "../../atoms";
import './blogItem.scss'

export default function BlogItem({image, title, name, date, body}) {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={image} alt="post" />
            <div className="content-detail">
                <p className="title">{title}</p>
                <p className="author">{name} - {date}</p>
                <p className="body">{body}</p>
            </div>
            <Gap height={20}/>
            <Button title="View Detail" to="/detail-blog"/>
        </div>
    );
}
