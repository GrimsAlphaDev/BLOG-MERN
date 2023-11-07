import { useNavigate } from "react-router-dom";
import MainApp from "../MainApp";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataBlog } from "../../config/Redux/action";
import { useParams } from "react-router-dom";

export default function Home() {
    const navigation = useNavigate();

    const { id } = useParams();

    const { dataBlog } = useSelector((state) => state.detailReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataBlog(id));
    }, [dispatch, id]);

    return (
        <MainApp>
            <div className="detail-blog-wrapper">
                <img
                    className="img-cover"
                    src={`http://localhost:4000/${dataBlog.image}`}
                    alt="thumb"
                />
                <p className="blog-title">{dataBlog.title}</p>
                <p className="blog-author">
                    {dataBlog.author.name ? dataBlog.author.name : "loading"}-{" "}
                    {dataBlog.date}
                </p>
                <p className="blog-body">{dataBlog.body}</p>
                <Gap height={20} />
                <Link title="Kembali Ke Home" onClick={() => navigation("/")} />
            </div>
        </MainApp>
    );
}
