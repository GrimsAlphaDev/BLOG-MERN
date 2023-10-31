import { Footer, Header } from "../../components/molecule";
import "./mainApp.scss";

export default function MainApp({children}) {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="content-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    );
}
