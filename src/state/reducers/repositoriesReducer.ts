import {ActionType} from '../action-types/';
import {Action} from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}
/* ale takhle se nam to moc nelibi (kvuli tomu any u payloadu), proto je rozdelime na 3 ruzne akce
interface Action {
  type: string;
  payload?: any; // if it has payload (proto ten ?), tak muze byt type any
}
*/

const initialState = {
  loading: false,
  error: null,
  data:[],
}

// za tu zavorku prihodime RepositoriesState, takze TypeScript bude vedet ze ma return objekt ve tvaru Repositories State
const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCES:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
