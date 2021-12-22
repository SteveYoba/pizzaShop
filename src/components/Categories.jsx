import React from 'react'

function Categories(props) {
    let [activeItem, setActiveItem] = React.useState(null)

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveItem(null)}
                    className={activeItem == null ? 'active' : ''}>Все</li>
                {props.items &&
                    props.items.map((item, index) =>
                        <li className={index === activeItem ? 'active' : ''}
                            onClick={() => {
                                setActiveItem(index)
                                props.onClick(item)
                            }}
                            key={`${item}_${index}`}>{item}</li>
                    )}
            </ul>
        </div>
    )
}

export default Categories


