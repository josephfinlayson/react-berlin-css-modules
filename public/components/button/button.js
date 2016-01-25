import React, {PropTypes} from 'react'
import counter from '../../stores/example-store'
import styles from './button.css!';

const Test = (props) => {

    return <div className={styles.button}>
        <div className={styles.text}>
            {props.children || 'default button text'}
        </div>

        <div className={styles.icon} ></div>

    </div>

};


export default Test
