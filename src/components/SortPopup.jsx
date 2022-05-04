import React from 'react'

import arrowTop from '../img/arrow-top.svg'

const SortPopup = React.memo (({items, activeSortType, onClickSortType}) => {
    const sortRef = React.useRef()
    const [visibleToggle, setvisibleToggle] = React.useState(false)
    
    const handleMouse = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setvisibleToggle(false);
        }
    }

    const toggleVisiblePopup = () => {
        setvisibleToggle(!visibleToggle)
    }

    const onSelectItem = (index) => {
        if (onClickSortType) {
          onClickSortType(index);
        }
        setvisibleToggle(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleMouse)
    }, [])

    return (
        <div ref={sortRef}
            className="sort">
            <div className="sort__label">
                <img src={arrowTop} alt='^' 
                    className={visibleToggle ? 'rotated' : ''}/>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>
                    {items.find((obj)=>obj.type === activeSortType).name}
                </span>
            </div>
            {visibleToggle &&
                <div className="sort__popup">
                    <ul>
                        {items.map((obj, index) =>
                            <li className={activeSortType===obj.type ? 'active' : ''}
                                key={`${obj.type}_${index}`}
                                onClick={() => {
                                    onSelectItem(obj.type)
                                }}>
                                {obj.name}
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
})

export default SortPopup
