import React from "react";

import styles from './Input.module.css';

class Input extends React.Component {

    render() {
        const {name, type, pattern} = this.props
        return  (
            <>
                <label htmlFor={name} class={styles.labelbox}>{name}
                    <input id={name} type={type} placeholder={name} />
                </label>
            </>
        )
    }
}

export default Input;