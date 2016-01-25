import React from 'react'
import styles  from '../styles.css!';
import Button from '../components/button/button'
import Animator from '../components/animator/animator.js';

export default class Home extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return <div className={styles.home}>
            <h2 className={styles.header}>CSS Modules demo</h2>
            <div className={styles.wrapper}>
                <Button />
            </div>
        </div>
    }
    //<Animator />
}
