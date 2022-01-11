import classNames from 'classnames'

const Button = ({cart, children}) => {
    return (
        <div>
            <button className={classNames ('button', {
                        "button--cart": cart,
                    })}>
                {children}
            </button>
        </div>
    )
}

export default Button