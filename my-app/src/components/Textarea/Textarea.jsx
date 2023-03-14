import React from "react";

import styles from './Textarea.module.css'

class Textarea extends React.Component {

    render() {
        return (
            <>
                <label htmlFor={this.props.name} className={styles.textarea}>
                    {this.props.name}
                    <textarea form='form' type="text" placeholder={this.props.name} rows="7" >{this.props.text}</textarea>
                </label>
            </>
        )
    }
}

export default Textarea;