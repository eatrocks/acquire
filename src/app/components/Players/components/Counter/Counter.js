import styles from './Counter.css';
import join from 'join-classnames';

export default ({inc, dec, count, className}) => (
    <span className={join(styles.counter, className)}>
        <span>{count}</span>
        <div className={styles.buttonHolder}>
            <button className={styles.button} onClick={dec}>-</button>
            <button className={styles.button} onClick={inc}>+</button>
        </div>
    </span>
)
