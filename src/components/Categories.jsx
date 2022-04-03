import React from 'react'

const Categories = ({items, onClickItem}) => {
    let [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onSelectItem(null)}
                    className={activeItem == null ? 'active' : ''}>Все</li>
                {items &&
                    items.map((item, index) =>
                        <li className={index === activeItem ? 'active' : ''}
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
}

export default Categories


