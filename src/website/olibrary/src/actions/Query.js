export const UPDATE_QUERY = 'filters:updateQuery'

export const updateQuery = query => {
    return {
        type: UPDATE_QUERY,
        payload: {
            query: query
        }
    }
}