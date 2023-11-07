import { useNavigate, useParams } from "react-router-dom";
import MainApp from "../MainApp";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const navigation = useNavigate();

    const [data, setData] = useState({});

    const { id } = useParams();

    useEffect(() => {

        axios
            .get(`http://localhost:4000/v1/blog/post/${id}`)
            .then((res) => {
                console.log("data api detail blog: ", res.data.data);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    }, [id]);

    if(data.author){
        return (
            <MainApp>
                <div className="detail-blog-wrapper">
                    <img
                        className="img-cover"
                        src={`http://localhost:4000/${data.image}`}
                        alt="thumb"
                    />
                    <p className="blog-title">{data.title}</p>
                    <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                    <p className="blog-body">{data.body}</p>
                    <Gap height={20} />
                    <Link title="Kembali Ke Home" onClick={() => navigation("/")} />
                </div>
            </MainApp>
        );
    }
    return <p>Loading ....</p>
}
