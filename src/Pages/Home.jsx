import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const categoryNames = [
    'Мясные', 'Вегетарианская',
    'Гриль', 'Острые', 'Закрытые',
]

const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
]

const Home = (() => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy, dispatch])

    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortType = React.useCallback(type => {
        dispatch(setSortBy(type))
    }, [dispatch])

    const handleAddPizzaToCart = (date) => {
        dispatch ({
            type: 'ADD_PIZZA_CART',
            payload: date,
        })
    }    

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames} />
                <SortPopup
                    activeSortType={sortBy}
                    items={sortItems}
                    onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map((obj) =>
                            <PizzaBlock onClickAddPizza={handleAddPizzaToCart}
                                key={obj.id}
                                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                isLoading={true}
                                {...obj} />
                                )
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}
)

export default Home