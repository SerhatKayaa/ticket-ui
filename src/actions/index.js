export const getVisibility = (sidebarVisibility) => {
    return {
        type: 'GET_VISIBILITY',
        payload: sidebarVisibility,
    };
}

export const getListView = (listView) => {
    return {
        type: 'LIST_VIEW',
        payload: listView
    }
};

export const getFilterView = (filterView) => {
    return {
        type: 'FILTER_VIEW',
        payload: filterView,
    }
};