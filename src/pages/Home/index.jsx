import { useEffect } from "react";
import { BlogItem, Button, Gap } from "../../components";
import MainApp from "../MainApp";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/Redux/action";

export default function Home() {
    const {dataBlog} = useSelector((state) => state.homeReducer);
    const dispatch = useDispatch();

    // console.log("state Global: ", dataBlogs);
    useEffect(() => {
        dispatch(setDataBlog());
    }, [dispatch]);
    
    return (
        <MainApp>
            <div className="home-page-wrapper">
                <div className="create-wrapper">
                    <Button title="create blog" to="/create-blog" />
                </div>
                {/* <p>{name}</p> */}
                <Gap height={20} />
                <div className="content-wrapper">
                    {dataBlog.map((blog) => {
                        return (
                            <BlogItem
                                key={blog._id}
                                image={`http://localhost:4000/${blog.image}`}
                                title={blog.title}
                                name={blog.author.name}
                                date={blog.createdAt}
                                body={blog.body}
                            />
                        );
                    })}
                </div>
                <div className="pagination">
                    <Button title="Previous" />
                    <Gap width={20} />
                    <Button title="Next" />
                </div>
                <Gap height={20} />
            </div>
        </MainApp>
    );
}
