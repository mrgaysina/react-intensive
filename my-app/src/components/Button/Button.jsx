import React from "react";

import styles from './Button.module.css'

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return <button className={styles[this.props.name]}>{this.props.text}</button>
    }
}

export default Button;