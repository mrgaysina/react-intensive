import React from "react";

import styles from './Input.module.css';

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return  (
            <>
                <label htmlFor={this.props.name} class={styles.labelbox}>{this.props.name}
                    <input id={this.props.name} type={this.props.type} placeholder={this.props.name} />
                </label>
            </>
        )
    }
}

export default Input;