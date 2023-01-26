import Image from 'next/image'
import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'
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
    values,
    height,
    ...props
}) => {
    let fieldSetStyle, legendStyle

    if (!!error) {
        fieldSetStyle = {
            border: '1px solid var(--color-red)',
        }
        legendStyle = {
            color: 'var(--color-red)',
        }
    } else {
        if (values[name]) {
            fieldSetStyle = {
                border: '1px solid var(--color-green)',
            }
            legendStyle = {
                color: 'var(--color-green)',
            }
        }
    }

    const [images, setImages] = useState([])
    const onChangeImg = (imageList, addUpdateIndex) => {
        // data for submit
        setImages(imageList)
        setFieldValue(name, imageList[0])
    }

    return (
        <div className={styles.container}>
            <fieldset
                className={styles.fieldset}
                style={{ ...fieldSetStyle, height: height }}
                {...props}
            >
                <legend
                    className={styles.imageInputLegend}
                    style={{
                        marginLeft: '4px',
                        color: 'var(--color-grey)',
                        fontSize: '0.96rem',
                        textTransform: 'initial',
                        fontWeight: 'initial',
                        backgroundColor: 'transparent',
                        zIndex: 100,
                        position: 'relative',
                        ...legendStyle,
                    }}
                >
                    {label}
                </legend>
                <ImageUploading
                    value={images}
                    onChange={onChangeImg}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'png', 'jpeg']}
                >
                    {({ imageList, onImageUpload, onImageUpdate, isDragging, dragProps }) => (
                        <div
                            className={styles.uploadImageWrapper}
                            style={isDragging ? { color: 'red' } : null}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <div className={styles.circle} />
                            <ul className={styles.imageCover}>
                                <li>max. file size is 20mb</li>
                                <li>supported files are jpeg, png, webp</li>
                                <li>portrait oriented recommended (2:3 ratio)</li>
                                <li>
                                    new uploads/modifications will be approaved manually - this can
                                    take up to 12h
                                </li>
                                <li>restrictions: genitals (vagina, penis)</li>
                            </ul>
                            {imageList.map((image, idx) => (
                                <div key={idx} className={styles.imageItem}>
                                    <Image
                                        src={image.data_url}
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className={styles.imageItemBtnWrapper}>
                                        <button onClick={() => onImageUpdate(idx)}></button>
                                        {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
            </fieldset>
            <p className={styles.error} lh="1.4" align="left" color="red-1">
                {error}
            </p>
            {error && <div className={styles.styledError} onClick={handleError} />}
        </div>
    )
}

export default ImageInput
