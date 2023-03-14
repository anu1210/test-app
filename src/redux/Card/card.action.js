    import { SET_DATA } from "../Card/card.types";
    import {SET_SEARCH} from "../Card/card.types";
    export const setData = (data) => ({
        type: SET_DATA,
        payload:data
    });
    export const setSearch = (search) => ({
        type: SET_SEARCH,
        payload:search
    });