import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state';

// tohle opet musime udelat kvuli tomu, ze ten typescript ne vzdy dobre kominukuje s typescriptem.
// tzn misto pouzivani useSelector, budeme pouzivat nas hook useTypedSelector
export const useTypedSelector: TypedUseSelectorHook<RootState>=useSelector;