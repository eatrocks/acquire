import { connect } from 'react-redux';
import { init } from '../actions/hotels.js';
import Hotels from '../components/Hotels';
import mountLoad from '../lib/mount-load';
import {wrap} from '../lib/ss-resolve';
import {isBrowser} from '../env.js';
import { addMeta } from '../lib/add-meta';

const MetaHotels = addMeta(Hotels);
const LazyHotels = mountLoad(MetaHotels);

const resolveOnServer = (props, store) => store.dispatch( init() );
const ServerLoadedComponent = wrap(LazyHotels, resolveOnServer);


const mapStateToProps = ({ hotels }) =>
    ({ hotels: hotels.all, current: hotels.current });


const bindActionsToDispatch = (dispatch) => ({
    onLoad: () => isBrowser && dispatch( init() )
});


const mergeAllTheProps = (state, actions, own) => ({
    ...state, ...actions, ...own,
    onLoad: () => actions.onLoad(),
    wait: state.hotels.length === 0,
    metaTitle: "Acquire Hotels",
    meta: [
        {"name": "description", "content": "List of hotels"},
        {"property": "og:type", "content": "article"}
    ]
});


export default connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllTheProps
)( ServerLoadedComponent );
