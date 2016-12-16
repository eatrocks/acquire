import { storiesOf, action} from '@kadira/storybook';
import StockTile from './StockTile.js';


storiesOf('StockTile', module)

    .add('default', () => (
        <StockTile count={20}
            available={9}
            title='American'
            playerInc={action('playerInc')}
            playerDec={action('playerDec')}
            bankInc={action('bankInc')}
            bankDec={action('bankDec')}
        />
    ));
