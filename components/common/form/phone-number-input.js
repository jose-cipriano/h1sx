import styles from './phone-number-input.module.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const PhoneNumberInput = ({
    label,
    border,
    id,
    error,
    name,
    background,
    handleError,
    onChange,
    onBlur,
    setFieldValue,
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

    const onValueChange = (code) => {
        if (!code) return
        setFieldValue(name, code)

        if (onChange !== null) {
            onChange(code)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <PhoneInput
                    className={styles.input}
                    onBlur={onBlur}
                    id={id}
                    defaultCountry="US"
                    onChange={onValueChange}
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
