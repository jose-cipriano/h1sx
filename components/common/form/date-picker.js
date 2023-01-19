import React from 'react'
import styles from './date-picker.module.css'

const DatePicker = ({
    label,
    border,
    id,
    error,
    background,
    handleError,
    onChange,
    onBlur,
    disabled,
    ...props
}) => {
    let wrapperStyle = { border: border }
    let labelErrorStyle

    if (!!error) {
        wrapperStyle = {
            border: '1px solid var(--color-red)',
        }
        labelErrorStyle = {
            color: 'var(--color-red)',
        }
    }

    let labelStyle = null
    if (disabled) {
        labelStyle = {
            backgroundColor: 'transparent',
            opacity: 0,
            ...labelErrorStyle,
        }
    } else {
        labelStyle = labelErrorStyle
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <input
                    className={styles.input}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={id}
                    style={{ color: props.inputColor ? props.inputColor : null }}
                    disabled={disabled}
                    {...props}
                    type="date"
                />
                <label
                    className={styles.label}
                    background={background}
                    error={error}
                    htmlFor={id}
                    style={labelStyle}
                >
                    {label}
                </label>
            </div>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
        </div>
    )
}

export default DatePicker
