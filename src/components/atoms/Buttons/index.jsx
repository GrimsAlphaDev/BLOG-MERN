import { Link } from "react-router-dom";
import "./button.scss";

export default function Button({ title, ...rest }) {
    return (
        <Link {...rest}>
            <button className="button">{title}</button>
        </Link>
    );
}
