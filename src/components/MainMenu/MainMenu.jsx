import { NavLink } from "react-router-dom"

import styles from "./main-menu.module.css"

const MainMenu = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.menu}>
                <li>
                    <NavLink className={styles.link} to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to="/movie">Movie</NavLink>
                </li>
            </ul>
            <hr />
        </div>
    )
}
export default MainMenu;