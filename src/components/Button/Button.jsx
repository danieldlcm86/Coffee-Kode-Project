import './button.css';

function Button({ href, text}) {
    return(
        <a href={href} rel="noopener noreferrer">
            <button className='btn-kits'>{text}</button>
        </a>
    )
}

export default Button;