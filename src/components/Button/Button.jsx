import './Button.css'
function Button() {
    let text = 'Сохранить'
    const clicked = () => {
        text = 'Закрыть'
        console.log('Привет!')
    }
    return (
        <button onClick={clicked} className="button accent">
            {text}
        </button>
    )
}

export default Button
