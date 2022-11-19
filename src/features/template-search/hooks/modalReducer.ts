import { Template } from "../store/types";

export type Action =
    { type: 'setTemplateList', payload: Template[] } |
    { type: 'setIdList', payload: string[] } |
    { type: 'setSearchInput', payload: string }

export type ReducerState = {
    templateList: Template[],
    ids: string[],
    searchInput: string,
}

export const modalReducer = (state: ReducerState, action: Action): ReducerState => {
    if (action.type === "setIdList") {
        return {
            ...state,
            ids: action.payload,
        }
    }
    if (action.type === "setSearchInput") {
        return {
            ...state,
            searchInput: action.payload,
        }
    }
    return state;
};
