import { storiesOf, action} from '@kadira/storybook';
import Counter from './Counter.js';
import styles from './Counter.story.css';

storiesOf('Counter', module)

    .add('default', () => (
        <div className={styles.wrapper}>
            <Counter count={20}
                inc={action('inc')}
                dec={action('dec')}
            />
        </div>
    ));
