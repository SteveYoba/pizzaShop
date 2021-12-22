import classNames from 'classnames'

function Button(props) {
    return (
        <div>
            <button className={classNames ('button', {
                        "button--cart": props.cart,
                    })}
                    onClick = {props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default Button