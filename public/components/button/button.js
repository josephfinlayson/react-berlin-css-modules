import React, {PropTypes} from 'react'
import counter from '../../stores/example-store'
import styles from './button.css!';

const Button = (props) => {

    return <div className={styles.button}
                onClick={props.onClick}>
            {props.children || 'default button text'}
        <div className={styles.icon} ></div>
    </div>

};


export default Button
