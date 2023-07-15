import './Button.css'

const Button = ({clickHandler, buttonLabel, value}) => {

    return ( <button onClick={clickHandler} value={value}> {buttonLabel} </button>)
}

export default Button;