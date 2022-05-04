import React from 'react'

const Categories = React.memo(({activeCategory, items, onClickItem}) => {

    const onSelectItem = (index) => {
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)}
                    className={activeCategory == null ? 'active' : ''}>Все</li>
                {items &&
                    items.map((item, index) =>
                        <li className={index === activeCategory ? 'active' : ''}
                            onClick={() => {
                                onSelectItem(index)
                            }}
                            key={`${item}_${index}`}>
                            {item}
                        </li>
                    )}
            </ul>
        </div>
    )
})

export default Categories


