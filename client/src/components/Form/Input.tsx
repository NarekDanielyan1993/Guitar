import React from "react";

import "./input";

type Control = "input" | "texterea" | "dropdown";

interface IFieldProps {
    id: string;
    control: Control;
    label?: string;
    placeholder?: string;
    rows?: number;
    value?: any;
    keyPress?: (e?: React.KeyboardEvent) => void;
    change: (
        e?:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
    blur?: (
        e?:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
}

const Input: React.FC<IFieldProps> = (props) => {
    return (
        <div className="form-group">
            {props.label && (
                <label className="form-group__label" htmlFor={props.id}>
                    {props.label}
                </label>
            )}
            {props.control === "input" && (
                <input
                    className="form-group__control"
                    type="input"
                    name={props.id}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.change}
                    onBlur={props.blur}
                    onKeyPress={props.keyPress}
                />
            )}
            {props.control === "texterea" && (
                <textarea
                    className="form-group__textarea"
                    id={props.id}
                    rows={props.rows}
                    value={props.value}
                    onChange={props.change}
                    onBlur={props.blur}
                />
            )}
        </div>
    );
};

Input.defaultProps = {
    control: "input",
};

export default Input;
