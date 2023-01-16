import React from "react";

const Input = ({
    label,
    id,
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
    errormessage,
    isRequired = true,
    isShowIcon = false,
    ...rest
}) => {
    return (
        <div>
            {label &&
                <label
                    className="font_bold"
                    htmlFor={id}
                >
                    {label}{isRequired && <span style={{ color: 'red' }}>*</span>}
                </label>
            }

            <div className="input-group">
                {isShowIcon && <span className="input-group-text">₹</span>}
                <input
                    id={id}
                    className={`form-control ${error ? "border-danger" : null}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...rest}
                />
            </div>
            {(error && errormessage) && <div className="text-danger">{errormessage}</div>}
        </div>
    );
}

export default Input;