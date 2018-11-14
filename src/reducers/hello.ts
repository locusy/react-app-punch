import { EnthusiasmAction } from '../actions';
import { IStoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState = {
    languageName: 'typeScript',
    enthusiasmLevel: 1
}

export default function enthusiasm(state: IStoreState = initialState, action: EnthusiasmAction): IStoreState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: (state.enthusiasmLevel || 0) + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, (state.enthusiasmLevel || 0) - 1) };
    }
    return state;
}