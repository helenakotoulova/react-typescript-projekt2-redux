import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions';
// tohle je primo objekt nadefinovany v reduxu
import {Dispatch} from 'redux';

// vytvorime action creator thunk, coz je funkce, ktera primo nevraci akci,
// ale vraci dalsi funkci, ktera eventually vraci akci. proto je tam to return async(dispatch)
export const searchRepositories = (term:string) => {
    return async(dispatch:Dispatch<Action>) => {
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES,
        })
        try {
            const {data}= await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })
            const names = data.objects.map((result:any)=> {
                return result.package.name;
            })
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_SUCCES,
                payload:names,
            })
        } catch(err) {
            dispatch({
                type:ActionType.SEARCH_REPOSITORIES_ERROR,
                payload:err.message,
            })
        }
    }
}