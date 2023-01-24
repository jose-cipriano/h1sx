import React from 'react'
import { Field } from 'formik'
import styles from './select.module.css'

const Select = ({
    label,
    border,
    id,
    error,
    background,
    handleError,
    onChange,
    onBlur,
    options,
    name,
    ...props
}) => {
    let wrapperStyle = { border: border },
        labelErrorStyle

    if (!!error) {
        wrapperStyle = {
            border: '1px solid var(--color-red)',
        }
        labelErrorStyle = {
            color: 'var(--color-red)',
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <select
                    className={styles.select}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    id={id}
                    {...props}
                >
                    {options.map((opt) => {
                        return (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        )
                    })}
                </select>
                <label
                    className={styles.label}
                    background={background}
                    error={error}
                    htmlFor={id}
                    style={labelErrorStyle}
                >
                    {label}
                </label>
            </div>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}
export default Select
