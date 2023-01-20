import { useState } from 'react'
import styles from './phone-number-input.module.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const PhoneNumberInput = ({
    label,
    border,
    id,
    error,
    background,
    handleError,
    onChange,
    onBlur,
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
    const [value, setValue] = useState()
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <PhoneInput
                    className={styles.input}
                    onChange={setValue}
                    onBlur={onBlur}
                    id={id}
                    value={value}
                    {...props}
                />
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

export default PhoneNumberInput
