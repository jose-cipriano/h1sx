import React from 'react'
import styles from './file-input.module.css'

const FileInput = ({
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

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                <input
                    className={styles.input}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={id}
                    type="file"
                    style={{ color: props.inputColor ? props.inputColor : null }}
                    {...props}
                />
                <div className={styles.fakeFile}>
                    <input className={styles.fakeInput} />
                </div>
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

export default FileInput
