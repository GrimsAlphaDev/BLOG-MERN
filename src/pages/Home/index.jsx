import { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import MainApp from "../MainApp";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/Redux/action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import Swal from "sweetalert2";
import sweetAlert from "../../config/Redux/action/alert";

export default function Home() {
    const [counter, setCounter] = useState(1);
    const { dataBlog, page } = useSelector((state) => state.homeReducer);
    const dispatch = useDispatch();

    const fetchData = async () => {
        // Fetch data based on the current counter value
        await dispatch(setDataBlog(counter));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, counter]);

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1);
    };

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    };


    const confirmDelete = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Apakah yakin ingin menghapus post ini ?",
            buttons: [
                {
                    label: "Ya",
                    onClick: () => {
                        // console.log("Clicked Yes");
                        axios
                            .delete(`http://localhost:4000/v1/blog/post/${id}`)
                            .then((res) => {
                                fetchData();
                                sweetAlert({ option: "delete", type: "success", text: "Post berhasil dihapus" });
                            })
                            .catch((err) => {
                                console.log("Error = ", err);
                                sweetAlert({ option: "batal", type: "error", text: "Post gagal dihapus" });
                            });
                    },
                },
                {
                    label: "Tidak",
                    onClick: () => sweetAlert({ option: "batal", type: "info", text: "Post tidak jadi dihapus" }),
                },
            ],
        });
    };

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
                                id={blog._id}
                                onDelete={confirmDelete}
                            />
                        );
                    })}
                </div>
                <div className="pagination">
                    {/* <Button onClick={previous} title="Previous" /> */}
                    <button className="button" onClick={previous}>
                        Previous
                    </button>
                    <Gap width={20} />
                    <p className="text-page">
                        {page.currentPage} / {page.totalPage}
                    </p>
                    <Gap width={20} />
                    {/* <Button onClick={next} title="Next" /> */}
                    <button className="button" onClick={next}>
                        Next
                    </button>
                </div>
                <Gap height={20} />
            </div>
        </MainApp>
    );
}
