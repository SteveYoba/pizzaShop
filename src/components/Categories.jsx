import React from 'react'

const Categories = ({items}) => {
    let [activeItem, setActiveItem] = React.useState(null)

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveItem(null)}
                    className={activeItem == null ? 'active' : ''}>Все</li>
                {items &&
                    items.map((item, index) =>
                        <li className={index === activeItem ? 'active' : ''}
                            onClick={() => {
                                setActiveItem(index)
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


