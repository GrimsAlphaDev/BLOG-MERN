import { BlogItem, Button, Gap } from "../../components";
import MainApp from "../MainApp";
import "./home.scss";

export default function Home() {
    return (
        <MainApp>
            <div className="home-page-wrapper">
                <div className="create-wrapper">
                    <Button title="create blog" to="/create-blog" />
                </div>
                <Gap height={20} />
                <div className="content-wrapper">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
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
