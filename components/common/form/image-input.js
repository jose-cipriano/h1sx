import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'
import styles from './image-input.module.css'

const ImageInput = ({
    label,
    border,
    id,
    name,
    error,
    background,
    handleError,
    onChange,
    onBlur,
    setFieldValue,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState('')

    const ref = useRef()
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
                <input
                    ref={ref}
                    className={styles.input}
                    onBlur={onBlur}
                    id={id}
                    name={name}
                    type="file"
                    onChange={(e) => {
                        let file = ref.file.files[0]
                        let reader = new FileReader()
                        let url = reader.readAsDataURL(file)

                        reader.onloaded = function (e) {
                            setImgSrc([reader.result])
                        }
                        console.log(url)
                        setFieldValue(name, e.currentTarget.files[0])
                    }}
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
            <Image src={imgSrc} alt="uploaded_image" width="100%" height="100%" />
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}

export default ImageInput
