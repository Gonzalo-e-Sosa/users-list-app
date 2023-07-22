import { MouseEventHandler } from "react";
import './styles/Button.css';

interface Props{
    onClick: MouseEventHandler<HTMLButtonElement>
    children: string
}

const Button = ( { onClick, children }: Props ) => {
    return(
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;