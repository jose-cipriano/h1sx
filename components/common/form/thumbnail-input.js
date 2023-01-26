import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'
import styles from './thumbnail-input.module.css'

const ThumbnailInput = ({
    label,
    border,
    id,
    name,
    error,
    background,
    handleError,
    onChange,
    onBlur,
    ...props
}) => {
    const [imgSrc, setImgSrc] = useState(null)
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

    console.log(imgSrc)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper} style={wrapperStyle}>
                {/* <input
                    ref={ref}
                    className={styles.thumbnailInput}
                    onBlur={onBlur}
                    id={id}
                    name={name}
                    type="file"
                    onChange={(e) => {
                        let file = e.target.files[0]
                        let reader = new FileReader()
                        let url = reader.readAsDataURL(file)

                        reader.onloadend = function (e) {
                            setImgSrc([reader.result])
                        }
                        console.log(url)
                        setFieldValue(name, e.currentTarget.files[0])
                    }}
                    style={{ color: props.inputColor ? props.inputColor : null }}
                    {...props}
                /> */}
                <div className={styles.fakeFile}>
                    <input className={styles.fakeInput} />
                </div>
                <label
                    className={styles.thumbnailInputLabel}
                    background={background}
                    error={error}
                    htmlFor={id}
                    style={labelErrorStyle}
                >
                    +
                </label>
                {/* {imgSrc?.length && (
                    <Image
                        className={styles.preview}
                        src={imgSrc[0]}
                        alt="uploaded_image"
                        width={285}
                        height={280}
                    />
                )} */}
            </div>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}

export default ThumbnailInput
