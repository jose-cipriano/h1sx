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
    let fieldSetErrStyle, legendErrStyle

    if (!!error) {
        fieldSetErrStyle = {
            border: '1px solid var(--color-red)',
        }
        legendErrStyle = {
            color: 'var(--color-red)',
        }
    }
    return (
        <div className={styles.container}>
            <fieldset className={styles.fieldset} {...props}>
                <legend
                    style={{
                        marginLeft: '4px',
                        color: 'var(--color-grey)',
                        fontSize: '0.96rem',
                        textTransform: 'initial',
                        fontWeight: 'initial',
                        ...legendErrStyle,
                    }}
                    className={styles.optionSelectLegend}
                >
                    {label}
                </legend>
                <div>
                    <Field name={name} as="select" className={styles.optionSelect}>
                        {options?.map((opt) => {
                            return (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            )
                        })}
                    </Field>
                </div>
            </fieldset>
        </div>
    )
}
export default Select
