import { useNavigate } from "react-router-dom";
import "./header.scss";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <p className="logo-app">MERN-BLOG</p>
            <p
                className="menu-item"
                onClick={() => navigate("/login", { replace: "true" })}
            >
                Logout
            </p>
        </div>
    );
}
