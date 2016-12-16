import { connect } from 'react-redux';
import { init } from '../actions/hotels.js';
import Players from '../components/Players';
import mountLoad from '../lib/mount-load';
import {wrap} from '../lib/ss-resolve';
import {isBrowser} from '../env.js';
import { addMeta } from '../lib/add-meta';

const MetaPlayers = addMeta(Players);
const LazyPlayers = mountLoad(MetaPlayers);

const resolveOnServer = (props, store) => store.dispatch( init() );
const ServerLoadedComponent = wrap(LazyPlayers, resolveOnServer);


const mapStateToProps = ({ players, hotels }) =>
    ({ players, hotels });


const bindActionsToDispatch = (dispatch) => ({
    onLoad: () => isBrowser && dispatch( init() )
});


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    onLoad: () => actions.onLoad(),
    wait: state.players.length === 0,
    metaTitle: "Acquire Players",
    meta: [
        {"name": "description", "content": "List of Players"},
        {"property": "og:type", "content": "article"}
    ]
});

export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( ServerLoadedComponent );
