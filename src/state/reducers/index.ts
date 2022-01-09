import {combineReducers} from 'redux';
import reducer from './repositoriesReducer';

const reducers = combineReducers({
    repositories:reducer
})

export default reducers;

// tohle tady pridame, protoze redux uplne nefunguje dobre s typescriptem nekdy.
// bez toho jsme totoiz v repositoriesList dostavali error, ze jaky je type of state v useSelectoru
export type RootState = ReturnType<typeof reducers>;