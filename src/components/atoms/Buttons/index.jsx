import { Link } from "react-router-dom";
import "./button.scss";

export default function Button({ title, customStyle ,  ...rest  }) {
    return (
        <Link {...rest}>
            <button className="button" style={customStyle}>{title}</button>
        </Link>
    );
}
