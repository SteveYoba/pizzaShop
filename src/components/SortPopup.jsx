import React from 'react'

import arrowTop from '../img/arrow-top.svg'

const SortPopup = ({items}) => {
    const sortRef = React.useRef()
    const [visibleToggle, setvisibleToggle] = React.useState(false)
    const [activeItem, setActiveItem] = React.useState(0)

    const handleMouse = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setvisibleToggle(false);
        }
    }

    const toggleVisiblePopup = (index = activeItem) => {
        setvisibleToggle(!visibleToggle)
        setActiveItem(index)
    }

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
                <span onClick={() => toggleVisiblePopup()}>
                    {items[activeItem].name}
                </span>
            </div>
            {visibleToggle &&
                <div className="sort__popup">
                    <ul>
                        {items.map((obj, index) =>
                            <li className={index === activeItem ? 'active' : ''}
                                key={`${obj.type}_${index}`}
                                onClick={() => {
                                    toggleVisiblePopup(index)
                                }}>
                                {obj.name}
                            </li>
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default SortPopup
