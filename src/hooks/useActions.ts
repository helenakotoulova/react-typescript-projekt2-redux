import {Dispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch); // ziskavame pak objekt:
    // {searchRepositories: dispatch(searchRepositories)}
};