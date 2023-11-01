import { RegisterBg } from "../../assets";
import MainApp from "../MainApp";
import './detailBlog.scss';

export default function Home(){
    return (
        <MainApp>
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={RegisterBg} alt="thumb" />
                <p className="blog-title">Title Blog</p>
                <p className="blog-author">Author - Date Post</p>
                <p className="blog-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit excepturi amet facere, sunt et maiores accusamus nihil! Dolores repellat fugit odit totam enim, voluptate quibusdam in nisi voluptatem placeat rem molestiae reprehenderit accusantium consequuntur nobis ratione nam laboriosam, blanditiis quis! Excepturi doloremque doloribus sequi dolorum amet, magnam, obcaecati velit ad ipsum eos eius dolor dicta alias odit porro veniam minima cumque quo. Consequatur commodi veritatis vel iste eveniet porro vitae ad molestias odio, natus quis ex quibusdam esse consequuntur aliquam doloremque sapiente nemo voluptatum corporis cum maxime? Atque quia expedita, exercitationem consectetur deleniti, inventore similique, sit esse voluptas itaque aut! Earum est molestias ipsam magni officiis! Voluptates laudantium dolore ipsa doloribus possimus unde, natus quod fugiat esse voluptatem. Dolorem doloribus nulla voluptates tenetur alias tempora mollitia consequatur, ut qui minima excepturi iure facere cupiditate, atque, laborum architecto. Ad recusandae aspernatur incidunt accusantium quisquam aut, nam, dolor optio repellendus deserunt earum consectetur corrupti tempore quos, maxime nihil laboriosam perferendis doloribus explicabo eum cupiditate veritatis maiores. Sint vitae dolorem nam ad suscipit? Praesentium repudiandae assumenda, debitis modi quod itaque minima expedita ad, officia adipisci porro illum voluptatibus, deleniti neque sed laboriosam corrupti voluptas provident incidunt quis voluptatem! Est quas mollitia delectus excepturi!</p>
            </div>
        </MainApp>
    );
}