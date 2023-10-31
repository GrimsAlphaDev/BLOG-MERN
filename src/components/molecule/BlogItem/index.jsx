import { RegisterBg } from "../../../assets";
import './blogItem.scss'

export default function BlogItem() {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">TItle BLog</p>
                <p className="author">Author - Date Post</p>
                <p className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet optio harum placeat ipsum, impedit eum itaque nulla voluptas! Suscipit qui libero accusamus velit perspiciatis voluptatibus, quibusdam voluptatum autem fugit ullam illum dolorum. Vero nulla ex deserunt molestias hic nesciunt, ad labore aperiam veniam veritatis mollitia ducimus ipsam non quam porro aspernatur iste totam corrupti nam sed facilis animi, inventore quisquam! Provident quam sunt facilis! Eligendi ipsum inventore corrupti ab esse corporis est sequi, laborum quibusdam placeat nesciunt veniam voluptatum accusantium architecto quos iste id unde beatae recusandae repellendus tempore aliquid! Dolore consequuntur earum excepturi officiis accusamus sed officia quam!</p>
            </div>
        </div>
    );
}
