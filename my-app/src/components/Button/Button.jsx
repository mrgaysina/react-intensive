import React from "react";

import styles from './Button.module.css'

class Button extends React.Component {

    render() {
        return <button className={styles[this.props.name]} type={this.props.name}>{this.props.text}</button>
    }
}

export default Button;