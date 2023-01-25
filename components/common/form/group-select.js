import { Field } from 'formik'
import React from 'react'
import styles from './group-select.module.css'

const GroupSelect = ({ label, id, error, onBlur, options, upTo, values, name, ...props }) => {
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
            <fieldset className={styles.fieldset} style={fieldSetErrStyle} {...props}>
                <legend
                    style={{
                        marginLeft: '4px',
                        color: 'var(--color-grey)',
                        fontSize: '0.96rem',
                        textTransform: 'initial',
                        fontWeight: 'initial',
                        ...legendErrStyle,
                    }}
                    className={styles.groupSelectLegend}
                >
                    {label}
                </legend>
                <div className={styles.selectGroups} role="group" aria-labelledby="checkbox-group">
                    {options.map((tag, idx) => (
                        <label key={tag} className={styles.badge}>
                            <Field
                                name={name[idx]}
                                type="checkbox"
                                value={tag}
                                className={styles.inputSelect}
                            />
                            <span>{tag}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
                {error && `. Select up to ${upTo} values.`}
            </p>
        </div>
    )
}

export default GroupSelect
