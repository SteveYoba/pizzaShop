import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory } from '../redux/actions/filters';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';


const categoryNames = [
                        'Мясные', 'Вегетарианская',
                        'Гриль', 'Острые', 'Закрытые',
                    ]
const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'},
]

const Home = (() => {
    const dispatch = useDispatch()
    const items = useSelector (
        ({pizzas}) => pizzas.items
    )
    const isLoaded = useSelector (({pizzas}) => pizzas.isLoaded)
    
    React.useEffect (()=>{
        dispatch(fetchPizzas())
    },[])

    const onSelectCategory = React.useCallback (index => {
      dispatch(setCategory(index))
    })
  
      return (
          <div className="container">
              <div className="content__top">
                  <Categories
                      onClickItem={onSelectCategory}
                      items={categoryNames} />
                  <SortPopup
                      items={sortItems} />
              </div>
              <h2 className="content__title">Все пиццы</h2>
              <div className="content__items">
                  {
                    isLoaded  
                    ? items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)
                    : Array(12).fill(<LoadingBlock/>)
                  }
                </div>
            </div>
      )
  }
) 

export default Home