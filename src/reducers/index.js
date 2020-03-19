import { combineReducers } from 'redux';

export const sidebarVisibilityReducer = (sidebarVisibility = false, action) => {
    if(action.type === 'GET_VISIBILITY') {
        return action.payload;
    }

    return sidebarVisibility;
};

export const listViewReducer = (listView = true, action) => {
    if(action.type === 'LIST_VIEW') {
        return action.payload;
    }

    return listView;
}

export const filterViewReducer = (filterView = true, action) => {
    if(action.type === 'FILTER_VIEW') {
        return action.payload;
    }

    return filterView;
}


export default combineReducers({
    sidebarVisibility: sidebarVisibilityReducer,
    listView: listViewReducer,
    filterView: filterViewReducer
});