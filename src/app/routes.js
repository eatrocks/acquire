import { Route, IndexRoute } from 'react-router';
import App from './containers/app.js';
import Hotels from './containers/hotels.js';
import Players from './containers/players.js';
import {APP_WEB_BASE_PATH} from './env.js';

const routes = (
    <Route path={`${APP_WEB_BASE_PATH||'/'}`} component={App} >
        <IndexRoute component={Hotels} />
        <Route path="hotels" component={Hotels} />
        <Route path="players" component={Players} />
        <Route path="*" component={Hotels} />
    </Route>
);

export default routes;
