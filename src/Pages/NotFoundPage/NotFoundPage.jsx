import { Link } from "react-router-dom";


import HomePage from "Pages/HomaPage/HomePage";
import styles from "./not-found-page.module.css"

const NotFoundPage = () => {
    return (
        <div>
            <h1>Can not found this page </h1>
            <Link to="/">To home page</Link>
        </div>
    )
}
export default NotFoundPage;