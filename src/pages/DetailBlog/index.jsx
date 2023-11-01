import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import MainApp from "../MainApp";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";

export default function Home() {
    const navigation = useNavigate();
    return (
        <MainApp>
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={RegisterBg} alt="thumb" />
                <p className="blog-title">Title Blog</p>
                <p className="blog-author">Author - Date Post</p>
                <p className="blog-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Impedit excepturi amet facere, sunt et maiores accusamus
                    nihil! Dolores repellat fugit odit totam enim, voluptate
                    quibusdam in nisi voluptatem placeat rem molestiae
                    reprehenderit accusantium consequuntur nobis ratione nam
                    laboriosam, blanditiis quis! Excepturi doloremque doloribus
                    sequi dolorum amet, magnam, obcaecati velit ad ipsum eos
                    eius dolor dicta alias odit porro veniam minima cumque quo.
                    Consequatur commodi veritatis vel iste eveniet porro vitae
                    ad molestias odio, natus quis ex quibusdam esse consequuntur
                    aliquam doloremque sapiente nemo voluptatum corporis cum
                    maxime? Atque quia expedita, exercitationem consectetur
                    deleniti, inventore similique, sit esse voluptas itaque aut!
                    Earum est molestias ipsam magni officiis! Voluptates
                    laudantium dolore ipsa doloribus possimus unde, natus quod
                
                </p>
                <Gap height={20}/>
                <Link title="Kembali Ke Home" onClick={() => navigation("/")} />
            </div>
        </MainApp>
    );
}
