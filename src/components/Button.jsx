import classNames from 'classnames'
import propTypes from 'prop-types'

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

Button.propTypes = {
    cart: propTypes.bool,
    onClick: propTypes.func,
}

export default Button