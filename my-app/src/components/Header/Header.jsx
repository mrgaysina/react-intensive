import React from "react";

import styles from './Header.module.css'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div class={styles.header}>
                СОЗДАНИЕ АНКЕТЫ
            </div>
        )
    }
}

export default Header;