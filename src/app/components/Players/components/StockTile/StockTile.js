import styles from '../../Players.css';
import Counter from '../Counter/Counter.js';

export default ({ count, available = 0, title, playerInc, playerDec, bankInc, bankDec }) => (
    <span className={styles.container}>
        <Counter className={styles.counter} inc={playerInc} dec={playerDec} count={count} />
        <span className={styles.title}>{title}</span>
        <Counter className={styles.counter} inc={bankInc} dec={bankDec} count={available} />
    </span>
)
