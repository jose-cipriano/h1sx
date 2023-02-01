import { Field } from 'formik'
import React from 'react'
import styles from './radio-select.module.css'

const radioOptions = ['included', 'extra']
const priceOptions = [15, 30, 50, 75, 100, 125, 150]
const RadioSelect = ({ id, value, setValue, touched, idx }) => {
    return (
        <div className={styles.container}>
            <div className={styles.optionsContent} id={id}>
                <div className={styles.optionTitle}>{value.title}</div>
                <div className={styles.optionRadio}>
                    {radioOptions.map((item) => {
                        return (
                            <div key={item} role="group" aria-labelledby="radio-group">
                                {(idx === 0 || idx === 1) && (
                                    <label style={{ top: '-20px', position: 'absolute' }}>
                                        {item}
                                    </label>
                                )}
                                <Field
                                    touched={touched}
                                    type="radio"
                                    className={styles.optionInput}
                                    checked={item === value.type}
                                    value={item}
                                    onChange={() => setValue({ ...value, type: item })}
                                />
                            </div>
                        )
                    })}
                    <div className={styles.optionItem}>
                        {(idx === 0 || idx === 1) && (
                            <label style={{ top: '-20px', left: 0 }}>price</label>
                        )}
                        {value.type === 'extra' && (
                            <Field
                                as="select"
                                className={styles.priceInput}
                                value={value.price}
                                onChange={(e) =>
                                    setValue({ ...value, price: Number(e.target.value) })
                                }
                            >
                                {priceOptions.map((opt) => {
                                    return (
                                        <option key={opt} value={opt}>
                                            {opt}
                                        </option>
                                    )
                                })}
                            </Field>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.bar}></div>
        </div>
    )
}

export default RadioSelect
