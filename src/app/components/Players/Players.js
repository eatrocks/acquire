import StockTile from './components/StockTile';
import styles from './Players.css';

// TODO left off trying to figure out why the available stock count is not passed down to the stock tile component
export default ( {players=[], stocks={}} ) => (
    <ul className={styles.players}>
        <li>
            <span className={styles.container}>
                <span className={styles.counter}>Mine</span>
                <span className={styles.title}>Stock</span>
                <span className={styles.counter}>Bank</span>
            </span>
        </li>
        {
            Object.keys(players[0].stocks).map( (stock, j) =>
                <li key={j}>
                    <StockTile title={stock} count={players[0].stocks[stock]} available={stocks[stock]} />
                </li>
            )
        }
    </ul>
);
