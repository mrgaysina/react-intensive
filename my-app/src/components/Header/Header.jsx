import React from "react";

import styles from './Header.module.css'

class Header extends React.Component {

    render() {
        return (
            <div className={styles.header}>
                СОЗДАНИЕ АНКЕТЫ
            </div>
        )
    }
}

export default Header;