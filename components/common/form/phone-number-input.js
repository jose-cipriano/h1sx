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
    let fieldSetErrStyle, legendErrStyle

    if (!!error) {
        fieldSetErrStyle = {
            border: '1px solid var(--color-red)',
        }
        legendErrStyle = {
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
            <fieldset className={styles.fieldset} style={fieldSetErrStyle}>
                <legend
                    className={styles.phoneInputLegend}
                    style={{
                        marginLeft: '4px',
                        color: 'var(--color-grey)',
                        fontSize: '0.96rem',
                        textTransform: 'initial',
                        fontWeight: 'initial',
                        ...legendErrStyle,
                    }}
                >
                    Phone number
                </legend>
                <PhoneInput
                    onBlur={onBlur}
                    id={id}
                    defaultCountry="US"
                    onChange={onValueChange}
                    {...props}
                />
            </fieldset>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}

export default PhoneNumberInput
