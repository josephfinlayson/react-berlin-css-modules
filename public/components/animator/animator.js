import React, {PropTypes} from 'react'
import counter from '../../stores/example-store'
import {observer} from 'mobservable-react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import transitions from './transitions.css!';
import styles from './animator.css!';
import Button from '../button/button'

class Animator extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        let items = [];

        for (let i = 0; i < counter.value; i++) {
            items.push(<div key={i}
                            className={styles.box}>{i}</div>)
        }

        return (<div className={styles.animator}>
                <Button onClick={() => counter.value++}>++</Button>
                <ReactCSSTransitionGroup
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionName={transitions}>
                    {items}
                </ReactCSSTransitionGroup>
                <Button onClick={() => counter.value--}>--</Button>
            </div>
        )
    }

}
;

export default observer(Animator)
