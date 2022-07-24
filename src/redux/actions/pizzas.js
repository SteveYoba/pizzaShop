import {get} from 'axios'

export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false))
    get(`http://localhost:3000/pizzas?${category != null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then ((resp) => {
        dispatch(setPizzas (resp.data))
    })
}

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
}) 

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
}) 