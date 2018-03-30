export const UPDATE_FILTERS = 'query:updateFilters'

export const updateFilters = filters => {
    return {
        type: UPDATE_FILTERS,
        payload: {
            filters: filters
        }
    }
}