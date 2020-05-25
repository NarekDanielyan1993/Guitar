import React, { ButtonHTMLAttributes } from "react";
//import { Link } from "react-router-dom";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children: React.ReactNode;
    //className?: string;
}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick,
    className,
    ...rest
}) => {
    let style = className ? [`btn, btn--${className}`].join(" ") : "btn";

    return (
        <button className={style} {...rest} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
