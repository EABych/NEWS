let nextNewId = 0
export const addNew = (text) => {
  return {
    type: 'ADD_NEW',
    id: nextNewId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleNew = (id) => {
  return {
    type: 'TOGGLE_NEW',
    id
  }
}